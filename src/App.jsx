import TodoList from "./components/TodoList"
import TodoInput from "./components/TodoInput"
import { useState } from "react"


function App() {
  const[todos,setTodos]=useState([])

  function handleAddTodos(newTodo){
    const newTodoList=[...todos,newTodo]
    setTodos(newTodoList)
  }

  return (
    // this is called a react "fragment"
    <> 
      <TodoInput handleAddTodos={handleAddTodos}/>
      <TodoList todos={todos}/>
    </>
  )
}

export default App
