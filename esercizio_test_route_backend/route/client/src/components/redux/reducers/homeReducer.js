
import {SET_HOME_SALES,SET_SALESINFO_DISABLE} from './homeType';


const initialState={
    home:[]
}

export default function (state=initialState, action){

    switch (action.type){

        case SET_HOME_SALES:
            return {
                ...state, home:action.payload.map(elem=>{
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

            case SET_SALESINFO_DISABLE:
                return {
                    ...state, home:state.home.map(elem=>{
                        if(elem.listcakes[0].name===action.payload){
                            elem.disableInfo=!elem.disableInfo
                        }
                        return elem
                    })
                }

            default:
                return state
    }

}