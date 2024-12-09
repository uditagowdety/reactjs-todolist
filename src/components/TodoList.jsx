import React from 'react'

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
                <li className='todoItem' key={todoIndex}>
                    {todo}
                    <i class="fa-regular fa-pen-to-square"></i>
                </li>
            )
        })}
    </ul>
  )
}
