import {createSlice} from '@reduxjs/toolkit';

const cakeSlice=createSlice({
    name:'cakeSlice',
    initialState:{
        cakes:[],
        insertCake:{name:'',weight:'',imgLink:'', ingredients:[]},
        cakeUpdate:[],
        errors:undefined
        
    },
    reducers:{
            setCake(state,action){
                const cakePayload=action.payload

                return {
                    ...state, cakes:cakePayload.map(cake=>{
                        return{
                            id:cake._id,
                            name:cake.name,
                            imgLink:cake.imgLink,
                            disable:true,
                            
                        }
                    })
                }



            },
            setCakeInsert(state,action){

                console.log('action',action.payload)
                const cakeInsertPayload=action.payload
                return{
                    ...state, insertCake:{...state.insertCake, [cakeInsertPayload.name]:cakeInsertPayload.value}
                }

            },
            setCakeIngredient(state,action){

                console.log('SETCAKEINGREDIENT',action.payload)

                const cakeIngredientInsertPayload=action.payload
                return {
                    ...state, insertCake:cakeIngredientInsertPayload.checked ? 
                    {...state.insertCake, ingredients:[...state.insertCake.ingredients, cakeIngredientInsertPayload.name]} :
                     {...state.insertCake,
                    ingredients: state.insertCake.ingredients.filter(elem=>elem!==cakeIngredientInsertPayload.name)}
                }

            },
            setCakeError(state,action){

                const cakeErrorPayload=action.payload;

                return {
                    ...state, errors:cakeErrorPayload.error
                }
                

            },
            setCakeEmpty(state,action){
                const cakeEmptyPayload=action.payload

                
                     state.insertCake={name:cakeEmptyPayload.cakeInfo, weight:cakeEmptyPayload.cakeInfo ,imgLink:cakeEmptyPayload.cakeInfo, ingredients:[]}
                

            },
            setCakeDeleted(state,action){
                
                const cakeDeletedPayload=action.payload;

                return {
                    ...state, cakes:state.cakes.filter(cake=>cake.name!==cakeDeletedPayload)
                }
            },
            setCakeDisable(state,action){
                const cakeDisablePayload=action.payload;

                console.log('cakedisabl',cakeDisablePayload)

                state.cakes.map(cake=>{
                        if(cake.id===cakeDisablePayload){
                            cake.disable=!cake.disable

                            if(cake.disable===false){
                                console.log('CAKE ID',cake.id)
                            state.cakeUpdate.push({id:cake.id}) 
                            }else{
                                console.log('state cakeupdate',state)
                              state.cakeUpdate=state.cakeUpdate.filter(cakeup=>cakeup.id!==cake.id)
                            }

                        }
                        
                        return cake
                    })

                
                
            },
            setCakeUpdate(state,action){
                console.log('SETCAKEUPDATE',action.payload)
                const cakeUpdatePayload=action.payload;
                state.cakeUpdate.map(cake=>{
                        if(cake.id===cakeUpdatePayload.cakeUpdateId){
                            cake.newValue=cakeUpdatePayload.newValue
                        }
                        return cake
                    })
                
            },
            setCakeUpdatedError(state,action){

                const cakeUpdateErrorPayload=action.payload

                
                   state.cakeUpdate.map(cake=>{
                       if (cake.id===cakeUpdateErrorPayload.id){
                           cake.errorsUpdate=cakeUpdateErrorPayload.error
                       }

                       return cake

                   })
                



            },
            setCakeUpdated(state,action){
                const cakeUpdated=action.payload
                console.log('SETCAKE UPDATED',cakeUpdated)

                state.cakes.map(cake=>{
                    if(cake.name===cakeUpdated.updatedCake){
                        cake.name=cakeUpdated.newValue
                        cake.disable=!cake.disable
                    }
                    return cake

                }
                )
            },
            setCakeUpdateEmpty(state,action){

                console.log('state cakeupdateempty',state)
                console.log('action empty',action.payload)
                const cakeUpdateEmptyPayload=action.payload;

                state.cakeUpdate=state.cakeUpdate.filter(cake=>cake.id!==cakeUpdateEmptyPayload.cakeUpdateId)


            },
            setCakeUpdateEmptyAuto(state,action){
                state.cakeUpdate=[]
            }
    }

})

export const {setCake}=cakeSlice.actions;
export const {setCakeInsert}=cakeSlice.actions;
export const {setCakeIngredient}=cakeSlice.actions;
export const {setCakeError}=cakeSlice.actions;
export const {setCakeEmpty}=cakeSlice.actions;
export const {setCakeDeleted}=cakeSlice.actions;
export const {setCakeDisable}=cakeSlice.actions;
export const {setCakeUpdate}=cakeSlice.actions;
export const {setCakeUpdatedError}=cakeSlice.actions;
export const {setCakeUpdated}=cakeSlice.actions;
export const {setCakeUpdateEmpty}=cakeSlice.actions;
export const {setCakeUpdateEmptyAuto}=cakeSlice.actions;

export default cakeSlice.reducer