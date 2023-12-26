import React, { useState } from 'react'
import Cards from './Cards'

function TopBar({todo,setTodo,completed,setCompleted}) {
  
  let [title,setTitle]=useState("")
  let [description,setDescription]=useState("")
 
   let handleDrop=(e)=>{
    let gotcha=e.target.innerText
    setCompleted(gotcha==="Completed"?"Not Completed":"Completed")
   }
  let handleClick=()=>{    
    let id=todo.length?todo[todo.length-1].id+1 :1
    let newArray=[...todo]
    newArray.push({
      id,
      title,
      description
    })

    // console.log(newArray);
    setTodo(newArray);
   
  }
  return <>
  <h1 className="text-center HeaderColor">My Todo</h1>
    <div className="container overflow-hidden text-center">
        <div className="row gx-5">
          <div className="col">
           <div className="p-3"><input placeholder="Name" type="text" onChange={(e)=>{setTitle(e.target.value)}}/></div>
          </div>
          <div className="col">
            <div className="p-3"><input placeholder="Todo Description" type="text" onChange={(e)=>{setDescription(e.target.value)}}/></div>
          </div>
          <div className="col">
            <div className="p-3"><button onClick={handleClick}>Add todo</button></div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center p-5">
<div>
    <h6 className="fw-bold">My Todos</h6>
</div>
<div>
    <h4>Status Filter : <span> <div className="btn-group">
           <button  className="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            {completed}
          </button>
          <ul className="dropdown-menu">
            <a onClick={handleDrop}>Completed</a>
            <a onClick={handleDrop}>Not Completed</a>
          </ul>
        </div></span></h4>
</div>
      </div>
      <div className="container">
  <div className="row">
  {
    todo.map((e,i)=>{
      return <Cards completed={completed} setCompleted={setCompleted} todo={e} setTodo={setTodo} key={i}/>
    })
  }
  </div>
  </div>


  </>

}

export default TopBar