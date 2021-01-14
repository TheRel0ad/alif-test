import React from 'react'
import Todo from './Todo'

const TodoList = ({ todolist, users }) => {
  
  return (
    <ul className="list-group">
      {
        todolist.map(todo => {
          let user = users.find(user => user.id === todo.userId) 
          return <Todo key={todo.id} todo={todo} user={user}/>
        })
      }
    </ul>
  )
}

export default TodoList