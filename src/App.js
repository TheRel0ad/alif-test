import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { fetchTodos, fetchUsers } from './actions'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import UserTodos from './pages/UserTodos'

function App() {
  const dispatch = useDispatch()
  
  useEffect(() => {
    fetch('http://jsonplaceholder.typicode.com/todos/?_limit=50')
      .then(res => res.json())
      .then(res => {
        dispatch( fetchTodos(res) )
      })
    fetch('http://jsonplaceholder.typicode.com/users/')
      .then(res => res.json())
      .then(res => {
        dispatch( fetchUsers(res) )
      })
  }, []);

  return (
    <Router>
      <Navbar />
      <div className="container mt-5">
        <Switch>
          <Route path="/users/:userId">
            <UserTodos />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App
