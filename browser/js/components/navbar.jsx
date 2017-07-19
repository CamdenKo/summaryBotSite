import { Link } from 'react-router-dom'
import React from 'react'

export default function Navbar(){
  return(
    <nav className = 'navbar'>
      <div className = 'navbar-brand'>
        <Link className = 'navbar-item' to = '/'>
          Home
        </Link>
      </div>
    </nav>
  )
}
