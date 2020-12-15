import {createSlice} from '@reduxjs/toolkit';

console.log('INGREDIENTSLICE')

const ingredientSlice=createSlice({
    name:'ingredientSlice',
    initialState:{
        ingredients:[],
        errors:undefined,
        //errorsUpdate:'',
        insertIngredient:'',
        ingredientUpdate:[]
    },
    reducers:{
        setIngredient(state,action){
            const ingredientPayload=action.payload
             state.ingredients=ingredientPayload.map(ingredient=>{
                    return{
                        id:ingredient._id,
                        name:ingredient.name,
                        disable:true,
                        checked:false,
                        
                    }  
                })
            
        },
        setIngredientError(state,action){
            const ingredientErrorPayload=action.payload
            return {
                ...state, errors:ingredientErrorPayload
            }
        },
        setInsertIngredientAction(state,action){
            const insertIngredientPayload=action.payload
            return{
                ...state, insertIngredient:insertIngredientPayload
            }
        },
        setIngredientEmpty(state,action){
            const insertIngredientPayload=action.payload
            return {
                ...state, insertIngredient:insertIngredientPayload
            }


        },

        setIngredientUpdated(state,action){

            console.log('ACTION PAYLOAD',action.payload)

            const updateIngredientPayload=action.payload
            state.ingredients.map(ingredient=>{
                    if (ingredient.name===updateIngredientPayload.ingredientUpdated.name){
                        ingredient.name=updateIngredientPayload.newValue
                        ingredient.disable=!ingredient.disable
                    }
                    return ingredient
                })
            

        },
        setIngredientUpdateError(state,action){

            console.log('ACTION PAYLOAD DELETE',action.payload)

            const updateIngredientError=action.payload;
            state.ingredientUpdate.map(ingredient=>{
                    if(ingredient.id===updateIngredientError.id){
                        ingredient.errorUpdate=updateIngredientError.errorUpdate
                    }
                    return ingredient
                    
            })

        

        },

        setIngredientDisable(state,action){

            console.log('state in setingredientdisable',state.ingredientUpdate)
            console.log('SETINGREDIENTDISABLE',action)
            const updateIngredientDisable=action.payload

            
                state.ingredients.map(ingredient=>{
                    if(ingredient.id===updateIngredientDisable){
                     ingredient.disable=!ingredient.disable

                     if(ingredient.disable===false){
                        
                        state.ingredientUpdate.push({id:ingredient.id})

                     }else{

                        state.ingredientUpdate=state.ingredientUpdate.filter(ingrUp=>ingrUp.id!==ingredient.id)

                     }
                    }
                    return ingredient
                })

                    
        },
        setIngredientDeleted(state,action){

            console.log('delete',action.payload)

            const deletedIngredientPayload=action.payload.name
             
          state.ingredients=state.ingredients.filter(ingredient=>ingredient.name!==deletedIngredientPayload)
          
                
        },
        setCheckIngredient(state,action){

            console.log('SETCHECKINGRE',action.payload)

            const checkedIngredient=action.payload

            state.ingredients.map(ingredient=>{
                    if(ingredient.name===checkedIngredient.name){
                        ingredient.checked=checkedIngredient.checked
                    }
                    return ingredient
                })
            

        },
        setCheckFalseIngredient(state,action){
            const checkFalseIngredient=action.payload

            state.ingredients=state.ingredients.map(ingredient=>{
                    if(ingredient.checked===true){
                        ingredient.checked=checkFalseIngredient
                    }

                    return ingredient

                })
            
        },
        setIngredientUpdate(state,action){
            const ingredientUpdatePayload=action.payload

            state.ingredientUpdate.map(ingredient=>{
                if(ingredient.id===ingredientUpdatePayload.ingredientUpdateId){

                    ingredient.newValue=ingredientUpdatePayload.newValue

                }
            })


        },
        setIngredientUpdateEmpty(state,action){

            const updateEmptyPayload=action.payload;
            state.ingredientUpdate=state.ingredientUpdate.filter(ingrUp=>ingrUp.id!==updateEmptyPayload.ingredientUpdateId)

        },
        setIngredientUpdateEmptyAuto(state,action){

            state.ingredientUpdate=[]
        }
    }
        
    
})

export const {setIngredient}=ingredientSlice.actions;
export const {setIngredientError}=ingredientSlice.actions;
export const {setInsertIngredientAction}=ingredientSlice.actions;
export const {setIngredientEmpty}=ingredientSlice.actions;
export const {setIngredientUpdated}=ingredientSlice.actions;
export const {setIngredientUpdateError}=ingredientSlice.actions;
export const {setIngredientDisable}=ingredientSlice.actions;
export const {setIngredientDeleted}=ingredientSlice.actions;
export const {setCheckIngredient}=ingredientSlice.actions;
export const {setCheckFalseIngredient}=ingredientSlice.actions;
export const {setIngredientUpdate}=ingredientSlice.actions;
export const {setIngredientUpdateEmpty}=ingredientSlice.actions;
export const {setIngredientUpdateEmptyAuto}=ingredientSlice.actions;


export default ingredientSlice.reducer;