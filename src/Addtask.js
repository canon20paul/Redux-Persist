import React,{useState} from 'react'
import {useDispatch} from 'react-redux'

export default function Addtask() {
    const[taskname, settaskname]=useState('')
    const dispatch = useDispatch()
    function addtask(){
        dispatch({type:'ADD_TASK', payload:taskname})
    }

  return (
    <div>
    <h1>This is Addtask Component</h1>
    <input type="text" placeholder='taskname' value={taskname} onChange={(e)=>{settaskname(e.target.value)}}/>
    <button onClick={addtask}>ADD TASK</button>
      </div>
  )
}
