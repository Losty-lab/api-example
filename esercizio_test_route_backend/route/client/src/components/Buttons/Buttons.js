import React,{useState, useEffect} from 'react';
import CakeButton from './CakeButton';
import IngredientButton from './IngredientButton';
import SalesButton from './SalesButton'


function Buttons(){

    const [buttonView,setButtonView]=useState({cake:false, ingredient:false, sell:false})

    function viewButton(e){
        console.log('E TARGET NAME',buttonView[e.target.name])
        setButtonView({cake:false, ingredient:false, sell:false, [e.target.name]:!buttonView[e.target.name]})
        
    }

    function renderButtons(){
        if(buttonView.cake){
            return <CakeButton />
        }
        if(buttonView.ingredient){
            return <IngredientButton />
        }
        if(buttonView.sell){
            return <SalesButton />
        }
    }

    // useEffect(()=>{
    //     console.log('BUTTON',buttonView)
    // })

    return(
        <div>
               <h4>Buttons</h4>
               <button name="ingredient" onClick={viewButton}>Ingredient field</button>
               <button name="cake" onClick={viewButton}>Cake field</button>
               <button name="sell" onClick={viewButton}>Sales Cake field</button>
               <div>
               {renderButtons()}
            </div>
               
        </div>
    )
}

export default Buttons;