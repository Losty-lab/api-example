import {SET_ERROR, SET_TOKEN} from './authType'


const initialState={
    token:undefined,
    errors:undefined
}


export default function(state=initialState,action){

    switch(action.type){
        case SET_TOKEN:
            return{
                ...state, token:action.payload

            }

            case SET_ERROR:
            return{
                ...state, errors:action.payload
            }

            default:
                return state
    }


}