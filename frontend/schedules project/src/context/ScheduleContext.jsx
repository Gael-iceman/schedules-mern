import { createContext,useReducer } from "react";

export const SchedulesContext= createContext()

export const schedulesReducer= (state,action)=>{
    switch(action.type){
        case 'SET_SCHEDULES':
            return {
                schedules:action.payload
            }
        case 'CREATE_SCHEDULE':
            return {
                    schedules:[action.payload, ...state.schedules]
                }
        case 'DELETE_SCHEDULE':
            return {
                    schedules: state.schedules.filter((s) => s._id !== action.payload._id)
                };
                           
        default:
            return state        
    }
}

export const SchedulesContextProvider=({children})=>{
    const [state,dispatch]=useReducer(schedulesReducer,{
        schedules:null
    })

    // dispatch({type:'SET_SCHEDULES',payload:[{},{}]})

return(
    <SchedulesContext.Provider value={{...state, dispatch}}>
        {children}
    </SchedulesContext.Provider>
)
 }