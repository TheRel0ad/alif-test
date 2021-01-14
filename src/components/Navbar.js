import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link to='/' className='navbar-brand'>Alif test</Link>
      </div>
    </nav>
  )
}

export default Navbar