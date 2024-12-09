import TodoList from "./components/TodoList"
import TodoInput from "./components/TodoInput"


function App() {
  return (
    // this is called a react "fragment"
    <main> 
      <TodoInput />
      <TodoList />
    </main>
  )
}

export default App
