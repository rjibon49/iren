import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons';
import { faDribbble, faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';


const Footer = () => {
    return (
        <>
            <div className='container footerHeight'>
                <div className='alignCenter justify-content-center'>
                    <div className='footerContent text-center'>
                        <p className='font16'>Subscribe for Creative Brilliance: Elevate Your User Experience with a Skilled UI/UX Designer!</p>
                        <div className='d-flex justify-content-center gap-4 flex-wrap my-5 pb-5'>
                            <Link href="https://www.youtube.com/@visualsageux"><a><button className='subscribeBtn'><FontAwesomeIcon icon={faCirclePlay} className='me-3'/>Subscribe Me</button></a></Link>
                            <Link href="https://www.upwork.com/freelancers/~013a1545ed7b7f3fad"><a><button className='hireButton'>HIRE ME!</button></a></Link>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-center'>
                    <div className='footerVideo'>
                        <iframe className='videoIntro' src="https://www.youtube.com/embed/wkhVXxU-H9E?si=Pt1N4iJlvG8WCeeO" title="YouTube video player" frameorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                </div>
                <div>
                    <div className='d-flex align-items-center justify-content-evenly iconWidth mt-5 mx-auto'>
                        <Link href="https://www.facebook.com/visualsageux"><a><FontAwesomeIcon icon={faFacebook} className='socialIcon' /></a></Link> 
                        <Link href="https://twitter.com/irenaktar"><a><FontAwesomeIcon icon={faTwitter} className='socialIcon' /></a></Link> 
                        <Link href="https://dribbble.com/irenaktar"><a><FontAwesomeIcon icon={faDribbble} className='socialIcon' /></a></Link> 
                        <Link href="https://www.linkedin.com/in/irenaktar"><a><FontAwesomeIcon icon={faLinkedin} className='socialIcon' /></a></Link> 
                        <Link href="https://www.instagram.com/visualsageux/"><a><FontAwesomeIcon icon={faInstagram} className='socialIcon' /></a></Link> 
                        {/* <Link href="https://www.youtube.com/@visualsage0"><a><FontAwesomeIcon icon={faYoutube} className='socialIcon' /></a></Link>
                        <Link href="https://medium.com/@irenaktar2"><a><FontAwesomeIcon icon={faMedium} className='socialIcon' /></a></Link>  */}
                    </div>`
                </div>
            </div>
        </>
    );
};

export default Footer;