import React, { useEffect, useRef, useState } from 'react';
import './RobotE.css'
import mini from '../../Images/Robot/ai.png'
import im1 from '../../Images/Robot/download.png'
import im2 from '../../Images/Robot/download.png'
import im3 from '../../Images/Robot/download.png'
import im4 from '../../Images/Robot/download.png'
import Title from '../Title/Title'
import SubTitle from '../SubTitle/SubTitle'

export default function RobotE() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    const dumyData = [
        {
            "id": 1,
            "description": "Description 1",
            "image": im1
        },
        {
            "id": 2,
            "description": "Description 2",
            "image": im2
        },
        {
            "id": 3,
            "description": "Description 3",
            "image": im3
        },
        {
            "id": 4,
            "description": "Description 4",
            "image": im4
        },
    ]

    useEffect(() => {
        if (sectionRef.current) {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setIsVisible(true);
                        }
                    });
                },
                { threshold: 0.2 } 
            );

            observer.observe(sectionRef.current);

            return () => observer.disconnect();
        }
    }, [sectionRef]);

    return (
        <div className='Chatbot-Container' ref={sectionRef}>
            <div className='container-Ecommerce-robots'>
                <div className='title-sub-container-project'>
                    <SubTitle subTitle='Custom Requirements' />
                    <Title title='Customize your own Robot' />
                </div>
                <div className='container-dumy-data'>
                    {dumyData.map((item, index) => (
                        <div key={index} className='Chatbot-Item'>
                            <img src={item.image} alt='FAQ Icon' />
                            <div className='description-robot-section'>{item.description}</div>
                            <button>Book Now</button>
                        </div>
                    ))}
                </div>
            </div>

            <div className={`chatBot-img ${isVisible ? 'animate2' : ''}`}>
                <img src={mini} alt='AI Robot' />
            </div>
        </div>
    )
}
