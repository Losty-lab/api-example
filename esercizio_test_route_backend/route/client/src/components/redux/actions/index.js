import axios from 'axios';
import { SET_TOKEN , SET_ERROR} from '../reducers/authType';
import { SET_INGREDIENT, 
   SET_INGREDIENT_ERROR, 
   SET_INGREDIENT_DELETED,
   SET_INGREDIENT_DISABLE, 
   SET_INGREDIENT_UPDATE, 
   SET_INGREDIENT_INSERT,
   SET_INGREDIENT_EMPTY,
   SET_UPDATE_ERROR } from '../reducers/ingredientType';
import {SET_SALESPRICE_INSERT_RESULT} from '../reducers/salesType';
//**REDUX TOOLKIT */

import {setIngredient, 
   setInsertIngredientAction, 
   setIngredientError, 
   setIngredientEmpty,
   setIngredientUpdated,
   setIngredientUpdateError,
   setIngredientDisable,
   setIngredientDeleted,
   setIngredientUpdate,
   setIngredientUpdateEmpty,
   setIngredientUpdateEmptyAuto} from '../reducers/ingredientSliceReducerToolkit'
import {setToken, setErrorAuth, setErrorRegister, setErrorAuthEmpty,setErrorRegisterEmpty} from '../reducers/authSliceReducerToolkit'

//** */


//**REDUX TOOLKIT */


export const autoReadingIngredients=()=>dispatch=>{
   console.log('IN AUTO READING INGREDIENTS')


const headers={
        'Content-type':'application/json',
          'authorization':localStorage.getItem('token')
       }
   
          axios.get("/api/ingredient",{
            headers:headers
          }).then(response=>{

            console.log('IN SET INGREDIENT')
             
            dispatch(setIngredient(response.data.result))
            dispatch(setErrorAuth(undefined))
            dispatch(setIngredientUpdateEmptyAuto())
            
          }
            )
          .catch(error=>dispatch(setIngredientError(error.response.data)))
    }





//** */

// export const autoReadingIngredients=()=>dispatch=>{

//    const headers={
//       'Content-type':'application/json',
//       'authorization':localStorage.getItem('token')
//    }

//       axios.get("/api/ingredient",{
//          headers:headers
//       }).then(response=>dispatch({type:SET_INGREDIENT, payload:response.data.result}))
//       .catch(error=>dispatch({type:SET_INGREDIENT_ERROR, payload:error.response.data}))
// }

export const registerEmpty=()=>dispatch=>{

      dispatch(setErrorRegisterEmpty({error:undefined}))

}

export const loginEmpty=()=>dispatch=>{

   dispatch(setErrorAuthEmpty({error:undefined}))


}


export const register=(values,history)=> (dispatch)=>{


   axios.post("/api/user", values)
   .then((res)=>{

      dispatch(setErrorAuthEmpty({error:undefined}))
      dispatch(setErrorRegisterEmpty({error:undefined}))
      console.log('RES',res)
      history.push("/success")

   
   })
   .catch(error=>{
      console.log('ERROR',error.response)
      dispatch(setErrorRegister(error.response.data))
   
   })
 
   
}

// export const login=(values,history)=>dispatch=>{


//    axios.post("/api/login",values).then(response=>{
//       localStorage.setItem('token',response.data.token)
//       dispatch({type:SET_TOKEN, payload:response.data.token})
//       history.push("/administrationpage")
//    }).catch(error=>dispatch({type:SET_ERROR, payload:error.response.data}))
// }

//**REDUX TOOLKIT */

export const login=(values,history)=>dispatch=>{


   axios.post("/api/login",values).then(response=>{
      localStorage.setItem('token',response.data.token)
      dispatch(setToken(response.data.token))

      dispatch(setErrorAuthEmpty({error:undefined}))
      dispatch(setErrorRegisterEmpty({error:undefined}))
      dispatch(setIngredientError(undefined))
      history.push("/administrationpage")
   }).catch(error=>{
      console.log('errorrr',error.response.data)
      dispatch(setErrorAuth(error.response.data))
   
   })
   
}

//**REDUX TOOLKIT */


// export const logout=()=>dispatch=>{

//    localStorage.removeItem('token')

//    dispatch({type:SET_TOKEN})
//    dispatch({type:SET_SALESPRICE_INSERT_RESULT, payload:[]})
 
// }

//** */

//**REDUX TOOLKIT */

export const logout=()=>dispatch=>{

   localStorage.removeItem('token')

   dispatch(setToken())
   dispatch(setIngredientError(undefined))
   dispatch({type:SET_SALESPRICE_INSERT_RESULT, payload:[]})
 
}

//** */

//**REDUX TOOLKIT */

export const autoLogin=()=>dispatch=>{

  

   
   if(localStorage.getItem('token')){

   const headers={
      'Content-type':'application/json',
      'authorization':localStorage.getItem('token')
   }

   axios.get("/api/user",{
      headers:headers
   }).then(()=>dispatch(setToken(localStorage.getItem('token'))))
   .catch(error=>{
      
      localStorage.removeItem('token')})
}

}

//** */

// export const autoLogin=()=>dispatch=>{

   
//    if(localStorage.getItem('token')){

//    const headers={
//       'Content-type':'application/json',
//       'authorization':localStorage.getItem('token')
//    }

//    axios.get("/api/user",{
//       headers:headers
//    }).then(()=>dispatch({type:SET_TOKEN, payload:localStorage.getItem('token')}))
//    .catch(error=>{
      
//       localStorage.removeItem('token')})
// }

// }

// export const insertIngredient=(value)=>dispatch=>{

   
//    const headers= {
//       'Content-type':'application/json',
//       'authorization':localStorage.getItem('token')
//    }

