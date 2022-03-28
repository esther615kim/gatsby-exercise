import { Link } from 'gatsby'
import React from 'react'

export const Navbar = () => {
  return (
    <nav>
        <h4>Logo</h4>
        <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
    </nav>
  )
}
