import {createSlice} from '@reduxjs/toolkit'


console.log('HOMESLICE')

const homeSlice=createSlice({
    name:'homeSlice',
    initialState:{
        home:[]
    },
    reducers:{

        setHomeSales(state,action){
            const homePayload=action.payload
            return{
                ...state, home:homePayload.map(elem=>{

                    return {
                        cakeId:elem.cakeId,
                        first:elem.first,
                        second:elem.second,
                        third:elem.third,
                        listcakes:elem.listcakes,
                        pubblicationDate:elem.pubblicationDate,
                        disableInfo:false

                    }
                })
            }

        }

    }

})

export const {setHomeSales}=homeSlice.actions;

export default homeSlice.reducer