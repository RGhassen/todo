import { Button } from "@mui/material"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { add } from "../redux/Actions"

const Add=()=>{
    const dispatch = useDispatch()
    const [Inp , setInp] = useState('')
    return(
        <div id="Add-main">
            <input value={Inp} onChange={(e)=>setInp(e.target.value)}/>
            {/* we have set the value of the input(e.target.value) in our state (inp)  */}

            <Button onClick={()=>{
                dispatch(add(Inp))
                setInp('')
                // we dispatched the del action seted in the redux (check : redux/Actions) button imported

            }}>Add</Button>
        </div>
    )
}
export default Add