import {SET_CAKE, 
    SET_CAKE_ERROR, 
    SET_CAKE_INSERT,
    SET_CAKE_INGREDIENT, 
    SET_CAKE_EMPTY,
    SET_CAKE_DELETED,
    SET_CAKE_DISABLE,
    SET_CAKE_UPDATE, SET_CAKE_UPDATED,
    SET_CAKE_UPDATED_ERROR
    } from '../reducers/cakeType';

import {SET_CHECK_FALSE_INGREDIENT, SET_CHECK_INGREDIENT} from '../reducers/ingredientType'
import axios from 'axios';
import { SET_SALESCAKE_DELETE } from '../reducers/salesType';

//**REDUX TOOLKIT */

import {setCake,
        setCakeInsert,
        setCakeIngredient,
        setCakeError,
        setCakeEmpty,
        setCakeDeleted,
        setCakeDisable,
        setCakeUpdate,
        setCakeUpdatedError,
        setCakeUpdated,
        setCakeUpdateEmpty,
        setCakeUpdateEmptyAuto} from '../reducers/cakeSliceReducerToolkit';
import {setIngredient,setCheckIngredient, setCheckFalseIngredient} from '../reducers/ingredientSliceReducerToolkit';
import * as actions from './index'


//** */


// export const autoReadingCakes=()=>dispatch=>{

//     const headers={
//         'Content-type':'application/json',
//         'authorization':localStorage.getItem('token')
//     }

//     axios.get("/api/cake",{
//         headers:headers
//     }).then(response=>dispatch({type:SET_CAKE, payload:response.data.result}))
//     .catch(error=>console.log('ERROR',error.response.data))

// }

// export const insertCakeAction=(value)=>dispatch=>{

//     console.log(value.name)

//     dispatch({type:SET_CAKE_INSERT, payload:value})
    
// }


// export const insertCake=(value)=>dispatch=>{


//     console.log('insert cake',value)

//     if (value.name==='' || value.weight==='' || value.imgLink===''){
//         return dispatch({type:SET_CAKE_ERROR, payload:'Please fill all fields'})
//     }

//     if(value.ingredients.length===0){
//         return dispatch({type:SET_CAKE_ERROR, payload:'Please insert at least one ingredient'})
//     }


//     const headers={
//         'Content-type':'application/json',
//         'authorization':localStorage.getItem('token')
//     }

//     axios.post("/api/cake",{
//         headers:headers,
//         body:value
//     }).then(response=>{
//         console.log('RESPONSE CAKE',response)
//         dispatch({type:SET_CAKE, payload:response.data.result})
//         dispatch({type:SET_CAKE_EMPTY, payload:''})
//         dispatch({type:SET_CAKE_ERROR, payload:''})
//         dispatch({type:SET_CHECK_FALSE_INGREDIENT, payload:false})
//     })
//     .catch(error=>dispatch({type:SET_CAKE_ERROR, payload:error.response.data.result}))

    
// }

// export const insertIngredientCake=(name,checked)=>dispatch=>{

    

//     let obj={name:name, checked:checked}

//     dispatch({type:SET_CAKE_INGREDIENT, payload:obj})
//     dispatch({type:SET_CHECK_INGREDIENT, payload:obj})
// }


// export const deleteCake=(id)=>dispatch=>{

//     const headers={
//         'Content-type':'application/json',
//         'authorization':localStorage.getItem('token')
//     }

//     axios.delete(`/api/cake/${id}`,{
//         headers:headers
//     }).then(response=>{

//         dispatch({type:SET_CAKE_DELETED, payload:response.data.deletedCake})
//         dispatch({type:SET_SALESCAKE_DELETE, payload:response.data.deletedCake})
        
//     })
//     .catch(error=>console.log(error.response))


// }

// export const updateDisableCake=(id)=>dispatch=>{

//     dispatch({type:SET_CAKE_DISABLE, payload:id})


// }

// export const changeUpdateCake=(value)=>dispatch=>{

//     console.log('VALUE',value)
//     dispatch({type:SET_CAKE_UPDATE, payload:value})

// }

// export const saveUpdateCake=(newValue,id)=>dispatch=>{


//     if(newValue===''){
//         return dispatch({type:SET_CAKE_UPDATED_ERROR, payload:'You have to insert at least one letter'})
//     }

//     console.log('VALUE SAVED',id)

//     const headers={
//         'Content-type':'application/json',
//         'authorization': localStorage.getItem('token')

