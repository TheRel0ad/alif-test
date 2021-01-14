import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { changeTodoTitle } from '../actions'

const TodoEdit = (props) => {
  const dispatch = useDispatch()
  let { todoId } = useParams()
  todoId = parseInt(todoId)
  let todos = useSelector(state => state.axiosTodos)
  
  let startValue = ''
  
  if (todos.length) {
    startValue = todos.find(todo => todo.id === todoId).title
  }
  
  const [value, setValue] = useState(startValue)

  function saveText(e) {
    e.preventDefault()

    const todoText = {
      title: value,
      id: todoId
    }

    dispatch( changeTodoTitle(todoText) )
  }

  return(
    <div className="py-5">
      <h1 className='mb-4'>
        Изменить заметку
      </h1>
      <Link to='/' className="btn btn-info mb-5">Назад</Link>

      <hr/>

      <form onSubmit={saveText}>
        <textarea 
          className="form-control textarea" 
          onChange={e => setValue(e.target.value)} 
          value={value} 
          name="" 
          id="" 
          cols="30" 
          rows="10">
        </textarea>
      
        <button to='/' type='submit' className="btn btn-info mt-5">Сохранить</button>
      </form>
    </div>
    
  )
}

export default TodoEdit