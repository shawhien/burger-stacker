import React from 'react';
import BurgerStack from './BurgerStack';
import BurgerClear from './BurgerClear';

function BurgerPane(props) {
    return (
        <div>
            <BurgerStack stack ={props.stack}  />
            <BurgerClear action={props.action} />
        </div>
    )
}

export default BurgerPane;