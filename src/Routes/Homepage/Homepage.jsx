import React from 'react'
import './Homepage.css'
import { Link } from 'react-router-dom'


const Homepage = () => {
  return (
    <div className="homepage">
      <img src="/orbital.png" alt="orbit" className='orbital' />
      <div className="left">
        <h1>LAMA AI</h1>
        <h2>SuperCharge jkefnkjnkwjnw</h2>
        <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
           Quod, recusandae ut fugiat placeat quaerat sapiente odit nemo ducimus saepe, veniam officiis at voluptate?
            Labore quasi quas quam dignissimos impedit dicta.
            </h3>
            <Link to='/dashboard'>Get Started</Link>
      </div>
      <div className="right">
        <div className="imgContainer">
          <div className="bgContainer">
            <div className="bg"></div>
          </div>
          <img src="/bot.png" alt="bot" className='botimg'/>
        </div>
      </div>
      <div className='link'>
        <Link to='/'>Terms of Service</Link>
        <Link to='/'>Privacy Policy</Link>
      </div>
    </div>
  )
}

export default Homepage