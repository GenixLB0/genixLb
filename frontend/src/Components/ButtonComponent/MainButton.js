import React from 'react'
import './ButtonComponent.css'


export default function MainButton({buttonTitle , isMenuOpen , contact}) {
  return (
    <div className={`MainButton-container ${isMenuOpen ? 'open3' : 'MainButton-container'}`}>
        <button onClick={contact}>{buttonTitle}</button>
    </div>
  )
}
