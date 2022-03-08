import { ADD, DEL, DONE } from "./TypeActions"

export const add =(payload)=>{
    return{
        type : ADD,
        payload
    }
}
// we have create action to add task see on reducer to see what it done
export const del =(payload)=>{
    return{
        type : DEL,
        payload
    }
}
// we have create action to delete task see on reducer to see what it done
export const done =(payload)=>{
    return{
        type : DONE,
        payload
    }
}
// we have create action to change task form done or undone see on reducer to see what it done
