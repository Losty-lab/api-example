import React from 'react';
import cakeList from './cakeList.css';



function CakeList(props){

    function renderCakes(){
        return props.cakes.map(cake=>{
            return(
                <div className="elem-cake" key={cake.id}>

                    {cake.disable ?
                    <>
                    <input type="checkbox"
                    name={cake.name}
                    />
                    <label className="cake">
                        <b>{cake.name}</b>
                    </label>
                        </>
                    :
                    
                    props.cakeUpdate.map(cakeup=>{
                        if(cakeup.id===cake.id){
                            return(
                    <>
                    <input value={cakeup.newValue} type="text" id={cake.id} onChange={props.changeUpdateCakeAction}/>
                    <button id={cake.id} onClick={props.saveUpdateCakeAction}>Save</button>
                    <div>
                        <p>{cakeup.errorsUpdate ? cakeup.errorsUpdate :null}</p>
                    </div>
                        </>
                            )
                        }
                    }
                    )
                    
                    
                    }

                    <button id={cake.id} className="delete-button" onClick={props.deleteEvent}>Delete</button>
                   
                    <button id={cake.id} className="update-button" onClick={props.updateEvent}>Update</button>

             

                </div>
            )
        })
    }


    return(
        <div>
            {renderCakes()}


        </div>
    )
}

export default CakeList;