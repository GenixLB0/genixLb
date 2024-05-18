import React from 'react'
import './ButtonComponent.css'


export default function Secondary({buttonTitle , contact}) {
  return (
    <div className='secondary-container'>
        <button onClick={contact}>{buttonTitle}</button>
    </div>
  )
}
