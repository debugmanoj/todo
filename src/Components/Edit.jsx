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
    <h5 className='mx-5' >Edit</h5>
    <input type="text" placeholder='Edit Todo' onChange={(e)=>setTitle(e.target.value)}/>
    <input className='mt-3' placeholder='Edit Description'  type="text" onChange={(e)=>setDescription(e.target.value)}/>
    <br></br>
    <div  className=' btn btn-primary mx-5 mt-3 btn-sm w-auto' onClick={handleEdit}>Save</div>
  </div>
  </>
}

export default Edit