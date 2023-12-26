import React, { useState } from 'react'
import TopBar from './Components/TopBar'
import Cards from './Components/Cards'

function App() {
  let [todo,setTodo]=useState([
    {
    id:1,
    title:" Office Task-1",
    description:"this is the description for my first task",
    status:false

  },
  {
    id:2,
    title:" Office Task-2",
    description:"this is the description for my second task",
    status:false
    
  },
  {
    id:3,
    title:" Office Task-3",
    description:"this is the description for my third task",
    status:false
    
  }
])
let [completed,setCompleted]=useState("All")
  return <>
  <TopBar todo={todo} setTodo={setTodo} completed={completed} setCompleted={setCompleted}/>
  </>
}

export default App