import Image from 'next/image';
import React, { useState } from 'react';
import logo from "../public/images/logo/visualsage-logo.png";

const Header = () => {

    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
      };

    return (
        <div>
            <nav className="navbar">
                <div className='logoBg'>
                    <Image src={logo} alt="visualsage-logo" className="navbar-logo" />
                </div>
                <div className="navbar-toggle" onClick={toggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                <ul className={`navbar-menu ${showMenu ? 'show' : ''}`}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;