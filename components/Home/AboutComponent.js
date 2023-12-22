/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const AboutComponent = () => {
    return (
        <>
            <div className='container aboutHeight alignCenter' id='about'>
                <div className='row w-100 justify-content-end'>
                    <div className='col-xxl-7 col-xl-7 col-lg-7 col-md-12 col-sm-12 col-xs-12'>
                        <div>
                            <div className='mb-5'>
                                <span className='sectionTitleFont'><FontAwesomeIcon icon={faUser} className='me-4'/>ABOUT</span>
                            </div>
                            <div className=''>
                                <h1 className='font48 mb-5'>Every great design begin with an even <span className='font48Color'>better story</span></h1>
                                <p className='font16c999 mb-5'>Starting my freelance design adventure almost eight years ago, I began collaborating remotely with agencies, initially specializing as a graphic designer. Over the past two years, I've teamed up with skilled individuals to craft digital products customized for both business and consumer requirements. Fueled by a quiet confidence, innate curiosity, and a steadfast commitment to refining my skills, I methodically approach design challenges one at a time.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutComponent;