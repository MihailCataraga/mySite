import React from 'react';
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';
import sites from '../data/SocialNetworks';

export default function ContactsContent() {
  return (
    <div className='contactsContent'>
        <div className='main d-flex a-center'> 
            <img src='/images/avatar.png' alt='Profile img' />
            <div className='contacts'>
                <h2>My Contact List</h2>
                <div className='contactsList d-flex'>
                    <div className='contact d-flex a-center'>
                        <AiOutlinePhone className='icon phone' />
                        <div className='name'>
                            <h4>Phone:</h4>
                            <p>(+373) 69775035</p>
                        </div>
                    </div>
                    <div className='contact d-flex a-center'>
                        <AiOutlineMail className='icon email' />
                        <div className='name'>
                            <h4>Email:</h4>
                            <p>(+373) 69775035</p>
                        </div>
                    </div>
                    {sites.map((site) => (
                        <div className='contact d-flex a-center'>
                            {site.icon}
                            <div className='name'>
                                <h4>{site.name}:</h4>
                                <a href={site.link}>Go To {site.name}</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}
