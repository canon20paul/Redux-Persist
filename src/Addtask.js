import React,{useState} from 'react'

export default function Addtask() {
    const[taskname, settaskname]=useState('')
    function addtask(){

    }
    
  return (
    <div>
    <h1>This is Addtask Component</h1>
    <input type="text" placeholder='taskname' value={taskname} onChange={(e)=>{settaskname(e.target.value)}}/>
    <button onClick={addtask}>ADD TASK</button>
      </div>
  )
}
