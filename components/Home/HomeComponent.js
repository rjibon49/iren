import Image from 'next/image';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import photo from "../../public/images/content/irenAkterRone.png";
import { faDribbble, faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const HomeComponent = () => {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12'>
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
                                    <a href='mailto:"iren@visualsage.xyz'> <h3 className='mailFont'>iren@visualsage.xyz</h3></a>
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
                    <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12'>

                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeComponent;