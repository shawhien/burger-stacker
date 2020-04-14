import React from 'react';

function Ingredient(props) {
    return  (
        <div backgroundColor={props.color}>
            {props.ingerdient}
        </div>
    )
}

export default Ingredient;