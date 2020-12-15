import React,{useState,useEffect} from 'react';
import {connect} from 'react-redux';
import * as actions from '../redux/actions/index';
import {useSelector,useDispatch} from 'react-redux';
import {selectErrorAuth, login, loginEmpty} from '../redux/actions/index';



// function Login(props){

//     const[userData,setUserData]=useState({email:'',password:''})

//     function changeData(e){
        
//         setUserData({...userData, [e.target.name]:e.target.value})
//     }

//     function login(e){
//         e.preventDefault()

//         props.login(userData,props.history)

//     }


//     return(
//         <div>
//         <form onSubmit={login}>
//             <h1>Login</h1>
//             <div className="form-group">
//     <label>Email address</label>
//     <input type="email" className="form-control" 
//     name="email" placeholder="Email" value={userData.email} onChange={changeData}>
//         </input>
//     </div>
//     <div className="form-group">
//     <label >Password</label>
//     <input type="password" className="form-control" 
//     name="password" placeholder="Password" value={userData.password} onChange={changeData}>
//         </input>
//   </div>
  
//   <button type="submit" className="btn btn-primary">Submit</button>
  
// </form>

// <div>
//     <p>{props.error? props.error.error:null}</p>
// </div>
// </div>


//     )

// }

// function mapStateToProps(state){

//     console.log(state.auth.errors)
//     return{
//         error:state.auth.errors
//     }
// }



// export default connect(mapStateToProps,actions)(Login);


//**REDUX TOOLKIT */

function Login(props){

    const dispatch=useDispatch()

    const error=useSelector(selectErrorAuth)

    useEffect(()=>{

        dispatch(loginEmpty())

    }, [])

    const[userData,setUserData]=useState({email:'',password:''})

    function changeData(e){
        
        setUserData({...userData, [e.target.name]:e.target.value})
    }

    function loginAction(e){
        e.preventDefault()

        dispatch(login(userData,props.history))

    }


    return(
        <div>
        <form onSubmit={loginAction}>
            <h1>Login</h1>
            <div className="form-group">
    <label>Email address</label>
    <input type="email" className="form-control" 
    name="email" placeholder="Email" value={userData.email} onChange={changeData}>
        </input>
    </div>
    <div className="form-group">
    <label >Password</label>
    <input type="password" className="form-control" 
    name="password" placeholder="Password" value={userData.password} onChange={changeData}>
        </input>
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
  
</form>

<div>
    <p>{error ? error:null}</p>
</div>
</div>


    )

}





export default connect(null,actions)(Login);

//** */