import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbar d-flex a-center'>
        <Link to={"/"} className='logo'>
            <h1><span>MC</span>website</h1>
        </Link>
        <div className='pages'>
            <Link className='link' to={"/"}>Home</Link>
            <Link className='link' to={"/"}>Projects</Link>
            <Link className='link' to={"/"}>About Me</Link>
            <Link className='link' to={"/"}>Contacts</Link>
        </div>
    </div>
  )
}
