import React from 'react';
import { SET_SALESPRICE_ELEMENT } from '../redux/reducers/salesType';
import './salesList.css'

function SalesList(props){

    function renderSales(){
        return props.salesPriceElement.map(elem=>{
            return (
                <div className="element-info" key={elem.cakeId}>
                    <img src={elem.listcakes[0].imgLink} width="50"
                height="50"/>
                
                    <p><b>{elem.listcakes[0].name}</b></p>
                    
                    <p className="element-price">{elem.first}</p><p className="element-type">Euro</p><br/>
                    
                    <p className="element-price">{elem.second}</p><p className="element-type">Euro</p><br/>
                    
                    <p className="element-price">{elem.third}</p><p className="element-type">Euro</p><br/>
                    
                    <p className="element-pubblication"><b>Pubblication date</b></p><span>{elem.pubblication_date}</span><br/>
                    <button>Update</button>
                <button>Delete</button>
                </div>
            )
        })
    }

    return(
        <div>
            <h3>This is a sales list</h3>
            {renderSales()}
        </div>
    )
}

export default SalesList;