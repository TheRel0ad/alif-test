import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import UserTodoList from '../components/UserTodoList';

const UserTodos = (props) => {
  let { userId } = useParams();

  const [todolist, setTodosList]= useState([])
  const urlTodoList = 'http://jsonplaceholder.typicode.com/todos?_limit=50'

  const [users, setUsers]= useState([])
  const urlUsers = 'http://jsonplaceholder.typicode.com/users?_limit=50'

  useEffect(() => {
    fetch(urlTodoList)
      .then(res => res.json())
      .then(res => {
        setTimeout(() => {
          setTodosList(res)
        })
      })
    
    fetch(urlUsers)
      .then(res => res.json())
      .then(res => {
        setTimeout(() => {
          setUsers(res)
        })
      })
  }, [])

  return(
    <div className="py-5">
      <h1 className='mb-4'>
        {users.length !== 0 && users.find(user => user.id == userId).name}
      </h1>
      <Link to='/' className="btn btn-info mb-5">Назад</Link>

      <hr/>

      { (todolist.length !== 0 && users.length !== 0) && 
        <UserTodoList todolist={todolist} users={users} /> 
      }
    </div>
  )
}

export default UserTodos