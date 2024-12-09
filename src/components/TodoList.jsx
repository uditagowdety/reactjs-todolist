import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList() {
    let todos=[
        'go to shopping mall',
        'call mom',
        'read a book',
        'water plants'
    ]
    
  return (
    <ul className='main'>
        {todos.map((todo,todoIndex)=>{
            return (
                <TodoCard key={todoIndex}>
                    <p>
                        {todo}
                    </p>
                </TodoCard>
            )
        })}
    </ul>
  )
}
