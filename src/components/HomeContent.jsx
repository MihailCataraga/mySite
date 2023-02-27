import React from 'react';
import { Link } from 'react-router-dom';
import mainSkills from '../data/Skills'

export default function HomeContent() {
  return (
    <div className='homeContent'>
        <div className='intro d-flex a-center j-center'>
            <div className='presentation d-flex a-center'>
                <h1>Hi, Welcome To My Website!</h1>
                <p>I am <span>Mihail Cataraga</span> and this is my website.</p>
                <p> Here you will find out many things about me.</p>
                <Link className='link' to={'/about'}>Go to my CV</Link>
            </div>
            <img src='/images/avatar.png' width={'400px'} alt='Profile img' />
        </div>
        <div className='skills-list d-flex a-center'>
          <h2>Front-End Skills</h2>
          <div className='skills d-flex j-center'>
            {mainSkills.map((skill) => (
              <div className='skill d-flex a-center' key={skill.name}>
                <div className='logo-box'> 
                  {skill.logo}
                </div>
                <h3>
                  {skill.name}
                </h3>
              </div>
            ))}
          </div>
          <Link className='link' to={'/about'}>More Info...</Link>
        </div>
    </div>
  )
}
