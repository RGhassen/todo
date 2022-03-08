import { Button, Checkbox, FormControlLabel } from "@mui/material"
import { useDispatch } from "react-redux"
import { del, done } from "../redux/Actions"

const Task =({task})=>{
    const dispatch = useDispatch()
    return(
        <div>
            <h2 className={task.done&&'Done'}>{task.title} </h2>
            {/* if task is done we put a class name */}
            <Button onClick={()=>dispatch(del(task.id))} variant="outlined" color="error">Delete</Button>
            
            {/* we dispatched del action from redux ( see : redux/Actions) */}
            <FormControlLabel  onClick={()=>dispatch(done(task.id))} control={<Checkbox />} label={task.done ? 'Done' : 'Not Done'} />
            {/*  we dispatched done action from redux ( see : redux/Actions) 
            button imported from mui*/}
        </div>
    )
}
export default Task