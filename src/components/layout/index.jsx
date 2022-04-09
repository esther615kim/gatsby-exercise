import React from 'react'
import { Footer } from './Footer'
import { Navbar } from './Navbar'

export const Layout = ({children}) => {
  return (
    <div>
        <Navbar/>
        <div>
          {children}
          </div>
        <div>
          I'm a footer
        </div>
    </div>
  )
}
