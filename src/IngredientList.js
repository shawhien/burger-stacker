import React from 'react';
import Ingredient from './Ingredient';

function IngredientList(props) {
    return (
        <ul>
            {props.ingredients.map((ingredient) =>  {
                return (
                    <li name={ingredient.name} onClick={(e) =>  props.action(e)}>
                        <Ingredient color={ingredient.colo}  ingredient={ingredient.name}/>
                    </li>
                )
            })}
        </ul>
    )
}

export default IngredientList;