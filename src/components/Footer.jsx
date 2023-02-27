import React from 'react';
import { Link } from 'react-router-dom';
import sites from '../data/SocialNetworks';

export default function Footer() {
  return (
    <div className='footer d-flex a-center'>
        <div className='info d-flex a-center'>
            <div className='list d-flex'>
                <h3>Navigate To:</h3>
                <Link className='link' to={'/'}>Home</Link>
                <Link className='link' to={'/projects'}>Projects</Link>
                <Link className='link' to={'/about'}>About Me</Link>
                <Link className='link' to={'/contacts'}>Contacts</Link>
            </div>
            <div className='social-networks d-flex'>
                {
                    sites.map((site) => (
                        <div className='site' key={site.name}>
                            <a href={site.link}>{site.icon}</a>
                        </div>
                    ))
                }
            </div>
        </div>
        <p>Copyright &copy; 2023 <Link to='/' className='link'>MC</Link> Company. All rights reserved.</p>
    </div>
  )
}
