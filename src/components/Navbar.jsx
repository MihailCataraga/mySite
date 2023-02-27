import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu } from "react-icons/hi";
import { VscChromeClose } from "react-icons/vsc"

export default function Navbar() {
  const [menuList, setMenuList] = useState(false)
  return (
    <div 
      className='navbar d-flex a-center'
      onMouseLeave={() => setMenuList(false)}
    >
        <Link to={"/"} className='logo'>
            <h1><span>MC</span>website</h1>
        </Link>
        <div className='pages d-flex'>
          <Link className='link' to={"/"}>Home</Link>
          <Link className='link' to={"/projects"}>Projects</Link>
          <Link className='link' to={"/about"}>About Me</Link>
          <Link className='link' to={"/contacts"}>Contacts</Link>
        </div>
        <div className='menu' onClick={() => setMenuList(!menuList)}> 
          {menuList ? <VscChromeClose className='menuLogo' /> : <HiMenu className='menuLogo' />}
        </div>
        {menuList && <div 
                        className='menuList d-flex' 
                        onMouseLeave={() => setMenuList(false)}
                      >
          <Link className='link' to={"/"}>Home</Link>
          <Link className='link' to={"/projects"}>Projects</Link>
          <Link className='link' to={"/about"}>About Me</Link>
          <Link className='link' to={"/contacts"}>Contacts</Link>
        </div>}
    </div>
  )
}
