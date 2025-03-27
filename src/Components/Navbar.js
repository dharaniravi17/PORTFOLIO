import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{boxShadow: '0 0 10px rgba(1, 1, 1, 0.4)'}}>
      <div className='navbar'>
        <h2 style={{margin:20}}>Portfolio</h2>
        <div className='nav-list'>
        <li><Link to="/"
        style={{ color: 'rgb(104, 192, 255)', textDecoration: 'none' }}>Home</Link></li>
        <li><Link to="/contact"
        style={{ color: 'white', textDecoration: 'none' }}>Contact</Link></li>
        <li><Link to="/skills"
        style={{ color: 'white', textDecoration: 'none'}}>Skills</Link></li>
        <li><Link to="/projects"
        style={{ color: 'white', textDecoration: 'none'}}>Projects</Link></li>
        </div>
      </div>
    </div>
  )
}

export default Navbar