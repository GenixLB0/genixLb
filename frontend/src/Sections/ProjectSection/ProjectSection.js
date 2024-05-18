import React from 'react'
import Project from '../../Components/Project/Project'
import SubTitle from '../../Components/SubTitle/SubTitle'
import Title from '../../Components/Title/Title'
import  './ProjectSection.css'

export default function ProjectSection() {
  return (
    <div className='project-section-container'>
      <div className='title-sub-container-project'>
        <SubTitle subTitle='OUR PROJECTS'/>
        <Title title='Work Gallery Recent Projects'/>
      </div>
        <Project/>
    </div>
  )
}
