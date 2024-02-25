/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointRight } from '@fortawesome/free-solid-svg-icons';


const HourlyBooking = () => {
    return (
        <>
            <div className='container hourlyHeight alignCenter' id='about'>
                <div className='row w-100 justify-content-start'>
                    <div className='col-xxl-7 col-xl-7 col-lg-7 col-md-12 col-sm-12 col-xs-12'>
                        <div>
                            <div className=''>
                                <h1 className='font48 mb-5'>Hourly <span className='colorText'>Pricing</span></h1>\
                            </div>
                        </div>
                        <div className='d-flex justify-content-between align-items-center flex-wrap gap-3'>
                            <div className='hourlyWidth'>
                                <div className='d-flex justify-content-between align-items-center flex-wrap'>
                                    <p className='font18White'>BASIC</p>
                                    <p className='font13White text-end'>Need to redesign ? <br />or small budget</p>
                                </div>
                                <div>
                                    <p className='font48 colorText'>$20<span className='font14c999'> / HOUR</span></p>
                                    <div style={{borderBottom:"1px solid #555"}}></div>
                                </div>
                                <div className='pt-5'>
                                    <p className='designationFont mb-3'><FontAwesomeIcon icon={faHandPointRight} className='me-3'/>1 Landing page design</p>
                                    <p className='designationFont mb-3'><FontAwesomeIcon icon={faHandPointRight} className='me-3'/>With graphics</p>
                                    <p className='designationFont mb-3'><FontAwesomeIcon icon={faHandPointRight} className='me-3'/>Wireframes, Prototype</p>
                                    <p className='designationFont mb-3'><FontAwesomeIcon icon={faHandPointRight} className='me-3'/>Responsive design</p>
                                    <p className='designationFont mb-3'><FontAwesomeIcon icon={faHandPointRight} className='me-3'/>Include source file</p>
                                    <p className='designationFont mb-3'><FontAwesomeIcon icon={faHandPointRight} className='me-3'/>Any graphic design project</p>
                                    <p className='designationFont mb-3'><FontAwesomeIcon icon={faHandPointRight} className='me-3'/>Work in business days, no weekend.</p>
                                    <p className='designationFont mb-3'><FontAwesomeIcon icon={faHandPointRight} className='me-3'/>Support 6 months</p>
                                    <p className='designationFont mb-3'><FontAwesomeIcon icon={faHandPointRight} className='me-3'/>Time to time update</p>
                                    <div>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className='hourlyWidth'>
                                <div className='d-flex justify-content-between align-items-center flex-wrap'>
                                    <p className='font18White'>PREMIUM</p>
                                    <p className='font13White text-end'>Need to redesign ? <br />Leave its for me</p>
                                </div>
                                <div>
                                    <p className='font48 colorText'>$60<span className='font14c999'> / HOUR</span></p>
                                    <div style={{borderBottom:"1px solid #555"}}></div>
                                </div>
                                <div className='pt-5'>
                                    <p className='designationFont mb-3'><FontAwesomeIcon icon={faHandPointRight} className='me-3'/>Design from scratch </p>
                                    <p className='designationFont mb-3'><FontAwesomeIcon icon={faHandPointRight} className='me-3'/>10/12 Standard Mobile Screens Design with Source file, PNG, JPEG</p>
                                    <p className='designationFont mb-3'><FontAwesomeIcon icon={faHandPointRight} className='me-3'/>Research, user flow, Wireframes, Prototype, Visual design, App testing</p>
                                    <p className='designationFont mb-3'><FontAwesomeIcon icon={faHandPointRight} className='me-3'/>Website/ App with graphics and content</p>
                                    <p className='designationFont mb-3'><FontAwesomeIcon icon={faHandPointRight} className='me-3'/>Design System</p>
                                    <p className='designationFont mb-3'><FontAwesomeIcon icon={faHandPointRight} className='me-3'/>Responsive design</p>
                                    <p className='designationFont mb-3'><FontAwesomeIcon icon={faHandPointRight} className='me-3'/>Work with both weekend</p>
                                    <p className='designationFont mb-3'><FontAwesomeIcon icon={faHandPointRight} className='me-3'/>Support 6 months</p>
                                    <p className='designationFont mb-3'><FontAwesomeIcon icon={faHandPointRight} className='me-3'/>Time to time update</p>
                                </div>
                            </div>
                        </div>
                        <div className='p-5'>
                            <p className='font16 pe-2'>Hey there! If you're thinking about bringing me on board every month, I'd be more than happy to chat with you and see how we can work together. Just drop me a line at <span className='colorText'>iren@visualsage.xyz</span> Can't wait to hear from you!</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HourlyBooking;