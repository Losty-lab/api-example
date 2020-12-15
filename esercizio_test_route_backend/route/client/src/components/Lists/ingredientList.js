import React from 'react';
import {connect} from 'react-redux';
import ingredientList from './ingredientList.css';
import * as actions from '../redux/actions/index'


function IngredientList(props){

   

    function checkIngredient(e){


    }

    

    function renderIngredients(){
        return props.ingredients.map(ingredient=>{
            return (
                <div key={ingredient.name}>
               {ingredient.disable  ?
               <>
                <input type="checkbox" name={ingredient.name} onClick={props.changeData}/>
                
                <label className="ingredient">
                    <b>{ingredient.name}</b>
                </label>
               
                </>
                :
                props.ingredientUpdate.map(ingrUp=>{
                    if(ingrUp.id===ingredient.id){
                        return(
                <>
                <input value={ingrUp.newValue} 
                 id={ingredient.id} type="text" 
                name={ingredient.name} onChange={props.changeUpdateIngredientAction}/>
                <button id={ingredient.id} onClick={props.saveIngredient}>Save</button>
                <div><p>{ingrUp.errorUpdate}</p></div>
                
                </>
                        )
                    }
                })

                }
                
                <>
                
                <button id={ingredient.id} className="delete-button" onClick={props.deleteEvent}>Delete</button>
                <button id={ingredient.id} className="update-button" onClick={props.updateEvent}>Update</button>
                </>
                 
                
                
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


// function mapStateToProps(state){

//     console.log('state',state)
//     return{
//         ingredients:state.ingredients.ingredients
//     }
// }

export default IngredientList;