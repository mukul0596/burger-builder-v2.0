import React from 'react';
import './Modal.css';
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => (
    <Aux>
        <Backdrop 
            show={ props.show } 
            click={ props.modalClose } />
        <div 
            className='Modal' 
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-50vh)',
                opacity: props.show ? 1 : 0
            }}>
            { props.children }
        </div>
    </Aux>
)

export default modal;