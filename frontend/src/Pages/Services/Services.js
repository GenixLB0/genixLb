import React from 'react'
import Banner from '../../Components/Banner/Banner'
import SingleServices from '../../Components/SingleSevices/SingleServices'
import './Services.css'
import ServicesReadyToGetStartedBanner from '../../Components/ServicesReadyToGetStartedBanner/ServicesReadyToGetStartedBanner'

export default function Services() {
    return (
        <div>
            <Banner title="Services" image="alt-banner-background" />
            <div className='single-service-container'>
                <SingleServices />
            </div>
            <ServicesReadyToGetStartedBanner/>
        </div>
    )
}
