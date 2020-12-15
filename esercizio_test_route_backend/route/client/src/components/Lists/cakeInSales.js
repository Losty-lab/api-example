import React from 'react';


function cakeInSales(props){

    function renderCakes(){
        return props.saleCake.map(cake=>{
            return (
                <div key={cake.name}>
                    <input id={cake.id} type="checkbox" name={cake.name} checked={cake.enableSetPrice} onChange={props.changeInsertPrice}/>
                    <label><b>{cake.name}</b></label>
                    
                    {cake.enableSetPrice ? 

                        props.insertSales.map(sale=>{
                        if(sale.id===cake.id){

                         return (
                         
                            <>
                        <input value={sale.first} id={cake.id} name="first" type="text"  onChange={props.changePrice}/>First choice
                        <input value={sale.second} id={cake.id} name="second" type="text"  onChange={props.changePrice}/>Second choice
                        <input value={sale.third} id={cake.id} name="third" type="text"  onChange={props.changePrice}/>Third choice
                        <div key={sale.name}>
                         <p>{sale.errorFirstPrice}</p>
                        </div>
                        
                </>
                         

                         )


                        }})
                        
                :
                null                
                    }

                </div>
            )
        })
    }

    return (
        <div>
                {renderCakes()}

                {props.resultInsert.length!==0 ? 
                
                props.resultInsert.map(result=>{
                    return (
                        <div key={result}><p>You have inserted {result}</p></div>
                    )
                })
                :
                null
            }
        </div>


    )
}

export default cakeInSales;