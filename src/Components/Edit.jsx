import React, { useState } from 'react'

function Edit({todo,id,setTodo,handleEditSubmit,setToggle,handleEdits,toggle,handleBack }) {
  let [title,setTitle]=useState("")
  let [description,setDescription]=useState("")
  let handleEdit=()=>{
    let a={id,title,description};
    todo.title=title
    todo.description=description;
    todo.id=id
    console.log("I am worked")
    handleEdits("");
  
  }
  return <>
  <div className='align-items-center p-2 container'>
    <input type="text"  onChange={(e)=>setTitle(e.target.value)}/>
    <input type="text" onChange={(e)=>setDescription(e.target.value)}/>
    <br></br>
    <div  className='text-center btn btn-secondary btn-sm w-auto' onClick={handleEdit}>Save</div>
  </div>
  </>
}

export default Edit