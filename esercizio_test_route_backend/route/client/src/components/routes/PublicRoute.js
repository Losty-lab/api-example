import React from 'react';
import Login from '../Access/Login';
import Register from '../Access/Register';
import {Route, Switch, Redirect} from 'react-router-dom'
import App from '../App';
import RegisterSuccess from '../Access/RegisterSuccess';
import Home from '../Access/Home';


function PublicRoute(){

    console.log('PUBLICROUTE')

    return(
        <div>
            <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/success" component={RegisterSuccess}/>
            <Redirect from="*" to="/"></Redirect>
            </Switch>
            
            
        </div>


    )
}

export default PublicRoute;