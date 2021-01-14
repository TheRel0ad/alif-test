import React from 'react'
import { Form } from '../components/Form'
import { useSelector } from 'react-redux'
import TodoList from '../components/TodoList'

function Home() {
  const todos = useSelector(state => state.axiosTodos)
  const users = useSelector(state => state.axiosUsers)

  return (
    <div className="py-5">
      <Form />

      <hr/>

      { (todos.length !== 0 && users.length !== 0) && 
        <TodoList todolist={todos} users={users} /> 
      }
    </div>
  )
} 

export default Home