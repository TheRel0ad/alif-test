import React from 'react'
import { Link, Switch, Route, useRouteMatch, useParams } from 'react-router-dom'

const UserTodoList = ({ todolist }) => {
  
  return (
    <ul className="list-group">
      {
        todolist.map(todo => (
          <li key={todo.id} className="list-group-item todo" aria-current="true">

            <div>
              {
                todo.completed ? 
                  <span className='todo__completed text-success'>
                    Завершено 
                  </span>
                : 
                  <span className='todo__completed text-warning'>
                    Незавершено 
                  </span>
              }

              <Link to={`/todo/${todo.id}`} className='todo__title'>
                {todo.title}
              </Link>
            </div>

            <button type="button" className="btn btn-sm btn-danger">&times;</button>

          </li>
        ))
      }
    </ul>
  )
}

export default UserTodoList