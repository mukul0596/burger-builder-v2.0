import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import Burger from '../../component/Burger/Burger';
import BuildControls from '../../component/Burger/BuildControls/BuildControls';
import Modal from '../../component/UI/Modal/Modal';
import OrderSummary from '../../component/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../component/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

const INGREDIENT_PRICES = {
    salad: 5,
    meat: 15,
    cheese: 10,
    bacon: 10
}

class BurgerBuilder extends Component {
    state = {
        ingredients: null,
        totalPrice: 30,
        purchaseable: false,
        purchasing: false,
        loading: false,
        error: false
    }

    componentDidMount () {
        axios.get('https://burger-builder-f4829.firebaseio.com/ingredients.json')
            .then((response) => {
                this.setState({ ingredients: response.data })
            }).catch(error => {
                this.setState({ error: true })
            });
    }

    continuePurchaseHandler = () => {
        const queryParams = [];
        for (let i in this.state.ingredients) {
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
        }
        queryParams.push('totalPrice=' + this.state.totalPrice);
        const queryString = queryParams.join('&')
        this.props.history.push({
            pathname: '/checkout',
            search: '?' + queryString
        });
    }

    cancelPurchaseHandler = () => {
        this.setState({ purchasing: false });
    }

    purchaseHandler = () => {
        this.setState({ purchasing: true });
    }

    updatedPurchaseState = (ingredient) => {
        const ingredients = {
            ...ingredient
        };
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
        this.setState({ purchaseable: sum > 0 ? true : false })
    }

    addIngredientHandler = (type) => {
        const newCount = this.state.ingredients[type] + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = newCount;

        const priceAddition = INGREDIENT_PRICES[type];
        const newPrice = this.state.totalPrice + priceAddition;

        this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });

        this.updatedPurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        if (this.state.ingredients[type] <= 0) {
            return;
        }
        const newCount = this.state.ingredients[type] - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = newCount;

        const priceAddition = INGREDIENT_PRICES[type];
        const newPrice = this.state.totalPrice - priceAddition;

        this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });

        this.updatedPurchaseState(updatedIngredients);
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        let orderSummary;
        if (this.state.loading) {
            orderSummary = <Spinner />
        } else {
            orderSummary = null;
            if (this.state.ingredients) {
                orderSummary = (
                    <OrderSummary 
                        ingredients={ this.state.ingredients } 
                        cancelPurchase={ this.cancelPurchaseHandler } 
                        continuePurchase={ this.continuePurchaseHandler } 
                        totalPrice={ this.state.totalPrice } />
                )
            }
        }

        let burger = this.state.error ? <p style={{textAlign: 'center'}}>Oops! looks like ingredients can't be loaded.</p> : <Spinner style={{transform: 'translateY(25vh)'}} />;
        if (this.state.ingredients) {
            burger = (
                <Aux>
                    <Burger ingredients={ this.state.ingredients } />
                    <BuildControls 
                        addIngredient={ this.addIngredientHandler } 
                        removeIngredient={ this.removeIngredientHandler } 
                        disabled={ disabledInfo } 
                        totalPrice={ this.state.totalPrice } 
                        purchaseable={ this.state.purchaseable } 
                        purchasing={ this.purchaseHandler } />
                </Aux>
            )
        }
        
        return (
            <Aux>
                <Modal show={ this.state.purchasing } modalClose={ this.cancelPurchaseHandler }>
                    { orderSummary }
                </Modal>
                { burger }
            </Aux>
        )
    }
}

export default withErrorHandler(BurgerBuilder, axios);