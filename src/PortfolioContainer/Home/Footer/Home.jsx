import React from 'react'
import Profile from '../Profile/Profile'
import Footer from './Footer'
import './Home.css'

function Home() {
  return (
    <div className='home-container' id='home'>
        <Profile/>
        <Footer/>
    </div>
  )
}

export default Home