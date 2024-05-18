import React, { useState } from 'react';
import logo from '../../Images/genixs-logo.png'
import HeaderLink from './HeaderLink/HeaderLink';
import './Header.css';
import MainButton from '../ButtonComponent/MainButton';
import ContactInfo from './ContactInfo/ContactInfo';
import binary from './../../Images/binary-code.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  }
  const handleContactUs = () => {
    navigate('/contact-us')
  }

  return (
    <div className="header-container">
      <div className="logo-container">
        <img src={logo} alt="logo" />
      </div>
      <button
        className={`menu-button ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <img src={binary} alt="Menu" />
      </button>
      <div className={`menu-content ${isMenuOpen ? "open" : ""}`}>
        <div className="closeButton" onClick={closeMenu}>
          <FontAwesomeIcon icon={faTimes} />
        </div>
        <HeaderLink isMenuOpen={isMenuOpen} />
        <ContactInfo isMenuOpen={isMenuOpen} />
        <MainButton
          buttonTitle="Contact Us"
          isMenuOpen={isMenuOpen}
          contact={handleContactUs}
        />
      </div>
    </div>
  );
}
