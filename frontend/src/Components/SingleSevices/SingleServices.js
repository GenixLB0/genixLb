import React from 'react'
import './SingleServices.css'
import { Link } from 'react-router-dom';
import im1 from '../../Images/videocall.png'
import im2 from '../../Images/software.png'
import im3 from '../../Images/software.png'
const services = [
    {
        icon: im1,
        title: 'Online Documentation',
        description: 'Softewer business it before tab providet Payroll & Worksite Servicesfullfor applica best agency for business solution.',
        href:'/service-details'
    },
    {
        icon: im2,
        title: 'Web Development',
        description: 'Softewer business it before tab providet Payroll & Worksite Servicesfull for applica best agency for business solution.',
        href:'/service-details'

    },
    {
        icon: im3,
        title: 'Web Development',
        description: 'Softewer business it before tab providet Payroll & Worksite Servicesfull for applica best agency for business solution.',
        href:'/service-details'
    },
    {
        icon: im3,
        title: 'Web Development',
        description: 'Softewer business it before tab providet Payroll & Worksite Servicesfull for applica best agency for business solution.',
        href:'/service-details'
    },
    {
        icon: im3,
        title: 'Web Development',
        description: 'Softewer business it before tab providet Payroll & Worksite Servicesfull for applica best agency for business solution.',
        href:'/service-details'
    },
    {
        icon: im3,
        title: 'Web Development',
        description: 'Softewer business it before tab providet Payroll & Worksite Servicesfull for applica best agency for business solution.',
        href:'/service-details'
    },
];

export default function SingleServices() {
    return (
        <div className='singleservices-container'>
            {services.map((service, index) => (
                <div key={index} className="service-card">
                    <div className="icon-background">
                        <img src={service.icon} alt={`Icon for ${service.title}`} />
                    </div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <div className='readMore-container'>
                    <Link className='read-more' to={service.href}>Read More</Link>
                        {/* <img src={arrow} alt='arrow'></img> */}
                    </div>
                </div>
            ))}
        </div>
    );
}

