import React from 'react'
import './Navigation.css'
import { NavLink} from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
      <nav className='nav'>
        <section>Buisiness Name</section>
        <section>
          <ul>
            <li><NavLink className="nav-link" to="/" style={({ isActive }) => ({
                color: isActive ? 'yellow' : 'white'
              })}>Home</NavLink></li>
            <li><NavLink className="nav-link" to="/about" style={({isActive})=>({
              color:isActive ? 'yellow' :'white'
            })}>About us</NavLink></li>
            <li><NavLink className="nav-link" to="/products" style={({isActive})=>({
              color:isActive ? 'yellow' :'white'
            })}>Products</NavLink></li>
            <li><NavLink className="nav-link" to="/contact" style={({isActive})=>({
              color:isActive ? 'yellow' :'white'
            })}>Contact us</NavLink></li>
          </ul>
        </section>
      </nav>
    </div>
  )
}

export default Navigation