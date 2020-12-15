import { insertIngredient } from '../actions';
import {SET_INGREDIENT,
     SET_INGREDIENT_DELETED, 
     SET_INGREDIENT_DISABLE, 
     SET_INGREDIENT_ERROR, 
     SET_INGREDIENT_UPDATE,
    SET_INGREDIENT_INSERT, 
    SET_INGREDIENT_EMPTY, 
    SET_CHECK_FALSE_INGREDIENT,
    SET_CHECK_INGREDIENT, SET_UPDATE_ERROR} from './ingredientType';

const initialState={
    ingredients:[],
    errors:undefined,
    insertIngredient:'',
    errorsUpdate:''
}

export default function(state=initialState, action){

    switch (action.type){
        case SET_INGREDIENT:
            return {
                ...state, ingredients:action.payload.map(ingredient=>{
                    return {
                        id:ingredient._id,
                        name:ingredient.name,
                        disable:true,
                        checked:false
                    }
                }),
                
            }
        case SET_INGREDIENT_ERROR:
            return{
                ...state, errors:action.payload
            }
        case SET_INGREDIENT_DELETED:
            console.log('STATE IN REDUCER',action.payload)
            return{
                ...state, ingredients:state.ingredients.filter(ingredient=>ingredient.name!==action.payload.name)
            }
        case SET_INGREDIENT_DISABLE:
            return{
                ...state, ingredients:state.ingredients.map(ingredient=>{
                    if(ingredient.id===action.payload){
                        ingredient.disable=!ingredient.disable
                    }
                    return ingredient
                })
            }

        case SET_INGREDIENT_UPDATE:
                
            return{
                ...state, ingredients:state.ingredients.map(ingredient=>{
                    if (ingredient.name===action.payload.name){
                        ingredient.name=action.payload.newValue.ingredientUpdate
                        ingredient.disable=!ingredient.disable
                    }
                    return ingredient
                })
            }

            case SET_INGREDIENT_INSERT:
                
                return {
                    ...state, insertIngredient:action.payload

                                }
            case SET_INGREDIENT_EMPTY:
                return{
                    ...state, insertIngredient:action.payload
                }
            case SET_CHECK_FALSE_INGREDIENT:
                return{
                    ...state, ingredients:state.ingredients.map(ingredient=>{
                        if(ingredient.checked===true){
                            ingredient.checked=false
                        }

                        return ingredient

                    })
                }
            case SET_CHECK_INGREDIENT:
                return{
                    ...state, ingredients:state.ingredients.map(ingredient=>{
                        if(ingredient.name===action.payload.name){
                            ingredient.checked=action.payload.checked
                        }
                        return ingredient
                    })
                }
            case SET_UPDATE_ERROR:
                return{
                    ...state, errorsUpdate:action.payload
                }
            
                

        default:
            return state
    }
}