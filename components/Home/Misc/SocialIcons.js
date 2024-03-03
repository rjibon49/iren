import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faDribbble, faLinkedin, faInstagram, faBehance } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

const socialLinks = [
  { href: "https://www.facebook.com/visualsageux", icon: faFacebook, label: 'Facebook' },
  { href: "https://twitter.com/irenaktar", icon: faTwitter, label: 'Twitter' },
  { href: "https://dribbble.com/irenaktar", icon: faDribbble, label: 'Dribbble' },
  { href: "https://www.linkedin.com/in/irenaktar", icon: faLinkedin, label: 'LinkedIn' },
  { href: "https://www.instagram.com/visualsageux/", icon: faInstagram, label: 'Instagram' },
  { href: "https://www.behance.net/irenaktar2/", icon: faBehance, label: 'Behance' },
  // Add more social links as needed
];

const SocialIcons = () => {
  return (
    <div className='d-flex align-items-center justify-content-evenly mb-5 mx-auto w-100'>
      {socialLinks.map((link, index) => (
        <Link key={index} href={link.href}>
          <a target='_blank' aria-label={link.label}>
            <FontAwesomeIcon icon={link.icon} className='socialIcon' />
          </a>
        </Link>
      ))}
    </div>
  );
};

export default SocialIcons;