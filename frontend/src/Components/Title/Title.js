import React from 'react'
import './Title.css'

export default function Title({title , buttonType}) {
  const buttonClass =
  buttonType === 'title-container'
    ? 'title-container'
    : 'title-od-Second-container2'

  return (
    <div className={buttonClass}>
        <h1>{title}</h1>
    </div>
  )
}
