import React,{useEffect} from 'react';
import CakeInSales from '../Lists/cakeInSales';
import {connect} from 'react-redux';
import * as actions from '../redux/actions/indexSales'
import SalesList from '../Lists/salesList';
import {useSelector, useDispatch} from 'react-redux';
import {selectSale,
    autoReadingSales,
    autoReadingSalesPrice,
    insertCakeInSales,
    insertSalesCakeAction,
    changeInsertPrice} from '../redux/actions/indexSales'


// function SalesButton(props){

//     useEffect(()=>{
//         console.log('inside use effect')
//         props.autoReadingSales()
//         props.autoReadingSalesPrice()
//     }, [])

//     function insertCakeInSales(){

//         props.insertCakeInSales(props.insertSales)

//     }

//     function changePrice(e){

//         props.insertSalesCakeAction(e.target)

//     }

//     function changeInsertPrice(e){
        
//         props.changeInsertPrice(e.target)
//     }

//     return(
//         <div>
//             <button onClick={insertCakeInSales}>Insert Cake in Sales</button>
            
//                 <p>{props.errors ? props.errors : null}</p>
            
//             <div>

//                 <CakeInSales insertSales={props.insertSales} 
//                 resultInsert={props.resultInsert}
//                 saleCake={props.saleCake} changePrice={changePrice} 
//                 changeInsertPrice={changeInsertPrice}/>
//             </div>
//             <div>
//                 <SalesList salesPriceElement={props.salesPriceElement}/>
//             </div>
//         </div>
//     )
// }

// function mapStateToProps(state){
// console.log('SALES STATE',state)
//     return {
//         saleCake:state.sales.sales,
//         insertSales:state.sales.insertSales,
//         errors:state.sales.errors,
//         salesPriceElement:state.sales.salesPriceElement,
//         resultInsert:state.sales.resultInsert
//     }
// }
// export default connect(mapStateToProps, actions)(SalesButton);

function SalesButton(props){

    const dispatch=useDispatch()

    const sales=useSelector(selectSale())

    console.log('STATE IN SALESBUTTON',sales)

    useEffect(()=>{
        console.log('inside use effect')
        dispatch(autoReadingSales())
        dispatch(autoReadingSalesPrice())
    }, [])

    function insertCakeInSalesAction(){

        dispatch(insertCakeInSales(sales.insertSales))

    }

    function changePrice(e){

        dispatch(insertSalesCakeAction(e.target.id,e.target.value,e.target.name))

    }

    function changeInsertPriceAction(e){
        
        dispatch(changeInsertPrice(e.target.checked, e.target.id))
    }

    return(
        <div>
            <button onClick={insertCakeInSalesAction}>Insert Cake in Sales</button>
            
                {/* <p>{props.errors ? props.errors : null}</p> */}
            
            <div>

                <CakeInSales 
                insertSales={sales.insertSales} 
                resultInsert={sales.resultInsert}
                saleCake={sales.sales}
                changePrice={changePrice} 
                changeInsertPrice={changeInsertPriceAction}/>
            </div>
            <div>
                <SalesList salesPriceElement={sales.salesPriceElement}/>
            </div>
        </div>
    )
}


export default connect(null, actions)(SalesButton);