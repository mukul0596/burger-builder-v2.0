(window["webpackJsonpburegr-builder"]=window["webpackJsonpburegr-builder"]||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/burger-logo.b8503d26.png"},,,,function(e,t,n){e.exports=n(58)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(16),i=n.n(c),l=(n(26),n(2)),s=n(3),o=n(5),u=n(4),d=n(6),m=function(e){return e.children},h=(n(27),n(28),n(17)),p=n.n(h),f=(n(29),function(e){return r.a.createElement("div",{className:"Logo",style:{height:e.height}},r.a.createElement("img",{src:p.a,alt:"MyBurger"}))}),g=(n(30),function(e){return r.a.createElement("ul",{className:"NavigationItems"},r.a.createElement("li",{className:"NavigationItem"},r.a.createElement("a",{href:"/",className:"active"},"Burger Builder")),r.a.createElement("li",{className:"NavigationItem"},r.a.createElement("a",{href:"/"},"Checkout")))}),b=(n(31),function(e){return r.a.createElement("div",{onClick:e.click,className:"DrawerToggle"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))}),E=function(e){return r.a.createElement("header",{className:"Toolbar"},r.a.createElement(b,{click:e.toogle}),r.a.createElement(f,{height:"80%"}),r.a.createElement("nav",{className:"DesktopOnly"},r.a.createElement(g,null)))},v=(n(32),n(33),function(e){return e.show?r.a.createElement("div",{className:"Backdrop",onClick:e.click}):null}),y=function(e){var t=["SideDrawer",e.open?"Open":"Close"].join(" ");return r.a.createElement(m,null,r.a.createElement(v,{show:e.open,click:e.close}),r.a.createElement("div",{className:t},r.a.createElement(f,{height:"11%"}),r.a.createElement(g,null)))},O=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={showSideDrawer:!1},n.closeSideDrawerHandler=function(){n.setState({showSideDrawer:!1})},n.toogleSideDrawerHandler=function(){n.setState(function(e){return{showSideDrawer:!e.showSideDrawer}})},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(m,null,r.a.createElement(E,{toogle:this.toogleSideDrawerHandler}),r.a.createElement(y,{open:this.state.showSideDrawer,close:this.closeSideDrawerHandler}),r.a.createElement("main",{className:"Content"},this.props.children))}}]),t}(a.Component),w=n(18),k=n(20),j=(n(34),n(35),function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=r.a.createElement("div",{className:"BreadBottom"});break;case"bread-top":e=r.a.createElement("div",{className:"BreadTop"},r.a.createElement("div",{className:"Seeds1"}),r.a.createElement("div",{className:"Seeds2"}));break;case"meat":e=r.a.createElement("div",{className:"Meat"});break;case"cheese":e=r.a.createElement("div",{className:"Cheese"});break;case"bacon":e=r.a.createElement("div",{className:"Bacon"});break;case"salad":e=r.a.createElement("div",{className:"Salad"});break;default:e=null}return e}}]),t}(a.Component)),N=function(e){var t=Object.keys(e.ingredients).map(function(t){return Object(k.a)(Array(e.ingredients[t])).map(function(e,n){return r.a.createElement(j,{key:t+n,type:t})})}).reduce(function(e,t){return e.concat(t)},[]);return 0===t.length&&(t=r.a.createElement("p",null,"Please start adding ingredients!")),r.a.createElement("div",{className:"Burger"},r.a.createElement(j,{type:"bread-top"}),t,r.a.createElement(j,{type:"bread-bottom"}))},P=(n(36),n(37),function(e){return r.a.createElement("div",{className:"BuildControl"},r.a.createElement("div",{className:"Label"},e.label),r.a.createElement("button",{className:"Less",onClick:function(){return e.removeIngredient(e.type)},disabled:e.disabled},"-"),r.a.createElement("button",{className:"More",onClick:function(){return e.addIngredient(e.type)}},"+"))}),S=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Meat",type:"meat"},{label:"Cheese",type:"cheese"}],C=function(e){return r.a.createElement("div",{className:"BuildControls"},r.a.createElement("p",null,"Current Price: \u20b9",r.a.createElement("strong",null,e.totalPrice)),S.map(function(t){return r.a.createElement(P,{label:t.label,key:t.label,type:t.type,addIngredient:e.addIngredient,removeIngredient:e.removeIngredient,disabled:e.disabled[t.type]})}),r.a.createElement("button",{className:"OrderButton",disabled:!e.purchaseable,onClick:e.purchasing},"ORDER NOW!"))},I=(n(38),function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show||e.children!==this.props.children}},{key:"render",value:function(){return r.a.createElement(m,null,r.a.createElement(v,{show:this.props.show,click:this.props.modalClose}),r.a.createElement("div",{className:"Modal",style:{transform:this.props.show?"translateY(0)":"translateY(-50vh)",opacity:this.props.show?1:0}},this.props.children))}}]),t}(a.Component)),D=(n(39),function(e){return r.a.createElement("button",{className:["Button",e.type].join(" "),onClick:e.click},e.children)}),B=function(e){var t=Object.keys(e.ingredients).map(function(t){return r.a.createElement("li",{key:t},r.a.createElement("span",{style:{textTransform:"capitalize"}},t),": ",e.ingredients[t])});return r.a.createElement(m,null,r.a.createElement("h3",null,"Your Order"),r.a.createElement("p",null,"A delicious burger with the following ingredients: "),r.a.createElement("ul",null,t),r.a.createElement("strong",null,"Total Price: \u20b9",e.totalPrice),r.a.createElement("p",null,"Continue to checkout?"),r.a.createElement(D,{type:"Success",click:e.continuePurchase},"CONTINUE"),r.a.createElement(D,{type:"Danger",click:e.cancelPurchase},"CANCEL"))},H=n(19),M=n.n(H).a.create({baseURL:"https://burger-builder-f4829.firebaseio.com/"}),A=(n(57),function(e){return r.a.createElement("div",{className:"Loader",style:e.style},"Loading...")});function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(n,!0).forEach(function(t){Object(w.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var W={salad:5,meat:15,cheese:10,bacon:10},q=function(e,t){return function(n){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(o.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).state={error:null},t.errorConfirmHandler=function(){t.setState({error:null})},t}return Object(d.a)(a,n),Object(s.a)(a,[{key:"componentWillMount",value:function(){var e=this;this.reqInterceptor=t.interceptors.request.use(function(t){return e.setState({error:null}),t}),this.resInterceptor=t.interceptors.response.use(function(e){return e},function(t){e.setState({error:t})})}},{key:"componentWillUnmount",value:function(){t.interceptors.request.eject(this.reqInterceptor),t.interceptors.response.eject(this.resInterceptor)}},{key:"render",value:function(){return r.a.createElement(m,null,r.a.createElement(I,{show:this.state.error,modalClose:this.errorConfirmHandler},this.state.error?this.state.error.message:null),r.a.createElement(e,this.props))}}]),a}(a.Component)}(function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={ingredients:null,totalPrice:30,purchaseable:!1,purchasing:!1,loading:!1,error:!1},n.continuePurchaseHandler=function(){n.setState({loading:!0});var e={ingredients:n.state.ingredients,price:n.state.totalPrice,customer:{name:"Mukul Gupta",address:{street:"RM 4107 BITS Pilani",zipCode:"333031",country:"India"},email:"test@test.com"},diliver:"Fastest"};M.post("/orders.json",e).then(function(e){n.setState({loading:!1,purchasing:!1}),console.log(e)}).catch(function(e){n.setState({loading:!1,purchasing:!1}),console.log(e)})},n.cancelPurchaseHandler=function(){n.setState({purchasing:!1})},n.purchaseHandler=function(){n.setState({purchasing:!0})},n.updatedPurchaseState=function(e){var t=T({},e),a=Object.keys(t).map(function(e){return t[e]}).reduce(function(e,t){return e+t},0);n.setState({purchaseable:a>0})},n.addIngredientHandler=function(e){var t=n.state.ingredients[e]+1,a=T({},n.state.ingredients);a[e]=t;var r=W[e],c=n.state.totalPrice+r;n.setState({ingredients:a,totalPrice:c}),n.updatedPurchaseState(a)},n.removeIngredientHandler=function(e){if(!(n.state.ingredients[e]<=0)){var t=n.state.ingredients[e]-1,a=T({},n.state.ingredients);a[e]=t;var r=W[e],c=n.state.totalPrice-r;n.setState({ingredients:a,totalPrice:c}),n.updatedPurchaseState(a)}},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;M.get("https://burger-builder-f4829.firebaseio.com/ingredients.json").then(function(t){e.setState({ingredients:t.data})}).catch(function(t){e.setState({error:!0})})}},{key:"render",value:function(){var e,t=T({},this.state.ingredients);for(var n in t)t[n]=t[n]<=0;this.state.loading?e=r.a.createElement(A,null):(e=null,this.state.ingredients&&(e=r.a.createElement(B,{ingredients:this.state.ingredients,cancelPurchase:this.cancelPurchaseHandler,continuePurchase:this.continuePurchaseHandler,totalPrice:this.state.totalPrice})));var a=this.state.error?r.a.createElement("p",{style:{textAlign:"center"}},"Oops! looks like ingredients can't be loaded."):r.a.createElement(A,{style:{transform:"translateY(25vh)"}});return this.state.ingredients&&(a=r.a.createElement(m,null,r.a.createElement(N,{ingredients:this.state.ingredients}),r.a.createElement(C,{addIngredient:this.addIngredientHandler,removeIngredient:this.removeIngredientHandler,disabled:t,totalPrice:this.state.totalPrice,purchaseable:this.state.purchaseable,purchasing:this.purchaseHandler}))),r.a.createElement(m,null,r.a.createElement(I,{show:this.state.purchasing,modalClose:this.cancelPurchaseHandler},e),a)}}]),t}(a.Component),M);var x=function(){return r.a.createElement(O,null,r.a.createElement(q,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[21,1,2]]]);
//# sourceMappingURL=main.94780dcd.chunk.js.map