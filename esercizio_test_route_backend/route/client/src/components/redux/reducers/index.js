
//**REDUX */
//import {combineReducers} from 'redux';
//

//**REDUX TOOLKIT */
import {combineReducers} from '@reduxjs/toolkit'
import ingredientSliceReducerToolkit from './ingredientSliceReducerToolkit';
import authSliceReducerToolkit from './authSliceReducerToolkit';
import homeSliceReducerToolkit from './homeSliceReducerToolkit';
import cakeSliceReducerToolkit from './cakeSliceReducerToolkit';
import saleSliceReducerToolkit from './saleSliceReducerToolkit';
//

import authReducer from './authReducer'
import ingredientReducer from './ingredientReducer';
import cakeReducer from './cakeReducer';
import salesReducer from './salesReducer';
import homeReducer from './homeReducer'

//**REDUX */

// export default combineReducers({
//     auth:authReducer,
//     ingredients:ingredientReducer,
//     cakes:cakeReducer,
//     sales:salesReducer,
//     home:homeReducer

// })

//**REDUX TOOLKIT */

// const rootReducer=combineReducers({

//     ingredient:ingredientSliceReducerToolkit,
//     auth:authSliceReducerToolkit,
//     home:homeSliceReducerToolkit,
//     cake:cakeSliceReducerToolkit,
//     sale:saleSliceReducerToolkit

// })

// export default rootReducer

//** */