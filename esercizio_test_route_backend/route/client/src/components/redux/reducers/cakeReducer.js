
import {SET_CAKE,
    SET_CAKE_INSERT,
    SET_CAKE_ERROR,
    SET_CAKE_INGREDIENT, 
    SET_CAKE_EMPTY,
    SET_CAKE_DELETED,
    SET_CAKE_DISABLE,
    SET_CAKE_UPDATE,
    SET_CAKE_UPDATED, SET_CAKE_UPDATED_ERROR} from './cakeType'

const initialState={
    cakes:[],
    cakeUpdate:'',
    insertCake:{name:'',weight:'',imgLink:'', ingredients:[]},
    errors:undefined,
    errorsUpdate:''
}



export default function(state=initialState, action){

    switch (action.type){

        case SET_CAKE:
            return{
                ...state, cakes:action.payload.map(cake=>{
                    return{
                        id:cake._id,
                        name:cake.name,
                        imgLink:cake.imgLink,
                        disable:true
                    }
                })
            }

            case SET_CAKE_INSERT:
                console.log('ACTION PAY',action.payload.type)

                return{
                    ...state, insertCake: {...state.insertCake, [action.payload.name]:action.payload.value}
                   
                    }
                
            case SET_CAKE_INGREDIENT:
                       
            return{
                
                ...state,  insertCake: action.payload.checked ? 
                {...state.insertCake, ingredients:[...state.insertCake.ingredients, action.payload.name]} :
                 {...state.insertCake,
                ingredients: state.insertCake.ingredients.filter(elem=>elem!==action.payload.name)}

            }

            case SET_CAKE_ERROR:
                return{
                    ...state, errors:action.payload
                }
            case SET_CAKE_EMPTY:
                return{
                    ...state, insertCake:{name:action.payload, weight:action.payload,imgLink:action.payload, ingredients:[] }
                }
            case SET_CAKE_DELETED:
                return{
                    ...state, cakes:state.cakes.filter(cake=>cake.name!==action.payload)
                }
            case SET_CAKE_DISABLE:
                return {
                    ...state, cakes:state.cakes.map(cake=>{
                        if(cake.id===action.payload){
                            cake.disable=!cake.disable
                        }
                        return cake
                    })
                }
            case SET_CAKE_UPDATE:
                return{
                    ...state, cakeUpdate:action.payload
                }
            case SET_CAKE_UPDATED:
                
                return {
                    ...state, cakes:state.cakes.map(cake=>{
                        if(cake.name===action.payload.updatedCake){

                            cake.name=action.payload.newValue
                            cake.disable=!cake.disable
                        }

                        return cake

                    })
                }
            
            case SET_CAKE_UPDATED_ERROR:
                return {
                    ...state, errorsUpdate:action.payload
                }
            

            default:
                return state
    }

}