//    axios.post("/api/ingredient", {
//    headers:headers,
//    body:value})
//    .then((response)=>{
      
//       dispatch({type:SET_INGREDIENT, payload:response.data.ingredients})
//       dispatch({type:SET_INGREDIENT_EMPTY, payload:''})
//       dispatch({type:SET_INGREDIENT_ERROR, payload:''})
//    })
//    .catch(error=>dispatch({type:SET_INGREDIENT_ERROR, payload:error.response.data}))

// }

//**REDUX TOOLKIT */

export const insertIngredient=(value)=>dispatch=>{

   


      if(value===''){
        
         return dispatch(setIngredientError({error:'Please insert an ingredient'}))
      }

     

   
   const headers= {
      'Content-type':'application/json',
      'authorization':localStorage.getItem('token')
   }

   axios.post("/api/ingredient", {
   headers:headers,
   body:value})
   .then((response)=>{
      
      dispatch(setIngredient(response.data.ingredients))
      dispatch(setIngredientEmpty(''))
      dispatch(setIngredientError(''))
   })
   .catch(error=>dispatch(setIngredientError(error.response.data)))

}


//** */

// export const insertIngredientAction=(value)=>dispatch=>{

   

//    dispatch({type:SET_INGREDIENT_INSERT, payload:value})
// }

//**REDUX TOOLKIT */

export const insertIngredientAction=value=>dispatch=>{

   dispatch(setInsertIngredientAction(value))

}

//** */


// export const deleteIngredient=(value)=>dispatch=>{



//    const headers={
//       'Content-type':'application/json',
//       'authorization':localStorage.getItem('token')
//    }

//    const data={
//       source:value
//    }

//    axios.delete(`/api/ingredient/${value}`,{
//       headers:headers
//    }).then(response=>{
//       console.log('DELETE AXIOS',response)
//       dispatch({type:SET_INGREDIENT_DELETED, payload:response.data.deletedIngredient})

//    }
//       )
//    .catch(error=>console.log(error.response.data))
// }


//**REDUX TOOLKIT */

export const deleteIngredient=(id)=>dispatch=>{



   const headers={
      'Content-type':'application/json',
      'authorization':localStorage.getItem('token')
   }

   const data={
      source:id
   }

   axios.delete(`/api/ingredient/${id}`,{
      headers:headers
   }).then(response=>{
      
      dispatch(setIngredientDeleted({name:response.data.deletedIngredient.name}))
      dispatch(setIngredientUpdateEmpty({ingredientUpdateId:id}))
   }
      )
   .catch(error=>{
     console.log('error',error)
      dispatch(setIngredientUpdateError({error:error.response.data.error, id:id}))
      
   }
      )
}


//** */

// export const updateEnableIngredient=(value)=>dispatch=>{


//    console.log('VALUE UPDATE', value)
//    dispatch({type:SET_INGREDIENT_DISABLE, payload:value})
//    dispatch({type:SET_UPDATE_ERROR, payload:''})


// }


//**REDUX TOOLKIT */

export const updateEnableIngredient=(value)=>dispatch=>{


   
   dispatch(setIngredientDisable(value))
   dispatch(setIngredientUpdateError({error:'',value}))


}

export const changeUpdateIngredient=(value,id)=>dispatch=>{

   dispatch(setIngredientUpdate({ingredientUpdateId:id,newValue:value}))


}


//** */

// export const saveIngredientUpdated=(id,newValue)=>dispatch=>{

//    const headers={
//       'Content-type':'application/json',
//       'authorization':localStorage.getItem('token')
//    }

//    console.log('value saving',id,newValue)

//    axios.put(`/api/ingredient/${id}`,{
//       headers:headers,
//       body:newValue

//    }).then(response=>{
      
//       dispatch({type:SET_INGREDIENT_UPDATE, payload:{...response.data.updatedIngredient,newValue}})
//       dispatch({type:SET_UPDATE_ERROR, payload:''})
//       }
//       )
//    .catch(error=>dispatch({type:SET_UPDATE_ERROR, payload:error.response.data.result}))

// }


//**REDUX TOOLKIT */

export const saveIngredientUpdated=(id,newValue)=>dispatch=>{

   console.log('NEWVALUE',newValue)

   newValue.map(ingrUp=>{
      if(ingrUp.id===id){
         console.log('INSIDE IF',id)
      if(ingrUp.newValue===undefined || ingrUp.newValue===''){
            console.log('undefindeddddd',ingrUp.newValue)
         return dispatch(setIngredientUpdateError({errorUpdate:'Please insert an ingredient to update',id:id}))
      }else{
         console.log('inside else',ingrUp.newValue)

         const headers={
            'Content-type':'application/json',
            'authorization':localStorage.getItem('token')
         }
      
        
      
         axios.put(`/api/ingredient/${id}`,{
            headers:headers,
            body:ingrUp.newValue
      
         }).then(response=>{
      
           console.log('INSIED RESPONSE',response)
            
      dispatch(setIngredientUpdated({ingredientUpdated:response.data.updatedIngredient,newValue:ingrUp.newValue}))
      dispatch(setIngredientUpdateEmpty({ingredientUpdateId:id}))
              // dispatch(setIngredientUpdateError({error:'',value}))
         })
         .catch(error=>{ 
            console.log('IN CATCH') 
            return dispatch(setIngredientUpdateError({errorUpdate:error.response.data.error,id:id}))
      })


      }
   }
      return ingrUp

   })


}



export const selectToken=(state)=>state.auth.token;
export const selectIngredient=(state)=>state.ingredient
export const selectErrorAuth=(state)=>state.auth.errorsAuth;
export const selectErrorReg=(state)=>state.auth.errorsReg;


//** */
