import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faDribbble, faLinkedin, faInstagram, faBehance } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

const socialLinks = [
  { href: "https://www.facebook.com/visualsageux", icon: faFacebook },
  { href: "https://twitter.com/irenaktar", icon: faTwitter },
  { href: "https://dribbble.com/irenaktar", icon: faDribbble },
  { href: "https://www.linkedin.com/in/irenaktar", icon: faLinkedin },
  { href: "https://www.instagram.com/visualsageux/", icon: faInstagram },
  { href: "https://www.behance.net/irenaktar2/", icon: faBehance },
  // Add more social links as needed
];

const SocialIcons = () => {
  return (
    <div className='d-flex align-items-center justify-content-evenly mb-5 mx-auto w-100'>
      {socialLinks.map((link, index) => (
        <Link key={index} href={link.href}>
          <a target='_blank'>
            <FontAwesomeIcon icon={link.icon} className='socialIcon' />
          </a>
        </Link>
      ))}
    </div>
  );
};

export default SocialIcons;
