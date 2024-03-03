/* eslint-disable jsx-a11y/aria-proptypes */
import Image from 'next/image';
import React from 'react';
import logo from "../public/images/logo/visualsage-logo.png";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { animateScroll as scroll } from 'react-scroll';

const menuItems = [
  { id: '#about', label: 'About' },
  { id: '#resume', label: 'Resume' },
  { id: '#service', label: 'Service' },
  { id: '#skills', label: 'Skills' },
  { id: '#portfolio', label: 'Portfolios' },
  { id: '#testimonial', label: 'Testimonial' },
  { id: '#contact', label: 'Contact' },
];

const Header = () => {

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 1000,
      smooth: true,
    });
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ background: "#191919" }}>
        <div className="container">
          <Link href="/"><a className="navbar-brand"><Image src={logo} alt="visualsage-logo" className="navbar-logo" /></a></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link href="#"><a className="nav-link active" aria-current="page" >Home</a></Link>
              </li>
              {menuItems.map(item => (
                <li key={item.id} className="nav-item">
                  <a href={item.id} className="nav-link">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      <button className="gotoTop" onClick={scrollToTop}>
        <FontAwesomeIcon icon={faArrowUp} aria-level="upArrow icon" className='gotoTopIcon' />
      </button>
    </div>
  );
};

export default Header;