//     }

//     axios.put(`/api/cake/${id}`,{
//         headers:headers,
//         body:newValue
//     }).then(response=>{
//         console.log('RESPONSE',response)
//         dispatch({type:SET_CAKE_UPDATED, payload:{updatedCake:response.data.updatedCake, newValue:newValue}})
//         dispatch({type:SET_CAKE_UPDATED_ERROR, payload:''})
//     })
//     .catch(error=>dispatch({type:SET_CAKE_UPDATED_ERROR, payload:error.response.data.error}))

// }



//**REDUX TOOLKIT */

export const autoReadingCakes=()=>dispatch=>{

    console.log('AUTOREADINGCAKES')

    let autoReadingIngredients=actions.autoReadingIngredients()
    dispatch(autoReadingIngredients)
    
    const headers={
        'Content-type':'application/json',
        'authorization':localStorage.getItem('token')
    }

    axios.get("/api/cake",{
        headers:headers
    }).then(response=>{
        
        dispatch(setCake(response.data.result))
        dispatch(setCakeUpdateEmptyAuto())
        

    }
        )
    .catch(error=>console.log('ERROR',error.response.data))

}

export const insertCakeAction=(value)=>dispatch=>{

    console.log(value.name)

    dispatch(setCakeInsert({name:value.name,value:value.value}))
    
}


export const insertCake=(value)=>dispatch=>{


    console.log('insert cake',value)

    if (value.name==='' || value.weight==='' || value.imgLink===''){
        return dispatch(setCakeError({error:'Please fill all fields'}))
    }

    if(value.ingredients.length===0){
        return dispatch(setCakeError({error:'Please insert at least one ingredient'}))
    }


    const headers={
        'Content-type':'application/json',
        'authorization':localStorage.getItem('token')
    }

    axios.post("/api/cake",{
        headers:headers,
        body:value
    }).then(response=>{
        console.log('RESPONSE CAKE',response)
        dispatch(setCake(response.data.result))
        dispatch(setCakeEmpty({cakeInfo:''}))
        dispatch(setCakeError({error:''}))
        dispatch(setCheckFalseIngredient(false))
    })
    .catch(error=>dispatch(setCakeError(error.response.data.result)))

    
}

export const insertIngredientCake=(name,checked)=>dispatch=>{

    

    let obj={name:name, checked:checked}

    dispatch(setCakeIngredient(obj))
    dispatch(setCheckIngredient(obj))

}


export const deleteCake=(id)=>dispatch=>{

    console.log('id',id)

    const headers={
        'Content-type':'application/json',
        'authorization':localStorage.getItem('token')
    }

    axios.delete(`/api/cake/${id}`,{
        headers:headers
    }).then(response=>{
        console.log('response after deleted',response)
        dispatch(setCakeDeleted(response.data.deletedCake))
        //dispatch({type:SET_SALESCAKE_DELETE, payload:response.data.deletedCake})
        
    })
    .catch(error=>console.log(error.response))


}

export const updateDisableCake=(id)=>dispatch=>{

    dispatch(setCakeDisable(id))


}

export const changeUpdateCake=(value,id)=>dispatch=>{

    console.log('VALUE',value)
    console.log('ID',id)
    dispatch(setCakeUpdate({cakeUpdateId:id,newValue:value}))

}

export const saveUpdateCake=(id,cakes)=>dispatch=>{

    cakes.map(cake=>{
        if(cake.id===id){
            console.log('new valeu before',cake.newValue)
            if(cake.newValue===undefined || cake.newValue===''){
                console.log('new value undefined',cake.newValue)
                return dispatch(setCakeUpdatedError({error:'You have to insert at least one letter',id:id}))
            }



            const headers={
                'Content-type':'application/json',
                'authorization': localStorage.getItem('token')
        
            }
        
            axios.put(`/api/cake/${id}`,{
                headers:headers,
                body:cake.newValue
            }).then(response=>{
                console.log('RESPONSE',response)
                
                dispatch(setCakeUpdated({updatedCake:response.data.updatedCake, newValue:cake.newValue}))
                dispatch(setCakeUpdateEmpty({cakeUpdateId:id}))
                //dispatch(setCakeUpdatedError({error:''}))
            })
            .catch(error=>dispatch(setCakeUpdatedError({error:error.response.data.error})))


        }
    })

}

export const selectCake=state=>state.cake



//** */

