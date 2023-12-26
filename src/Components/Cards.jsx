import React from 'react'
import Edit from './Edit'
function Cards({todo,setTodo,completed,setCompleted}) {
  //Delete
  let Delete=()=>{
    setTodo((prevTodo) => { 
      console.log(prevTodo);
      return prevTodo.filter((item) => item.id !== todo.id)});
  }
  //Edit
  let Edit=()=>{
    console.log(todo.id)
  }
  return <div className="col">
                <div className="card" style={{ width: '18rem' }}>
                    <div className="card-body">
                      <h5 className="card-title">Name:{todo.title}</h5>
                      
                      <p className="card-text">Description:{todo.description}</p>
                      <div className="btn-group">
                      Status &nbsp;   <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          {todo.status?"Completed":"Not Completed"}
                        </button>
                        <ul className="dropdown-menu">
                          <li>Completed</li>
                          <li>Not Completed</li>
                        </ul>
                      </div>
                      
                    </div>
                    <div className="d-flex justify-content-end w-auto">                        
                        <div><button className="btn btn-secondary btn-sm w-auto" onClick={Edit} >Edit</button></div>
                        &nbsp;
                        <div><button className="btn btn-secondary btn-sm w-auto" onClick={Delete}>Delete</button></div>
                       
                        
                    </div>
                  </div>
            </div> 
 
}

export default Cards