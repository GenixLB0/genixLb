import React from 'react'
import './SupportCard.css'
import im1 from '../../Images/Support/counter-1.png'
import im2 from '../../Images/Support/counter-2.png'
import im3 from '../../Images/Support/counter-3.png'
import im4 from '../../Images/Support/counter-4.png'
const card = [
    {
        icon: im1,
        title: '100K+',
        description: 'Happy Client',
    },
    {
        icon: im2,
        title: '322K',
        description: 'Customer Rating',
    },
    {
        icon: im3,
        title: '79K+',
        description: 'Project Deliverd',
    },
    {
        icon: im4,
        title: '160',
        description: 'Award',
    },

];

export default function SupportCard() {
    return (
        <div className='SupportCard-container'>
            {card.map((service, index) => (
                <div key={index} className="support-card">
                    <div className="icon-background-card">
                        <img src={service.icon} alt={`Icon for ${service.title}`} />
                    </div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                </div>
            ))}
        </div>
    );
}

