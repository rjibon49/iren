import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import mehrab from "../../public/images/content/mehrabHossain.png";
import jibon from "../../public/images/content/raihanHossain.png";

const TeamComponent = () => {
    return (
        <>
            <div className='container aboutHeight alignCenter' id=''>
                <div className='row w-100 justify-content-end'>
                    <div className='col-xxl-7 col-xl-7 col-lg-7 col-md-12 col-sm-12 col-xs-12'>
                        <div>
                            <div className='mb-5'>
                                <span className='sectionTitleFont'><FontAwesomeIcon icon={faUsers} className='me-4'/>MY TEAM</span>
                            </div>
                            <div className=''>
                                <h1 className='font48 mb-3'>Meet My Professional <span className='colorText'>Team</span></h1>
                                <p className='font20White mb-5 pe-5'>Our guiding principle is straightforward: assemble a team of diverse and passionate individuals, cultivating a culture that empowers each member to deliver their utmost excellence in work.</p>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center gap-4 flex-wrap'>
                            <div className='teamBorder'>
                                <div className='teamImageBody'>
                                    <div className='text-center'>
                                        <Image src={mehrab} alt='Mahrab Hossain' className='memberImage' />
                                        <h4 className='font20E6'>Mehrab Hossain</h4>
                                        <p className='designationFont'>SEO & Digital Mkt</p>
                                    </div>
                                </div>
                            </div>
                            <div className='teamBorder'>
                                <div className='teamImageBody'>
                                    <div className='text-center'>
                                        <Image src={jibon} alt='Raihan Hossain' className='memberImage' />
                                        <h4 className='font20E6'>Md. Raihan Hossain</h4>
                                        <p className='designationFont'>Front-end Developer</p>
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

export default TeamComponent;