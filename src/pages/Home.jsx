import React from 'react'
import Footer from '../components/Footer'
import HomeContent from '../components/HomeContent'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div className='Home'>
        <Navbar />
        <HomeContent />
        <Footer />
    </div>
  )
}
