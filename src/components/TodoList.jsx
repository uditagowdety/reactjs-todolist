import React from 'react'

export default function TodoList() {
    let todos=[
        'go to shopping mall',
        'call mom',
        'read a book',
        'water plants'
    ]
    
  return (
    <ul>
        {todos.map((todo,todoIndex)=>{
            return (
                <li key={todoIndex}>{todo}</li>
            )
        })}
    </ul>
  )
}
