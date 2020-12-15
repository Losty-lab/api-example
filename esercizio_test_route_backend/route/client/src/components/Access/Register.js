import React,{useState, useEffect} from 'react';
import * as actions from '../redux/actions/index';
import {connect} from 'react-redux';
import {withRouter, Route} from 'react-router-dom';
import RegisterSuccess from './RegisterSuccess';
import {useDispatch,useSelector} from 'react-redux'
import {selectErrorReg,
        register,
        registerEmpty} from '../redux/actions/index'


// function Register(props){

//     const dispatch=useDispatch()
//     const error=useSelector(selectError)


//     const [userData,setUserData]=useState({email:'',password:''})

//     function changeData(e){
//         setUserData({...userData, [e.target.name]:e.target.value})

//     }

//     function registerUser(e){
//         e.preventDefault()
//         dispatch(register(userData,props.history))
//     }



//     return(

//         <div>
            
//         <form onSubmit={registerUser}>
//             <h1>Registrati</h1>
//             <div className="form-group">
//     <label>Email address</label>
//     <input type="email" className="form-control" name="email" placeholder="Email"
//     value={userData.email} onChange={changeData}/>
        
//     </div>
//     <div className="form-group">
//     <label >Password</label>
//     <input type="password" className="form-control" name="password" placeholder="Password"
//     value={userData.password} onChange={changeData}/>
        
//   </div>
  
//   <button type="submit" className="btn btn-primary" >Submit</button>
  
// </form>
// <div>

// <p>{ props.error?.error }</p>

    


// </div>
// </div>


//     )
// }

// function mapStateToProps(state){
//     return{
//         error:state.auth.errors
//     }
// }


// export default connect(mapStateToProps,actions)(withRouter(Register));


function Register(props){

    const dispatch=useDispatch()
    const error=useSelector(selectErrorReg)

    useEffect(()=>{

        dispatch(registerEmpty())
    
    
    }, [])


    const [userData,setUserData]=useState({email:'',password:''})

    function changeData(e){
        setUserData({...userData, [e.target.name]:e.target.value})

    }

    function registerUser(e){
        e.preventDefault()
        dispatch(register(userData,props.history))
    }



    return(

        <div>
            
        <form onSubmit={registerUser}>
            <h1>Registrati</h1>
            <div className="form-group">
    <label>Email address</label>
    <input type="email" className="form-control" name="email" placeholder="Email"
    value={userData.email} onChange={changeData}/>
        
    </div>
    <div className="form-group">
    <label >Password</label>
    <input type="password" className="form-control" name="password" placeholder="Password"
    value={userData.password} onChange={changeData}/>
    
        
  </div>
  
  <button type="submit" className="btn btn-primary" >Submit</button>
  
</form>
<div>

<p>{error ? error : null}</p>

    


</div>
</div>


    )
}




export default withRouter(Register);