import {createSlice} from '@reduxjs/toolkit';


console.log('IN SLICE AUTH')

const authSlice=createSlice({

    

    name:'authSlice',
    initialState:{
        token:undefined,
        errorsAuth:undefined,
        errorsReg:undefined
    },
    reducers:{
        setToken(state,action){
            const tokenPayload=action.payload
            return {
                ...state, token:tokenPayload
            }

        },
        setErrorAuth(state,action){
            const errorAuthPayload=action.payload
            return {
                ...state, errorsAuth:errorAuthPayload.error
            }
        },
        setErrorRegister(state,action){

            const errorRegisterPayload=action.payload;
            return {
                ...state, errorsReg:errorRegisterPayload.error
            }
        },
        setErrorAuthEmpty(state,action){
            const errorAuthEmptyPayload=action.payload;
            return {
                ...state, errorsAuth:errorAuthEmptyPayload.error
            }
        },
        setErrorRegisterEmpty(state,action){
            const errorRegisterPayload=action.payload;
            return {
                ...state, errorsReg:errorRegisterPayload.error
            }
        }


    }
})

export const {setToken,setErrorAuth, setErrorRegister,setErrorAuthEmpty,setErrorRegisterEmpty}=authSlice.actions;


export default authSlice.reducer