import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { changeTodoState, removeTodos } from '../actions'

const Todo = ({todo, user}) => {
  const dispatch = useDispatch()

  return (
    <li key={todo.id} className="list-group-item todo" aria-current="true">

      <div>
        <div className="todo__completed" onClick={() => dispatch( changeTodoState(todo.id) )} >
          {
            todo.completed ? 
              <span className='text-success'>
                Завершено 
              </span>
            : 
              <span className='text-warning'>
                Незавершено 
              </span>
          }
        </div>

        <Link to={`/users/${todo.userId}`} className='todo__user'>
          {user.name!=='undefined' &&
            user.name 
          } 
        </Link>

        <Link to={`/todo/${todo.id}`} className='todo__title'>
          {todo.title}
        </Link>
      </div>

      <button 
        type="button" 
        className="btn btn-sm btn-danger"
        onClick={ () => dispatch( removeTodos(todo.id) ) }
      >
        &times;
      </button>

    </li>
  )
}

export default Todo