/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';

const ServiceComponent = () => {
    return (
        <>
            <div className='container serviceHeight alignCenter' id='service'>
                <div className='row w-100 justify-content-end'>
                    <div className='col-xxl-7 col-xl-7 col-lg-7 col-md-12 col-sm-12 col-xs-12'>
                        <div>
                            <div className='mb-5'>
                                <span className='sectionTitleFont'><FontAwesomeIcon icon={faBarsStaggered} className='me-4'/>SERVICE</span>
                            </div>
                            <div className=''>
                                <h1 className='font48 mb-5'>My <span className='colorText'>Specializations</span></h1>
                            </div>
                            <div className='serviceBody' data-aos="fade-up">
                                <div>
                                    <h2 className='font24White'>Website & App Design</h2>
                                    <p className='font14c999'>I've crafted distinctive digital products by leveraging unique concepts and executed them seamlessly using Figma's design platform.</p>
                                </div>
                            </div>
                            <div className='serviceBody'data-aos="fade-left">
                                <div>
                                    <h2 className='font24White'>UX Research</h2>
                                    <p className='font14c999'>In the UX research process starts with defining objectives and identifying target users, followed by data collection through methods like interviews and usability testing. Insights derived from the analysis inform design decisions, ensuring the final product aligns optimally with user needs and expectations.</p>
                                </div>
                            </div>
                            <div className='serviceBody' data-aos="fade-down">
                                <div>
                                    <h2 className='font24White'>Prototyping</h2>
                                    <p className='font14c999'>Prototyping is a crucial phase in the design process, I always create interactive models of the design concepts before the final product. It provides a tangible preview, enabling stakeholders to visualize and test the user experience, leading to informed refinements and improvements.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceComponent;