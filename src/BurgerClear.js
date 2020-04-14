import React from 'react';

function BurgerClear(props) {
    return (
        <div>
            <button onClick={(e)  => props.action(e)}> 
                 🍔EAT ME
            </button>
        </div>
    )
}

export default BurgerClear;