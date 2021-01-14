import React, { useState, useEffect } from 'react'
import { Form } from '../components/Form'
import TodoList from '../components/TodoList'

const Home = () => {
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

  return (
    <div className="py-5">
      <Form />

      <hr/>

      { (todolist.length !== 0 && users.length !== 0) && 
        <TodoList todolist={todolist} users={users} /> 
      }
    </div>
  )
} 

export default Home