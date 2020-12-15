import React from 'react';
import {connect} from 'react-redux';
import {NavLink, withRouter} from 'react-router-dom'


// function Header(props){


//     function renderHeader(){
//         switch (props.auth.token){
//             case undefined:
//                 return (
//                     <div>
//             <ul className="nav">
//             <li className="nav-item">
//             {/* <a className="nav-link active" href="/register">Register</a> */}
//             <NavLink activeClassName="text-info" to="/login" className="nav-link">Login</NavLink>
//             </li>
//             <li className="nav-item">
//             {/* <a className="nav-link active" href="/login">Login</a> */}
//             <NavLink activeClassName="text-info" to="/register" className="nav-link">Register</NavLink>
//             </li>
//             </ul>
//         </div>
//                 )
//                 default:
//                     return (
//                         <div>
//                         <ul className="nav">
//                         <li className="nav-item">
//                         <a className="nav-link active" onClick={props.logout}>Logout</a>
//                         </li>
//                         </ul>
//                         </div>

//                     )
//         }
//     }




//     console.log(props)

//     return(
//         <div>
//             {renderHeader()}
//         </div>


//     )
// }

// function mapStateToProps(state){
//     return{
//         auth:state.auth
//     }
// }

// export default connect(mapStateToProps,null)(Header);

function Header(props){


    function renderHeader(){
        switch (props.token){
            case undefined:
                return (
                    <div>
            <ul className="nav">
            <li className="nav-item">
            {/* <a className="nav-link active" href="/register">Register</a> */}
            <NavLink activeClassName="text-info" to="/login" className="nav-link">Login</NavLink>
            </li>
            <li className="nav-item">
            {/* <a className="nav-link active" href="/login">Login</a> */}
            <NavLink activeClassName="text-info" to="/register" className="nav-link">Register</NavLink>
            </li>
            </ul>
        </div>
                )
                default:
                    return (
                        <div>
                        <ul className="nav">
                        <li className="nav-item">
                        <a className="nav-link active" onClick={props.logout}>Logout</a>
                        </li>
                        </ul>
                        </div>

                    )
        }
    }




    console.log(props)

    return(
        <div>
            {renderHeader()}
        </div>


    )
}

export default connect(null,null)(Header);