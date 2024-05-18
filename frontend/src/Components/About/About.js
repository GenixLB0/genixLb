import React from 'react'
import SubTitle from '../SubTitle/SubTitle'
import './About.css'
import robot from '../../Images/Robot/about.png'

export default function About() {
  return (
    <div className='about-container'>
        {/* <div className='ring'><img src={ring}></img></div> */}
        <div className='about-content-gg'>
            <SubTitle subTitle='About Us'/>
            <h1>Complete Managing About Software Business</h1>
            <p>Softewer being able to crank out videos consistently, localize this them for different regions, and still save resources, time, energy has been a game change</p>
        </div>
        <div className='about-robot-img'>
            <img src={robot} alt='ff' className='about-robot-img-ff'></img>
        </div>
    </div>
  )
}
