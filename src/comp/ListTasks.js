import { Button, ButtonGroup } from "@mui/material"
import { useState } from "react"
import { useSelector } from "react-redux"
import Task from "./Task"

const ListTasks=()=>{
    const tasks = useSelector((state)=>state.tasks)
    const [show,setShow] = useState(1)
    return(
        <div id="List-main">
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                <Button onClick={()=>setShow(1)}>All</Button>
                <Button onClick={()=>setShow(2)}>Not Done</Button>
                <Button onClick={()=>setShow(3)}>Done</Button>
            </ButtonGroup>
            {/* we added 3 button to change the state we used the buttons as a switch */}

            {
                show === 2 ?
                tasks.filter((task)=>task.done === false).map((task)=><Task task={task}/>)
                // if show = 2 we filter the table for the tasks undone then we map the table
                :
                show === 3 ?
                tasks.filter((task)=>task.done === true).map((task)=><Task task ={task}/>)
                // if show = 3 we filter the table for the tasks done the we map the table 
                : 
                tasks.map((task)=><Task task={task}/>)
                // in default case we just map the table
            }
        </div>
    )
}
export default ListTasks 