import {SET_ERROR_SALES, 
    SET_SALESCAKE,
    SET_SALESCAKE_PRICE, 
    SET_SALESCAKE_PRICE_ENABLE,
    SET_SALESCAKE_ELEMENT_ERROR,
    SET_SALESPRICE_ELEMENT,
    SET_SALESPRICE_INSERT_RESULT} from '../reducers/salesType'
import {SET_HOME_SALES,SET_SALESINFO_DISABLE} from '../reducers/homeType'
import axios from 'axios';
import { SET_CAKE } from '../reducers/cakeType';

//**REDUX TOOLKIT */

import {useDispatch} from 'react-redux';
import {setHomeSales} from '../reducers/homeSliceReducerToolkit'
import {setSalesCake,
        setErrorSales,
        setSalesPriceElement,
        setSalesCakePriceEnable,
        setSalesCakePrice,
        setSalesCakeElementError,
        setSalesPriceInsertResult,
        setInsertSalesEmpty,
        setCheckFalseCake,
        setResultInsertEmpty} from '../reducers/saleSliceReducerToolkit';



//** */




// export const autoReadingSales=()=>dispatch=>{

//     const headers={
//         'Content-type':'application/json',
//         'authorization': localStorage.getItem('token')
//     }
    
//     axios.get("/api/cake",{
//         headers:headers
//     }).then(response=>{
//         console.log('in response sales',response)
//     dispatch({type:SET_SALESCAKE, payload:response.data.result})
//     dispatch({type:SET_ERROR_SALES, payload:''})
//     })
//     .catch(error=>{
//         console.log('IN CATCH')
//         dispatch({type:SET_ERROR_SALES, payload:error.response.data.result})
//     })

// }


// export const insertSalesCakeAction=(value)=>dispatch=>{
//     console.log('value data')

// dispatch({type:SET_SALESCAKE_PRICE, payload:{name:value.name, price:value.value, id:value.id}})
  
// }

// export const changeInsertPrice=(value)=>dispatch=>{

// console.log('VALUE INSERT',value.checked)
//     dispatch({type:SET_SALESCAKE_PRICE_ENABLE, payload:value})
// }

// export const insertCakeInSales=(value)=>dispatch=>{

//         console.log('value',value)

//         let arr=[]

//     value.map(val=>{
//         console.log('vali in map', val)
//         if(val.first===undefined || val.first===""){
//             arr.push(val.name)
//         }

//         return val

//     })

//     if(arr[0]!==undefined){
       
        

//         return    dispatch({type: SET_SALESCAKE_ELEMENT_ERROR, 
//                 payload:{name:arr, error:'You have to insert at least a first price'}})

        
//     }

//     console.log('OUT OF IF STATEMENT')

//     const headers={
//         'Content-type':'application/json',
//         'authorization':localStorage.getItem('token')
//     }

//     axios.post("/api/salespricelist",{
//         headers:headers,
//         body:value
//     }).then(response=>{
//             console.log('RESPOSNE RESULT SALESPRICE ELEMENT',response)
//         dispatch({type:SET_SALESPRICE_INSERT_RESULT, payload:response.data.result})
//         dispatch({type:SET_SALESPRICE_ELEMENT, payload:response.data.sales})
        
//     })
//     .catch(error=>console.log('error sales',error.response))


// }

// export const autoReadingSalesPrice=()=>dispatch=>{

//     const headers={
//         'Content-type':'application/json',
//         'authorization':localStorage.getItem('token')
//     }

//     axios.get("/api/salespricelist",{
//         headers:headers
//     }).then(response=>{
//         console.log('response sales price',response.data.sales)
//         dispatch({type:SET_SALESPRICE_ELEMENT, payload:response.data.sales})
        
//     })
//     .catch(error=>console.log('ERROR RESOPNSE',error))
// }

// // export const autoReadingSalesHome=()=>dispatch=>{


// //     axios.get("/reading/saleshome").then(response=>dispatch({type:SET_HOME_SALES, payload:response.data.sales}))
// //     .catch(error=>console.log('ERROR IN RESPONSE',error.response.data))
// // }

// //**REDUX TOOLKIT */

// export const autoReadingSalesHome=()=>dispatch=>{

//     console.log('AUTOREADINGSALES HOME')

    
    


//     axios.get("/reading/saleshome").then(response=>dispatch(setHomeSales(response.data.sales)))

// }

// //** */

// export const setDisableInfo=(value)=>dispatch=>{


//     dispatch({type:SET_SALESINFO_DISABLE, payload:value})

// }


//**REDUX TOOLKIT */

export const autoReadingSales=()=>dispatch=>{

    const headers={
        'Content-type':'application/json',
        'authorization': localStorage.getItem('token')
    }
    
    axios.get("/api/cake",{
        headers:headers
    }).then(response=>{
        console.log('in response sales',response)
    dispatch(setSalesCake(response.data.result))
    dispatch(setInsertSalesEmpty())
    dispatch(setResultInsertEmpty())
    dispatch(setErrorSales({error:''}))
    })
    .catch(error=>{
        console.log('IN CATCH')
        dispatch(setErrorSales(error.response.data.result))
    })

}


export const insertSalesCakeAction=(id,value,name)=>dispatch=>{
    console.log('value data')

dispatch(setSalesCakePrice({id:id, name:name, value:value}))
  
}

export const changeInsertPrice=(checked,id)=>dispatch=>{

console.log('VALUE INSERT',checked)
    dispatch(setSalesCakePriceEnable({checked:checked,id:id}))
}

export const insertCakeInSales=(insertSales)=>dispatch=>{

    console.log('INSERTSALES',insertSales)

        let arr=[]

    insertSales.map(val=>{
        console.log('vali in map', val)
        if(val.first===undefined || val.first===""){
            console.log('INSIDE IF SALES',val.first)
            arr.push(val.id)
           
        }

        return val

    })

    if(arr[0]!==undefined){

        console.log('ARR',arr)
        return dispatch(setSalesCakeElementError({arrId:arr,errorFirstPrice:'You have to insert at least a first price'}))
    }else{



    console.log('OUT OF IF STATEMENT')

    const headers={
        'Content-type':'application/json',
        'authorization':localStorage.getItem('token')
    }

    axios.post("/api/salespricelist",{
        headers:headers,
        body:insertSales
    }).then(response=>{
            console.log('RESPOSNE RESULT SALESPRICE ELEMENT',response)
        dispatch(setSalesPriceInsertResult(response.data.result))
        dispatch(setSalesPriceElement(response.data.sales))
        dispatch(setCheckFalseCake(false))
        dispatch(setInsertSalesEmpty())
        
    })
    .catch(error=>console.log('error sales',error.response))

}

}

export const autoReadingSalesPrice=()=>dispatch=>{

    const headers={
        'Content-type':'application/json',
        'authorization':localStorage.getItem('token')
    }

    axios.get("/api/salespricelist",{
        headers:headers
    }).then(response=>{
        console.log('response sales price',response.data.sales)
        dispatch(setSalesPriceElement(response.data.sales))
        
    })
    .catch(error=>console.log('ERROR RESOPNSE',error))
}


export const autoReadingSalesHome=()=>dispatch=>{

    console.log('AUTOREADINGSALES HOME')

    
    


    axios.get("/reading/saleshome").then(response=>dispatch(setHomeSales(response.data.sales)))

}

//** */

export const setDisableInfo=(value)=>dispatch=>{


    dispatch({type:SET_SALESINFO_DISABLE, payload:value})

}


export const selectSale=(state)=>state.sale;

//** */