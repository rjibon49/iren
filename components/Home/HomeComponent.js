import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import photo from "../../public/images/content/irenAkterRone.png";
import { faDribbble, faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const HomeComponent = () => {
        const [count, setCount] = useState(0);
      
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
            <div className='container compoHeightLarge backgroundLogo alignCenter'>
                <div className='row w-100'>
                    <div className='col-xxl-5 col-xl-5 col-lg-5 col-md-12 col-sm-12 col-xs-12'>
                        <div className=''>
                            <div className='leftCard p-5'>
                                <div className='d-flex justify-content-between align-items-center flex-wrap mb-3'>
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
                                <div className='d-flex align-items-center justify-content-around mb-5'>
                                    <FontAwesomeIcon icon={faTwitter} className='socialIcon' />
                                    <FontAwesomeIcon icon={faDribbble} className='socialIcon' />
                                    <FontAwesomeIcon icon={faInstagram} className='socialIcon' />
                                    <FontAwesomeIcon icon={faFacebook} className='socialIcon' />
                                    <FontAwesomeIcon icon={faLinkedin} className='socialIcon' />
                                </div>
                                <div className='text-center'>
                                    <button className='hireButton'>HIRE ME!</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-xxl-7 col-xl-7 col-lg-7 col-md-12 col-sm-12 col-xs-12'>
                        <div>
                            <div className='mb-5'>
                                <span className='sectionTitleFont'><FontAwesomeIcon icon={faHome} className='me-4' />introduction</span>
                            </div>
                            <div className=''>
                                <h1 className='introFontTitle mb-5'>Hi from <span className='colorText'>IREN</span>, <br />UX Researcher and <br />Designer</h1>
                                <p className='font16c999 introSubWidth mb-5'>I focus on making digital experiences smooth and easy by studying what users need and coming up with creative design ideas.</p>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <div className='w-50'>
                                    <div className='mb-5 pb-5'>
                                        <Link href="#"><a className='font16 resumeBtn text-center'>MY RESUME</a></Link>
                                    </div>
                                    <div className='d-flex justify-content-between'>
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
                                    <div className="subscribe-button">
                                        <span className="icon">
                                            <i className="fa fa-arrow-right"></i>
                                        </span>
                                        <span className="text">Subscribe Me</span>
                                    </div>
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