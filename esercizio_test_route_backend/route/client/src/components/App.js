import React,{useEffect} from 'react';
import PublicRoute from '../components/routes/PublicRoute';
import AuthRoute from '../components/routes/AuthRoute';
import Login from './Access/Login';
import Register from './Access/Register';
import Header from '../components/Access/Header';
import {connect, useDispatch} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
//import * as actions from './redux/actions/index';
import {logout, autoLogin, selectToken} from './redux/actions/index';
//**REDUX TOOLKIT */
import {useSelector} from 'react-redux'

//** */



// function App(props){

//     //**REDUX TOOLKIT */

//     const token=useSelector((state)=>{
//         console.log('SELECTOOOOOR',state)
//         return(
//         state.auth.token
//         )
//     })

//     //** */

//     console.log('App', token)

//     useEffect(()=>{

//        // props.autoLogin()

//         //**REDUX TOOLKIT */
//         actions.autoLogin()
//         //** */


//     },[])


//     function logout(){
//         props.logout()
//     }

//     return(
//         <div> 
//             <BrowserRouter>
//             <Header logout={logout}/>
//             {props.token ? 
//             <Route path="/" component={AuthRoute}/>
//             :
//             <Route path="/" component={PublicRoute}/>
//             }
//             </BrowserRouter>
//         </div>
//     )
// }

// // function mapStateToProps(state){
// //     return{
// //         token:state.auth.token
// //     }
// // }

// //**REDUX TOOLKIT */


// export default App;

// //** */

// //export default connect(mapStateToProps,actions)(App);

//**REDUX TOOLKIT */

function App(props){

const dispatch=useDispatch();

    const token=useSelector(selectToken)


   

    useEffect(()=>{

     
        dispatch(autoLogin())
        


    },[])


    // function logoutAction(){
    //     dispatch(logout())
    // }

    return(
        <div> 
            <BrowserRouter>
            <Header logout={()=>dispatch(logout())} token={token}/>
            {token ? 
            <Route path="/" component={AuthRoute}/>
            :
            <Route path="/" component={PublicRoute}/>
            }
            </BrowserRouter>
        </div>
    )
}




export default App;

//** */