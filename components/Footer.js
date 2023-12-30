import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons';


const Footer = () => {
    return (
        <>
            <div className='container footerHeight'>
                <div className='alignCenter justify-content-center'>
                    <div className='footerContent text-center'>
                        <p className='font16'>Subscribe for Creative Brilliance: Elevate Your User Experience with a Skilled UI/UX Designer!</p>
                        <div className='d-flex justify-content-center gap-4 flex-wrap my-5 pb-5'>
                            <button className='subscribeBtn'><FontAwesomeIcon icon={faCirclePlay} className='me-3'/>Subscribe Me</button>
                            <button className='hireButton'>Hire Me</button>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-center'>
                    <div className='footerVideo'>
                        <iframe className='videoIntro' src="https://www.youtube.com/embed/wkhVXxU-H9E?si=Pt1N4iJlvG8WCeeO" title="YouTube video player" frameorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;