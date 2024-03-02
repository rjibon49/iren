import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import photo from "../../public/images/content/irenAkterRone.webp";
import subs from "../../public/images/content/subscribeMe.svg";
import bd from "../../public/images/content/BD.svg";
import { faArrowDown, faHome } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import SocialIcons from './Misc/SocialIcons';


const HomeComponent = () => {

    const [scrollPosition, setScrollPosition] = useState(0);

        const [count, setCount] = useState(0);
        const [country, setCountry] = useState(0);

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

        useEffect(() => {
            const intervalId = setInterval(() => {
              setCountry((prevCount) => {
                if (prevCount < 16) {
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
            <div className='container backgroundLogo mt-5 pt-5'>
                <div className='row w-100 homeFlex'>
                    <div className='col-xxl-8 col-xl-7 col-lg-7 col-md-12 col-sm-12 col-xs-12'>
                        <div>
                            {/* <div className='mb-5'>
                                <span className='sectionTitleFont'><FontAwesomeIcon icon={faHome} className='me-4' />introduction</span>
                            </div> */}
                            <div className=''>
                                <h1 className='introFontTitle mb-5'><span className='colorText'><b>Greetings</b></span> form <span className='colorTextPurple'><b>Iren</b></span>, <br /> I am a UX Researcher and Designer.</h1>
                            </div>
                            <div className='d-flex justify-content-between flex-wrap'>
                                
                                <div className=''>
                                    <p className='font16c999 introSubWidth mb-5'>I focus on making digital experiences smooth and easy by studying what users need and coming up with creative design ideas.</p>
                                    <div className=''>
                                        <Link href="https://www.figma.com/file/oOPYKB4RQZLtMgTBw64ITH/Iren-UX-Portfolio?type=design&node-id=0%3A1&mode=design&t=4dO8PF0wtSN10M6v-1"><a className='font16 resumeBtn text-center' target='_blank'>GET MY CV</a></Link>
                                    </div>
                                </div>
                                <div className='subsContainer ms-auto'>
                                    <div className='subsItems'>
                                        <Link href="https://www.youtube.com/@visualsageux"><a className='SubsIcon' target='_blank'><FontAwesomeIcon icon={faArrowDown} className='arrowIcon' /></a></Link>
                                        <Image src={subs} alt='SubscribeMe Button' className='subsImage' />
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex justify-content-between px-5 align-items-center rounded-pill mt-5 py-3' style={{border:"5px solid #242424"}}>
                                <div className='text-center'>
                                    <p className='font48 fw-bold text-white'>2 +</p>
                                    <p className='designationFont mt-1'>Years of Experience</p>
                                </div>
                                <span className='rightBorder'></span>
                                <div className='text-center'>
                                    <p className='font48 fw-bold text-white'>{count} +</p>
                                    <p className='designationFont mt-1'>projects completed</p>
                                </div>
                                <span className='rightBorder'></span>
                                <div className='text-center'>
                                    <p className='font48 fw-bold text-white'>{country} +</p>
                                    <p className='designationFont mt-1'>countries worldwide </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12'>
                        <div className={`profile ${scrollPosition < 9600 ? 'fixed' : ''}`}>
                            <div className='leftCard p-5'>
                                <div className='d-flex justify-content-between align-items-center flex-wrap mb-3 w-100 m-0'>
                                    <p className='nameFont'>IREN</p>
                                    <p className='designationFont'>UX Researcher <br /> & Designer</p>
                                </div>
                                <div className='profilePhoto mb-5'>
                                    <Image src={photo} alt='Iren Akter Rone' className='profileImage' />
                                </div>
                                <div className='text-center mb-5'>
                                    <a href='mailto:"iren@visualsage.xyz'> <h3 className='font24White'>iren@visualsage.xyz</h3></a>
                                    <div className='d-flex justify-content-center align-items-center gap-2'>
                                        <Image src={bd} alt='Bangladesh Flag' className='' />
                                        <h4 className='font18White mt-2'>Bangladesh</h4>
                                    </div>
                                </div>
                                <SocialIcons />
                                <div className='text-center'>
                                    <Link href="https://www.fiverr.com/designerirenn"><a target='_blank'><button className='hireButton'>HIRE ME!</button></a></Link>
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