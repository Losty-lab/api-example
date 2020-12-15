import React from 'react';
import {createStore, applyMiddleware} from 'redux'

//**REDUX TOOLKIT */
import {configureStore} from '@reduxjs/toolkit';
import rootReducer from '../reducers/index'
//
import reducers from '../reducers/index';
import reduxThunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension';
import ingredientSliceReducerToolkit from '../reducers/ingredientSliceReducerToolkit';
import authSliceReducerToolkit from '../reducers/authSliceReducerToolkit';
import homeSliceReducerToolkit from '../reducers/homeSliceReducerToolkit';
import cakeSliceReducerToolkit from '../reducers/cakeSliceReducerToolkit';
import saleSliceReducerToolkit from '../reducers/saleSliceReducerToolkit';


 //**REDUX */

//const store=createStore(reducers, composeWithDevTools(applyMiddleware(reduxThunk)));
//

//**REDUX TOOLKIT */

const store=configureStore({
    //reducer:rootReducer
    reducer:{
    ingredient:ingredientSliceReducerToolkit,
    auth:authSliceReducerToolkit,
    home:homeSliceReducerToolkit,
    cake:cakeSliceReducerToolkit,
    sale:saleSliceReducerToolkit
    }

})


export default store;


