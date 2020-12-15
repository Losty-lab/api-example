import React from 'react';
import './ingredientincake.css'

function IngredientInCakeList(props){


    


    function renderIngredients(){
        return props.ingredients.map(ingredient=>{
            return (
                <div className="elem-ingredient" key={ingredient.name}>
                    <input type="checkbox" checked={ingredient.checked} name={ingredient.name} onChange={props.insertIngredientCakeAction}/>
                    <label>
                        <b>{ingredient.name}</b>
                    </label>
                </div>
            )
        })
    }


    return(
        <div>
            {renderIngredients()}

        </div>
    )
}
export default IngredientInCakeList;