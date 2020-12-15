import React,{useEffect} from 'react';
import CakeList from '../Lists/cakeList';
import {connect} from 'react-redux'
import * as actions from '../redux/actions/indexCake';
import IngredientInCakeList from '../Lists/ingredientInCakeList';
import cakeButton from './cakeButton.css'

//**REDUX TOOLKIT */

import {useSelector, useDispatch} from 'react-redux';
import {selectCake,
        autoReadingCakes,
        insertCake,
        insertCakeAction,
        insertIngredientCake,
        deleteCake,
        updateDisableCake,
        changeUpdateCake,
        saveUpdateCake} from '../redux/actions/indexCake';
import {selectIngredient} from '../redux/actions/index';







//** */


// function CakeButton(props){


//     useEffect(()=>{

//         props.autoReadingCakes()

//     }, [])

//     function insertCake(){

//         props.insertCake(props.cakes.insertCake)

//     }

//     function changeData(e){

//             props.insertCakeAction(e.target)
//     }

//     function insertIngredientCake(e){

//         console.log('CHECINGREDIENT',e.target.checked)
//         props.insertIngredientCake(e.target.name,e.target.checked)
//     }

//     function deleteEvent(e){

//         props.deleteCake(e.target.id)


//     }

//     function updateEvent(e){

//        props.updateDisableCake(e.target.id)

//     }

//     function changeUpdateCake(e){

//         props.changeUpdateCake(e.target.value)
//     }

//     function saveUpdateCake(e){

        

//         props.saveUpdateCake(props.cakeUpdate, e.target.id)

//     }



//     return(
//         <div>
//             <button onClick={insertCake}>Insert Cake</button>
//             <input type="text" value={props.cakes.insertCake.name} onChange={changeData} name="name" placeholder="Name cake"/>
//             <input type="text"  value={props.cakes.insertCake.weight} onChange={changeData} name="weight" placeholder="weight"/>
//             <input type="text"  value={props.cakes.insertCake.imgLink} onChange={changeData} name="imgLink" placeholder="imglink"/>
//             <div>
//                 <p>{props.error ? props.error : null}</p>
//             </div>
//             <div className="component-ingredientList">
//                 <IngredientInCakeList ingredients={props.ingredients} insertIngredientCake={insertIngredientCake}/>
//             </div>
//             <div className="component-cakeList">
//             <CakeList cakes={props.cakes.cakes} deleteEvent={deleteEvent} updateEvent={updateEvent} changeUpdateCake={changeUpdateCake}
//             saveUpdateCake={saveUpdateCake} errorsUpdate={props.errorsUpdate}/>
//             </div>
//         </div>
//     )
// }

// function mapStateToProps(state){

//     console.log('STATE IN CAKE',state)

//     return{
//         cakeUpdate:state.cakes.cakeUpdate,
//         cakes:state.cakes,
//         error:state.cakes.errors,
//         errorsUpdate:state.cakes.errorsUpdate,
//         ingredients:state.ingredients.ingredients
//     }
// }



// export default connect(mapStateToProps,actions)(CakeButton);


function CakeButton(){

    const dispatch=useDispatch()
    

    const cakes=useSelector(selectCake)

    const ingredients=useSelector(selectIngredient)

    


    useEffect(()=>{

        
        
    
        
        dispatch(autoReadingCakes())
        
        

    }, [])

    function insertCakeActionComp(){

        dispatch(insertCake(cakes.insertCake))

    }

    function changeData(e){

            dispatch(insertCakeAction(e.target))
    }

    function insertIngredientCakeAction(e){

      
        dispatch(insertIngredientCake(e.target.name,e.target.checked))
    }

    function deleteEvent(e){

        dispatch(deleteCake(e.target.id))


    }

    function updateEvent(e){

       dispatch(updateDisableCake(e.target.id))

    }

    function changeUpdateCakeAction(e){

        dispatch(changeUpdateCake(e.target.value,e.target.id))
    }

    function saveUpdateCakeAction(e){

        

        dispatch(saveUpdateCake(e.target.id, cakes.cakeUpdate))

    }



    return(
        <div>
            <button onClick={insertCakeActionComp}>Insert Cake</button>
            <input type="text" value={cakes.insertCake.name} onChange={changeData} name="name" placeholder="Name cake"/>
            <input type="text"  value={cakes.insertCake.weight} onChange={changeData} name="weight" placeholder="weight"/>
            <input type="text"  value={cakes.insertCake.imgLink} onChange={changeData} name="imgLink" placeholder="imglink"/>
            <div>
                <p>{cakes.errors ? cakes.errors : null}</p>
            </div>
            <div className="component-ingredientList">
                <IngredientInCakeList ingredients={ingredients.ingredients} insertIngredientCakeAction={insertIngredientCakeAction}/>
            </div>
            <div className="component-cakeList">
            <CakeList cakes={cakes.cakes} cakeUpdate={cakes.cakeUpdate} deleteEvent={deleteEvent} updateEvent={updateEvent} changeUpdateCakeAction={changeUpdateCakeAction}
            saveUpdateCakeAction={saveUpdateCakeAction} errorsUpdate={cakes.errorsUpdate}/>
            </div>
        </div>
    )
}





export default CakeButton;

