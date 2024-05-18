import React from 'react';
import './HeaderLink.css';
import { Link, useLocation } from 'react-router-dom'; // Import Link and useLocation from react-router-dom

export default function HeaderLink({ isMenuOpen, toggleMenu }) {
    const location = useLocation();

    return (
        <div className={`Container-Header-link ${isMenuOpen ? 'open' : ''}`}>
            <ul className='list-header-link'>
                <li><Link className={`list-header-link-a ${location.pathname === '/' ? 'active' : ''}`} to='/'>Home</Link></li>
                <li><Link className={`list-header-link-a ${location.pathname === '/our-project' ? 'active' : ''}`} to='/our-project'>Our Project</Link></li>
                <li><Link className={`list-header-link-a ${location.pathname === '/team-details' ? 'active' : ''}`} to='/team-details'>Team</Link></li>
                <li><Link className={`list-header-link-a ${location.pathname === '/service' ? 'active' : ''}`} to='/service'>Services</Link></li>
                <li><Link className={`list-header-link-a ${location.pathname === '/about' ? 'active' : ''}`} to='/about'>About</Link></li>
            </ul>
        </div>
    );
}
