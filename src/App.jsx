import TodoList from "./components/TodoList"
import TodoInput from "./components/TodoInput"
import { useState } from "react"


function App() {
    const[todos,setTodos]=useState([
    'go to shopping mall',
    'call mom',
    'read a book',
    'water plants'
  ])

  return (
    // this is called a react "fragment"
    <> 
      <TodoInput />
      <TodoList todos={todos}/>
    </>
  )
}

export default App
