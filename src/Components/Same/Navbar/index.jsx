import React from 'react'
import Navstyle from './navbar.module.css'
import {Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className={Navstyle.container}>
    <div className={Navstyle.title}>
        <p className={Navstyle.icon}><i class="fa-brands fa-github"></i></p>
    <h1>Github Finder</h1>
  </div>
  <div>
    
    <ul className={Navstyle.navitems}>
        <li>
            <Link to='/home' className={Navstyle.link}>Home</Link>
        </li>
        <li>
            <Link to='/users' className={Navstyle.link}>Users</Link>
        </li>
    </ul>
  </div>
    </div>
    
  </>
    
  )
}

export default Navbar
