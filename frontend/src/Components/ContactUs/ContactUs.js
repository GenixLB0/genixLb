import React from 'react'
import './ContactUs.css'
import phone from '../../Images/ContactUs/call.png'
import email from '../../Images/ContactUs/mail.png'
import location from '../../Images/ContactUs/location.png'
import ContactForm from './contactForm/ContactForm'
import SubTitle from '../SubTitle/SubTitle'
import Support from '../../Sections/Support/Support'

export default function ContactUs() {
    return (
        // <div className='al-contact'>
            <div className='container-for-all-contact-us-container'>
                <div className='contact-info-container'>
                    <SubTitle subTitle='Contact us' />
                    <h1 className='to-contact-us'> For Further Information Contact Us</h1>
                    <div className='content-info'>
                        <img src={phone}/>
                        <div>
                            <h3>Contact Number</h3>
                            <span>+961 76123456</span>
                        </div>
                    </div>
                    <div className='content-info'>
                        <img src={email}></img>
                        <div>
                            <h3>Our Mail</h3>
                            <span>infoGenix@gemail.com</span>
                        </div>
                    </div>
                    <div className='content-info'>
                        <img src={location}></img>
                        <div>
                            <h3>Our Location</h3>
                            <span>Saida kkkkkk </span>
                        </div>
                    </div>
                </div>
                <div className='bontact-form-container2'>
                    <ContactForm />
                </div>

            </div>

        // </div>

    )
}
