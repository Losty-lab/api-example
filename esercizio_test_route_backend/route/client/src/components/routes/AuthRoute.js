import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import AdministrationPage from '../AuthenticatedComponents/AdministrationPage';




function AuthRoute(){

    return(
        <div>
        
        <Route exact path="/administrationpage" component={AdministrationPage}/>
        <Redirect from="*" to="/administrationpage"></Redirect>
        
        </div>

    )
}

export default AuthRoute;