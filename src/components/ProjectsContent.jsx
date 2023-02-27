import React from 'react';
import projects from '../data/projects';
import { BsGithub } from 'react-icons/bs'

export default function ProjectsContent() {
  return (
    <div className='projectsContent'>
        <div className='projectsList d-flex a-center'>
            <h2>List of mini projects</h2>
            <div className='projects d-flex j-center'>
                {
                    projects.map((project) => (
                        <div className='project'>
                            <a href={project.link} className='d-flex a-center'>
                                <img src={project.img} alt='Project Img' />
                                <h3>{project.name}</h3>
                                <p>{project.technology}</p>
                                <div className='info d-flex a-center'>
                                    <p className={project.status === 'Active' ? 'green' : 'orange'}>{project.status}</p>
                                    <a href={project.gitHub}>
                                        <BsGithub className='icon' aria-placeholder='hi' />
                                    </a>
                                </div>
                            </a>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}
