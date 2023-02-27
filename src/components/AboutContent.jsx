import React from 'react';
import { allSkills } from '../data/Skills';
import { AiOutlineDownload } from 'react-icons/ai'
import ProgressBar from "@ramonak/react-progress-bar";



export default function AboutContent() {
  return (
    <div className='aboutContent d-flex'>
      <div className='profile d-flex'>
        <div className='left d-flex a-center'>
          <img src='images/avatar.png' alt='Avatar' />
          <h2>Mihail Cataraga</h2>
          <div className='skills'>
            <h3>My Skills:</h3>
            {allSkills.map((skill) => (
              <div className='skill d-flex a-center' key={skill.name}>
              <div className='d-flex'>
                {skill.logo}
                <p>{skill.name}</p>
              </div>
                <ProgressBar 
                  className='progressBar'
                  completed={skill.lvl} 
                  width='100px' 
                  height='15px' 
                  bgColor='rgb(253, 187, 43)' 
                  baseBgColor='rgb(255, 220, 144)' 
                  labelSize='14px'
                  labelAlignment='center'
                  animateOnRender={true}
                />
              </div>
            ))}
          </div>
        </div>
        <div className='right'>
          <div className='info-me'>
            <h3>Information About Me</h3>
            <div className='infos d-flex'>
              <div className='info d-flex'>
                <h4>Date of birth: </h4>
                <p>05/06/1997;</p>
              </div>
              <div className='info d-flex'>
                <h4>Nationality: </h4>
                <p>Moldovan, Romanian;</p>
              </div>
              <div className='info d-flex'>
                <h4>Phone number: </h4>
                <p>(+373) 69775035;</p>
              </div>
              <div className='info d-flex'>
                <h4>Email: </h4>
                <p>cataraga.95@gmail.com;</p>
              </div>
              <div className='info d-flex'>
                <h4>Address: </h4>
                <p>Socoleni 17, MD2020, Chișinău, Moldova.</p>
              </div>
            </div>
          </div>
          <div className='education'>
            <h3>Education And Training</h3>
            <div className='course'>
                <p>11/2021 - 11/2022 - Online</p>
                <h4>PYTHON DEVELOPMENT<span> - LinkAcademy</span></h4>
                <h4>Website: <a href='https://www.link-academy.com'>https://www.link-academy.com</a></h4>
            </div>
            <div className='course'>
                <p>11/2020 - 11/2021 - Online</p>
                <h4>JAVASCRIPT DEVELOPER<span> - LinkAcademy</span></h4>
                <h4>Website: <a href='https://www.link-academy.com'>https://www.link-academy.com</a></h4>
            </div>
            <div className='course'>
                <p>09/2016 - 05/2020 - Chișinău, Moldova</p>
                <h4>TRANSPORT OPERATING TECHNOLOGIST<span> - Technical University of Moldova</span></h4>
                <h4>Website: <a href='https://utm.md/'>https://utm.md/</a></h4>
            </div>
            <div className='course'>
                <p>09/2004 - 05/2016 - Nisporeni, Moldova</p>
                <h4>HIGH-SCHOOL STUDIES<span> - Seliste Theoretical High School</span></h4>
            </div>
          </div>
          <div className='language'>
            <h3>LANGUAGES</h3>
            <p>Mother tongue: <b>ROMANIAN</b></p>
            <p>Other language(s):</p>
            <table>
              <thead>
                <tr>
                  <th>Language</th>
                  <th>Listening</th>
                  <th>Reading</th>
                  <th>Spoken</th>
                  <th>Writing</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><b>ENGLISH</b></td>
                  <td>A2</td>
                  <td>A2</td>
                  <td>A2</td>
                  <td>A2</td>
                </tr>
                <tr>
                  <td><b>RUSSIAN</b></td>
                  <td>A2</td>
                  <td>A2</td>
                  <td>A2</td>
                  <td>A2</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='driving'>
            <h3>Driving Licence</h3>
            <div className='d-flex'>
              <p>Driving Licence: A2</p>
              <p>Driving Licence: B</p>
              <p>Driving Licence: C1</p>
            </div>
          </div>
        </div>
        <a 
          className='downloadCV d-flex a-center' 
          href="/filles/CV.pdf" 
          download="CV - Mihail Cataraga"
        >
          <AiOutlineDownload className='icon' />
          Download My CV
        </a>
      </div>
    </div>
  )
}
