import React from 'react'
import phone from './../../../Images/touch.png'
import './ContactInfo.css'

export default function ContactInfo({ isMenuOpen, toggleMenu }) {
    return (
        <div className={`container-contactInfo ${isMenuOpen ? 'open2' : 'container-contactInfo'}`}>
            <div className='contactinfo-Title'>
                <h2>Call Us</h2>
                <img src={phone} alt='phone'></img>
            </div>
            <span>+961 123456</span>
        </div>
    )
}
