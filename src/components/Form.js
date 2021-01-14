import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { addTodo, addUser } from '../actions'

export const Form = () => {
  const [title, setTitle] = useState('') 
  const [user, setUser] = useState('')
  const [alertDanger, setAlertDanger] = useState(false)
  const [alertSuccess, setAlertSuccess] = useState(false)
  
  const dispatch = useDispatch()

  const hashCode = (s) => {
    return s.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);              
  }

  async function addNewTodo(e) {
    e.preventDefault()
    const newTodo = {
      userId: hashCode(user),
      id: hashCode(new Date().toString()),
      title: title,
      completed: false
    }
    const newUser = {
      id: hashCode(user),
      name: user
    }

    if (title.trim !== '' && user.trim() !== '') {
      dispatch( addTodo(newTodo) )
      dispatch( addUser(newUser) )
      
      setTitle('')
      setUser('')

      setAlertSuccess(true)
      setTimeout(() => {
        setAlertSuccess(false)
      }, 2000);
    } else {
      setAlertDanger(true)
      setTimeout(() => {
        setAlertDanger(false)
      }, 2000);
    }
  }

  return (
    <form className='mb-5' onSubmit={addNewTodo}>
      <div className='form-group'>
        <input 
          type='text'
          className='form-control'
          placeholder='Новая заметка'
          onChange={e => setTitle(e.target.value)}
          value={title}
        />
        <input 
          type='text'
          className='form-control mt-3'
          placeholder='Пользователь'
          onChange={e => setUser(e.target.value)}
          value={user}
        />
        
        <div className='d-flex justify-content-between align-items-center my-3 h-40'>
          <input type="submit" value="Добавить" className="btn btn-primary"/>
          {alertDanger &&
            <div class="alert alert-danger fade show" role="alert">
              Заполните пожалуйста все поля!
            </div>
          }
          {alertSuccess &&
            <div class="alert alert-success fade show" role="alert">
              Заметка успешно добавлена!
            </div>
          }
        </div>

      </div>
    </form>
  )
} 