import React from 'react'
import HeroSection from '../../Sections/HeroSection/HeroSection'
import Services from '../../Sections/Services/Services'
import Support from '../../Sections/Support/Support'
// import WhyChooseUss from '../../Sections/WhyChooseUss/WhyChooseUss'
import RobotSection from '../../Sections/RobotSection/RobotSection'
import AboutSection from '../../Sections/AboutSection/AboutSection'
import HowWork from '../../Sections/HowWeWork/HowWork'
import FAQ from '../../Sections/FAQSection/FAQ'
import ProjectSection from '../../Sections/ProjectSection/ProjectSection'
import FiqerSection from '../../Sections/FiqerSection/FiqerSection'
import RobotEcommerce from '../../Sections/RobotEcommerce/RobotEcommerce'
import ContactSection from '../../Sections/ContactUsSection/ContactSection'
import ScrollTop from '../../Components/Scroll/scrollToTop'

export default function Home() {
    return (
        <div>
            <HeroSection />
            <Support />
            <AboutSection />
            <Services />
            <HowWork />
            <ScrollTop/>
            <ProjectSection />
            <RobotSection />
            <RobotEcommerce />
            <FiqerSection />
            <ContactSection />
            <FAQ />
        </div>
    )
}
