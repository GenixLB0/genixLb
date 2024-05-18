// import React from 'react'
// import './WhyChooseUs.css'
// import img1 from './../../Images/whyChooseUs/whyChooseUs.jpg'
// import SubTitle from '../SubTitle/SubTitle'
// import img4 from './../../Images/whyChooseUs/about-1.png'
// import img2 from './../../Images/whyChooseUs/about-2.png'
// import img3 from './../../Images/whyChooseUs/about-2 (1).png'
// export default function WhyChooseUs() {


//     const stepsData = [
//         {
//             icon: img4,
//             title: 'Branding Services',
//             description: 'Softewer business it before tab providet Payroll & Worksite Servicesfull for',
//         },
//         {
//             icon: img2,
//             title: 'Branding Services',
//             description: 'Softewer business it before tab providet Payroll & Worksite Servicesfull for',
//         },
//         {
//             icon: img3,
//             title: 'Branding Services',
//             description: 'Softewer business it before tab providet Payroll & Worksite Servicesfull for',
//         },
//     ];
//     const colors = ['#ff8c91', '#42A3D0', '#32CBC8'];
//     return (
//         <div className='container-why-choose-us'>
//             <div>
//                 <SubTitle subTitle='Why Choose Us' />
//                 <h1>Digital Solutions Choose Provide This About.</h1>
//                 <p className='why-choose-us-software'>Softewer being able to crank out videos consistently, localize this them for different regions, and still save resources, time, energy has been a game change</p>
//                 <div className='container-of-choose-us'>
//                     {stepsData.map((step, index) => (
//                         <div className='content-of-choose-us' key={index}>
//                             <div className='bg-container-icon'  style={{ backgroundColor: colors[index] }}>
//                                 <img src={step.icon} alt={`Icon for ${step.title}`} />
//                             </div>
//                             <div className='info-choose-us'>
//                                 <div className='title-choose-us'>
//                                     <h2>{step.title}</h2>
//                                     <span style={{ color: colors[index] }}>Step: {index + 1}</span>
//                                 </div>
//                                 <p>{step.description}</p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             <div className='img-content-why-choose-us'>
//                 <img src={img1} alt='whychooseus' />
//             </div>
//         </div>
//     )
// }
