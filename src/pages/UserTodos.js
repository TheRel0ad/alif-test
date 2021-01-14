import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import UserTodoList from '../components/UserTodoList';

const UserTodos = (props) => {
  let { userId } = useParams();
  
  let todos = useSelector(state => state.axiosTodos)
  let users = useSelector(state => state.axiosUsers)
  
  todos = todos.filter(todo => todo.userId == userId)

  return(
    <div className="py-5">
      <h1 className='mb-4'>
        {users.find(user => user.id == userId) && 
          users.find(user => user.id == userId).name
        }
      </h1>
      <Link to='/' className="btn btn-info mb-5">Назад</Link>

      <hr/>

      { (todos.length !== 0 && users.length !== 0) && 
        <UserTodoList todolist={todos} users={users} /> 
      }
    </div>
  )
}

export default UserTodos