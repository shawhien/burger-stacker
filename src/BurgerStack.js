import React from 'react';
import Ingredient from './Ingredient';

function BurgerStack(props) {
    return (
        <div>
            <ul>
                {props.stack.map((ingredient, index) =>  (
                    <li key={`in-${index}`}>
                        <Ingredient color={ingredient.color} ingredient={ingredient.name} />
                    </li>
                ))}
            </ul>
            <div>
                <hr />
            </div>
            <div>
                Burger Prep Area
            </div>
        </div>
    )
}

export default BurgerStack;