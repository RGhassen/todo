import { ADD, DEL, DONE } from "./TypeActions"

const initialState ={
    tasks : [
        {title : 'stop smoking' , done : false , id : Math.random()},
        {title : 'drink water' , done : false , id : Math.random()}
    ]

}
const Reducer =(state=initialState,action)=>{
    switch(action.type){
        case ADD : 
        return {
            ...state 
            // to keep the rest of state
            ,
             tasks : [
                ...state.tasks 
                // to keep the rest of the table
                , 
                {title : action.payload , done : false , id : Math.random()}
                // task added (action.payload is the input value)
            ]

        }
        // in this case we 
        case DEL : 
        return{
            ...state ,
            tasks : state.tasks.filter((task)=>task.id !== action.payload)
            // we look for the task by id then we show the table without it 
        }
        case DONE : 
        return {
            ...state ,
            tasks : state.tasks.map((task)=>task.id === action.payload ? {...task  , done : !task.done} : task)
            // we look for the task by id then we change from done to undone or the oposit
        }

        default : return state
    }

}
export default Reducer