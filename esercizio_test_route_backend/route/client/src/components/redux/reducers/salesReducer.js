import {SET_SALESCAKE,
    SET_ERROR_SALES, 
    SET_SALESCAKE_DELETE, 
    SET_SALESCAKE_PRICE,
    SET_SALESCAKE_PRICE_ENABLE,
    SET_SALESCAKE_ELEMENT_ERROR,
    SET_SALESPRICE_ELEMENT,
     SET_SALESPRICE_INSERT_RESULT} from './salesType';

const initialState={
    sales:[],
    insertSales:[],
    errors:undefined,
    salesPriceElement:[],
    resultInsert:[]
    
}

export default function (state=initialState, action){

    switch(action.type){

        case SET_SALESCAKE:
            return{
                ...state, sales:action.payload.map(salesCake=>{
                    return {
                        id:salesCake._id,
                        name:salesCake.name,
                        imgLink:salesCake.imgLink,
                        enableSetPrice:false
                    }

                    
                })
            }
        case SET_ERROR_SALES:
            return {
                ...state, errors:action.payload
            }
        case SET_SALESCAKE_DELETE:
            return {
                ...state, sales:state.sales.filter(sale=>sale.name!==action.payload)
            }
        case SET_SALESCAKE_PRICE:
               

            return{
                ...state, insertSales:state.insertSales.find(sales=>sales.name===action.payload.id)?
                        
                            state.insertSales.map(sale=>sale.name===action.payload.id ?
                                {...sale, [action.payload.name]:action.payload.price, errorElement:''}
                :
                sale
                            )
                            :
                            
                [...state.insertSales,{name:action.payload.id, errorElement:'',[action.payload.name]:action.payload.price}]
                            
            }
                
        case SET_SALESCAKE_PRICE_ENABLE:
            return{
                ...state, insertSales: !action.payload.checked ? state.insertSales.filter(sale=>sale.name!==action.payload.name): [...state.insertSales],sales:state.sales.map(sale=>{
                    if(sale.name===action.payload.name){
                        sale.enableSetPrice=!sale.enableSetPrice
                    }
                    return sale
                }),
                
            }
        case SET_SALESCAKE_ELEMENT_ERROR:

            console.log('in salescake element error', action.payload)
            return{
                ...state, insertSales:state.insertSales.map(sale=>{
                    console.log('IN', state.insertSales)
                    action.payload.name.map(elem=>{
                        console.log('IN IN',elem)
                        if(sale.name===elem){
                            console.log('error in ',sale)
                         sale.errorElement=action.payload.error}
                        })
                        console.log('OUT SALE',sale)
                        return sale
                })
                   
                 
            }

        case SET_SALESPRICE_ELEMENT:
            console.log('SET SALESPRICE ELEMENT',action.payload)
            return {
                ...state ,salesPriceElement:action.payload, insertSales: [],sales:state.sales.map(sale=>{
                        if(sale.enableSetPrice){
                           sale.enableSetPrice=!sale.enableSetPrice
                        }
                        return sale
                })
            }
        
        case SET_SALESPRICE_INSERT_RESULT:
            return{
                ...state, resultInsert:action.payload
            }
        

            default:
                return state
    }
}