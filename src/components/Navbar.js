import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';

const Navbar = () => {
  let todos = useSelector(state => state.axiosTodos)

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link to='/' className='navbar-brand'>Alif test</Link>
        <h2>{todos.length && todos.length}</h2>
      </div>
    </nav>
  )
}

export default Navbar