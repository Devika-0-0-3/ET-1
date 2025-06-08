import React from 'react'
import react from '../assets/react.svg'
import {NavLink,useNavigate} from 'react-router-dom'

const Navbar = () => {
    const navigate=useNavigate()
  return (
    <div className='nav sticky top-0 z-50 '>
      <img src={react} alt='/'></img>
      <ul>
        <NavLink to='/'><li>Home</li></NavLink>
        <NavLink to='/about'><li>About</li></NavLink>
      </ul>
      <button onClick={()=>navigate('/')}>Get Started</button>
    </div>
  )
}

export default Navbar
