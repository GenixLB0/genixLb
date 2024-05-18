import React from 'react'
import './Footer.css'
import logo from '../../Images/genixs-logo.png'
import wats from '../../Images/Footer/whatsapp.png'
import facebook from '../../Images/Footer/facebook.png'
import tiktok from '../../Images/Footer/tiktok.png'
import insta from '../../Images/Footer/instagram .png'

export default function Footer() {
    return (
        <div className="FooterContainer">
            <div className='linkscontainer'>
                    <img src={logo} className='img-logo-footer'></img>
                <div className='FooterLink'>
                    <a  href='/'>Home</a>
                    <a href='/our-project'>Our Project</a>
                    <a href='/service'>Services</a>
                    <a href='/about'>About</a>
                    <a href='/team-details'>Team</a>
                </div>
            </div>
            <div className='CopyRightSection'>
                <div className='copyRightInfo'>
                    <p>Copyright © 2024 Genixs, All Rights Reserved.</p>
                </div>
                <div className='socialMediaIcon'>
                    <button><img src={wats} alt='wats'></img></button>
                    <button><img src={insta} alt='insta'></img></button>
                    <button><img src={facebook} alt='faceBook'></img></button>
                    <button><img src={tiktok} alt='faceBook'></img></button>
                </div>
            </div>
        </div>
    )
}





