import {createSlice} from '@reduxjs/toolkit';


const saleSlice=createSlice({
    name:'saleSlice',
    initialState:{
        sales:[],
        salesPriceElement:[],
        errors:undefined,
        insertSales:[],
        resultInsert:[]


    },
    reducers:{
        setSalesCake(state,action){
            const salesCakePayload=action.payload;
            state.sales=salesCakePayload.map(sales=>{
                return {
                    id:sales._id,
                    name:sales.name,
                    imgLink:sales.imgLink,
                    enableSetPrice:false
                }
            })

        },
        setErrorSales(state,action){
            const salesErrorPayload=action.payload;
            return {
                ...state, errors:salesErrorPayload
            }

        },
        setSalesPriceElement(state,action){

            const salesPriceElementPayload=action.payload
            state.salesPriceElement=salesPriceElementPayload
        },
        setSalesCakePriceEnable(state,action){

            const salesCakePriceEnablePayload=action.payload;

           if(salesCakePriceEnablePayload.checked){
               state.sales.map(sale=>{
                   if(salesCakePriceEnablePayload.id===sale.id){
                        sale.enableSetPrice=!sale.enableSetPrice
                        state.insertSales.push({id:sale.id})
                   }
                   return sale
               })
           }else{
               state.sales=state.sales.map(sale=>{
                   if(sale.id===salesCakePriceEnablePayload.id){
                       sale.enableSetPrice=!sale.enableSetPrice
                       state.insertSales=state.insertSales.filter(saleIn=>saleIn.id!==salesCakePriceEnablePayload.id)
                   }
                   return sale
               })
           }


        },
        setSalesCakePrice(state,action){
            const salesCakePricePayload=action.payload;

            state.insertSales.forEach(sale=>{
                if(sale.id===salesCakePricePayload.id){
                    sale[salesCakePricePayload.name]=salesCakePricePayload.value
                }
                return sale
            })

        },
        setSalesCakeElementError(state,action){
            const salesCakeElementErrorPayload=action.payload;

            state.insertSales.forEach(sale=>{
                salesCakeElementErrorPayload.arrId.forEach(saleId=>{
                if(sale.id===saleId){
                    sale.errorFirstPrice=salesCakeElementErrorPayload.errorFirstPrice
                }
                return saleId

            })

            return sale
            })


        },
        setSalesPriceInsertResult(state,action){

           state.resultInsert=[]
            const salesPriceInsertResultPayload=action.payload;
            console.log('sales response',salesPriceInsertResultPayload)

            

            salesPriceInsertResultPayload.forEach(sale=>{
                state.resultInsert.push(sale.name)

            })


        },
        setInsertSalesEmpty(state,action){

            state.insertSales=[]


        },
        setResultInsertEmpty(state,action){
            state.resultInsert=[]


        },
        setCheckFalseCake(state,action){

            state.sales.forEach(sale=>{

                if(sale.enableSetPrice){
                    sale.enableSetPrice=false
                }
                return sale

            })

        }

    }



})

export const {setSalesCake}=saleSlice.actions;
export const {setErrorSales}=saleSlice.actions;
export const {setSalesPriceElement}=saleSlice.actions;
export const {setSalesCakePriceEnable}=saleSlice.actions;
export const {setSalesCakePrice}=saleSlice.actions;
export const {setSalesCakeElementError}=saleSlice.actions;
export const {setSalesPriceInsertResult}=saleSlice.actions;
export const {setInsertSalesEmpty}=saleSlice.actions;
export const {setCheckFalseCake}=saleSlice.actions;
export const {setResultInsertEmpty}=saleSlice.actions;


export default saleSlice.reducer;