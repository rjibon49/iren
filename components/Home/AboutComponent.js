/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const AboutComponent = () => {
    return (
        <>
            <div className='container aboutHeight alignCenter' id='about'>
                <div className='row w-100 justify-content-start'>
                    <div className='col-xxl-6 col-xl-6 col-lg-7 col-md-12 col-sm-12 col-xs-12'>
                        <div>
                            <div className='mb-3'>
                                <span className='sectionTitleFont'><FontAwesomeIcon icon={faUser} className='me-3'/>ABOUT</span>
                            </div>
                            <div className=''>
                                <h1 className='font48 mb-4'>Every <span className='font48Color'>exceptional</span> design starts with an even more compelling story.</h1>
                                <p className='font16c999 mb-4'>Starting my freelance design adventure almost eight years ago, I began collaborating remotely with agencies, initially specializing as a graphic designer. Over the past two years, I've teamed up with skilled individuals to craft digital products customized for both business and consumer requirements. Fueled by a quiet confidence, innate curiosity, and a steadfast commitment to refining my skills, I methodically approach design challenges one at a time.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutComponent;