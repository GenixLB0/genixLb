import React from 'react'
import './SubTitle.css'

export default function SubTitle({subTitle}) {
  return (
    <div className='section-heading'>
        <h1 className='sub-heading'>{subTitle}</h1>
    </div>
  )
}
