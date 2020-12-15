import React,{useState,useEffect} from 'react';
import {connect} from 'react-redux';
import * as actions from '../redux/actions/index';
import IngredientList from '../Lists/ingredientList';

//**REDUX TOOLKIT */
import {useSelector, useDispatch} from 'react-redux'
import {selectIngredient, 
    autoReadingIngredients,
    insertIngredient,
    updateEnableIngredient,
    deleteIngredient,
    insertIngredientAction,
    changeUpdateIngredient,
    saveIngredientUpdated} from '../redux/actions/index'

//** */


// function IngredientButton(props){

//     const [ingredientData, setIngredientData]=useState({ingredient:''});
//     const [ingredientUpdate, setIngredientUpdate]=useState({ingredientUpdate:''})

    
//     useEffect(()=>{

//         props.autoReadingIngredients()

//     },[]);

//     function changeData(e){

      
         
//         props.insertIngredientAction(e.target.value)

//     }

//     function insertIngredient(){

      

//         props.insertIngredient(props.ingredients.insertIngredient)


//     }

//     function updateEvent(e){

//         props.updateEnableIngredient(e.target.id)

//     }

//     function deleteEvent(e){

       
//         props.deleteIngredient(e.target.id)

//     }

//     function changeUpdateData(e){

//         console.log(e.target.value)
//         setIngredientUpdate({...ingredientUpdate, ingredientUpdate:e.target.value})

//     }

//     function saveIngredient(e){

//         props.saveIngredientUpdated(e.target.id, ingredientUpdate)


//     }

   
    
    

//     return(
//         <div>
//         <div>
//             <input type="text" value={props.ingredients.insertIngredient}
//             placeholder="ingredient"
//             name="ingredient" onChange={changeData}/>
//             <button onClick={insertIngredient}>Insert Ingredient</button>
//         </div>
//         <div>
//             <p><b>{props.error ? props.error.error: null}</b></p>
//         </div>
//         <div>
//             <IngredientList ingredients={props.ingredients.ingredients} 
//             stateView={props.stateView}
//             deleteEvent={deleteEvent} 
//             updateEvent={updateEvent}
//             changeUpdateData={changeUpdateData}
//             ingredientUpdate={ingredientUpdate.ingredientUpdate}
//             saveIngredient={saveIngredient}
//             errorsUpdate={props.errorsUpdate}
//             />
//         </div>
//         </div>
//     )
// }



// function mapStateToProps(state){
//     console.log('ERROR STATE',state)
//     return{
//         error:state.ingredients.errors,
//         ingredients:state.ingredients,
//         errorsUpdate:state.ingredients.errorsUpdate
        
        
//     }
// }
// export default connect(mapStateToProps,actions)(IngredientButton);

//**REDUX TOOLKIT */

function IngredientButton(){

    const dispatch=useDispatch()
    

    const ingredients=useSelector(selectIngredient)

    console.log('INGREDIENTS',ingredients)



    // const [ingredientData, setIngredientData]=useState({ingredient:''});
    // const [ingredientUpdate, setIngredientUpdate]=useState({ingredientUpdate:''})



    
    useEffect(()=>{

        dispatch(autoReadingIngredients())

    },[]);

    function changeData(e){

      
         
        dispatch(insertIngredientAction(e.target.value))

    }

    function insertIngredientActionComp(){

      

        dispatch(insertIngredient(ingredients.insertIngredient))


    }

    function updateEvent(e){

        dispatch(updateEnableIngredient(e.target.id))

    }

    function deleteEvent(e){

       
        dispatch(deleteIngredient(e.target.id))

    }

    function changeUpdateIngredientAction(e){

        console.log(e.target.value)

        dispatch(changeUpdateIngredient(e.target.value, e.target.id))
        //setIngredientUpdate({...ingredientUpdate, ingredientUpdate:e.target.value})

    }

    function saveIngredient(e){

       dispatch(saveIngredientUpdated(e.target.id, ingredients.ingredientUpdate))
        //setIngredientUpdate({...ingredientUpdate, ingredientUpdate:''})


    }

   
    
    

    return(
        <div>
        <div>
            <input type="text"
            //**SI INCAZZA SE METTO IL VALUE QUANDO VADO A CANCELLARE PER LA PRIMA VOLTA DOPO IL CARICAMENTO,QUALCHE INGREDIENT */
            value={ingredients.insertIngredient}
            //** */
            placeholder="ingredient"
            name="ingredient" onChange={changeData}/>
            <button onClick={insertIngredientActionComp}>Insert Ingredient</button>
        </div>
        <div>
            <p><b>{ingredients.errors ? ingredients.errors.error: null}</b></p>
        </div>
        <div>
            <IngredientList ingredients={ingredients.ingredients} 
            
            deleteEvent={deleteEvent} 
            updateEvent={updateEvent}
            changeUpdateIngredientAction={changeUpdateIngredientAction}
            ingredientUpdate={ingredients.ingredientUpdate}
            saveIngredient={saveIngredient}
            //errorsUpdate={ingredients.errorsUpdate}
            />
        </div>
        </div>
    )
}



export default connect(null,actions)(IngredientButton);

//** */