import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import photo from "../../public/images/content/irenAkterRone.png";
import { faDribbble, faFacebook, faInstagram, faLinkedin, faMedium, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
// import SubscribeAnimation from './Misc/SubscribeAnimation';


const HomeComponent = () => {

    const [scrollPosition, setScrollPosition] = useState(0);

        const [count, setCount] = useState(0);

         // Update the scroll position on scroll
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        // Attach the scroll event listener when the component mounts
        useEffect(() => {
            window.addEventListener('scroll', handleScroll);

            // Remove the event listener when the component unmounts
            return () => {
            window.removeEventListener('scroll', handleScroll);
            };
        }, []);

        const str = "SUBSCRIBE ME - SUBSCRIBE ME -";
      
        useEffect(() => {
            const intervalId = setInterval(() => {
              setCount((prevCount) => {
                if (prevCount < 35) {
                  return prevCount + 1;
                } else {
                  clearInterval(intervalId);
                  return prevCount;
                }
              });
            }, 100);
        
            // Cleanup function to clear the interval when the component unmounts
            return () => clearInterval(intervalId);
          }, []);

    return (
        <>
            <div className='container compoHeightLarge backgroundLogo alignCenter mt-5'>
                <div className='row w-100 mt-5'>
                    <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12'>
                        <div className={`profile ${scrollPosition < 10700 ? 'fixed' : ''}`}>
                            <div className='leftCard p-5'>
                                <div className='d-flex justify-content-between align-items-center flex-wrap mb-3 w-100 m-0'>
                                    <p className='nameFont'>IREN</p>
                                    <p className='designationFont'>UX Researcher <br /> & Designer</p>
                                </div>
                                <div className='profilePhoto mb-5'>
                                    <Image src={photo} alt='Iren Akter Rone' className='' />
                                </div>
                                <div className='text-center mb-5'>
                                    <a href='mailto:"iren@visualsage.xyz'> <h3 className='font24White'>iren@visualsage.xyz</h3></a>
                                    <h4 className='locationFont'>Bangladesh</h4>
                                </div>
                                <div className='d-flex align-items-center justify-content-around mb-5 w-100 m-0'>
                                     <Link href="https://www.facebook.com/visualsage0"><a><FontAwesomeIcon icon={faFacebook} className='socialIcon' /></a></Link> 
                                     <Link href="https://twitter.com/irenaktar"><a><FontAwesomeIcon icon={faTwitter} className='socialIcon' /></a></Link> 
                                     <Link href="https://dribbble.com/irenaktar"><a><FontAwesomeIcon icon={faDribbble} className='socialIcon' /></a></Link> 
                                     <Link href="https://www.linkedin.com/in/irenaktar"><a><FontAwesomeIcon icon={faLinkedin} className='socialIcon' /></a></Link> 
                                     <Link href="https://www.instagram.com/visualsage0/"><a><FontAwesomeIcon icon={faInstagram} className='socialIcon' /></a></Link> 
                                     <Link href="https://www.youtube.com/@visualsage0"><a><FontAwesomeIcon icon={faYoutube} className='socialIcon' /></a></Link> 
                                     <Link href="https://medium.com/@irenaktar2"><a><FontAwesomeIcon icon={faMedium} className='socialIcon' /></a></Link> 
                                </div>
                                <div className='text-center'>
                                    <Link href="https://www.upwork.com/freelancers/~013a1545ed7b7f3fad"><a><button className='hireButton'>HIRE ME!</button></a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-xxl-7 col-xl-7 col-lg-7 col-md-12 col-sm-12 col-xs-12 ms-auto'>
                        <div>
                            <div className='mb-5'>
                                <span className='sectionTitleFont'><FontAwesomeIcon icon={faHome} className='me-4' />introduction</span>
                            </div>
                            <div className=''>
                                <h1 className='introFontTitle mb-5'>Hi from <span className='colorText'>IREN</span>, <br />UX Researcher and <br />Designer</h1>
                                <p className='font16c999 introSubWidth mb-5'>I focus on making digital experiences smooth and easy by studying what users need and coming up with creative design ideas.</p>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <div className='counterWidth'>
                                    <div className='mb-5 pb-5'>
                                        <Link href="https://www.figma.com/file/oOPYKB4RQZLtMgTBw64ITH/Iren-UX-Portfolio?type=design&node-id=0%3A1&mode=design&t=4dO8PF0wtSN10M6v-1"><a className='font16 resumeBtn text-center'>MY RESUME</a></Link>
                                    </div>
                                    <div className='d-flex justify-content-around'>
                                        <div className=''>
                                            <p className='font72 colorText mb-5'>1+</p>
                                            <p className='designationFont'>Years of <br />Experience</p>
                                        </div>
                                        <div>
                                            <p className='font72 colorText mb-5'>{count}+</p>
                                            <p className='designationFont'>projects completed <br /> on 16 countries</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    {/* <p className="" id='text'>
                                        <SubscribeAnimation text={str} />
                                    </p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeComponent;