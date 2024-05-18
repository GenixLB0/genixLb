import React, { useRef, useEffect, useState } from 'react';
import SubTitle from '../SubTitle/SubTitle';
import Title from '../Title/Title';
import './HowWorkComponent.css';
import img2 from '../../Images/HowWork/thinking.png';
import img1 from '../../Images/HowWork/round-table.png';
import img3 from '../../Images/HowWork/solution.png';
import img4 from '../../Images/HowWork/people.png';

export default function HowWorkComponent() {
    const steps = [
        { number: '01', description: 'Meet Client', imageSrc: img1 },
        { number: '02', description: 'Brainstorming', imageSrc: img2 },
        { number: '03', description: 'Find the Solution', imageSrc: img3 },
        { number: '04', description: 'Project Done', imageSrc: img4 }
    ];

    const colors = ['#ff8c91', '#42A3D0', '#32CBC8', '#ccccff'];

    const [isVisible, setIsVisible] = useState(false);
    const howWorkRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (howWorkRef.current) {
                const top = howWorkRef.current.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                setIsVisible(top < windowHeight);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    

    return (
        <div ref={howWorkRef} className={`HowWorkWW ${isVisible ? 'fadeInUp' : ''}`}>
            <div className='ww'>
                <SubTitle subTitle='How We Work' />
                <Title title='How We Work' buttonType='title-container'/>
            </div>
            <div className='How-Work_container-Step'>
                {steps.map((step, index) => (
                    <div className='step-container' key={index}>
                        <div className='The-step-number' style={{ color: colors[index] }}>{step.number}</div>
                        <div className={`container-Of-img-and-steps-description ${index === steps.length - 1 ? 'no-border' : 'container-Of-img-and-steps-description'}`}>
                            <div className='div-img-steps' style={{ backgroundColor: colors[index] }}>
                                <img src={step.imageSrc} alt={`Step ${step.number}`} />
                            </div>
                            <div className='description-of-steps'>{step.description}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
