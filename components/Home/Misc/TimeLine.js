import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward, faBriefcase, faGraduationCap, faUserCheck } from '@fortawesome/free-solid-svg-icons';

const TimeLine = () => {
    return (
        <>
            <div className=''>
                <div className='pb-5'>
                    <p className='font48'>Education & <span className='colorText'>Experience</span></p>
                </div>
                <div className="timeline-container">
                    <p className='font16 pb-3 text-white'><FontAwesomeIcon icon={faUserCheck} className='me-3'/>Experience</p>
                    <div className="timeline-event ps-xxl-5 ps-xl-5 ps-lg-4 ps-md-5 py-5 mb-5" data-aos="fade-up">
                        <div className=''>
                            <p className="font16c999 pb-3 ps-5 ms-5">2022 - Present</p>
                            <div className='d-flex align-items-center pe-5 gap-5 mb-4'>
                                <div>
                                    <FontAwesomeIcon icon={faBriefcase} className='resumeIcon'/>
                                </div>
                                <div>
                                    <h3 className='font24White pb-2'>UX Designer (Remotely)</h3>
                                    <p className='font13c999'>DicoIT Agency, USA </p>
                                </div>
                            </div>
                            <div className='d-flex align-items-center pe-5 gap-5'>
                                <div>
                                    <FontAwesomeIcon icon={faBriefcase} className='resumeIcon'/>
                                </div>
                                <div>
                                    <h3 className='font24White pb-2'>Graphics & UX Designer (Remotely) </h3>
                                    <p className='font13c999'>Upwork (2021, Dec - Present) </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="timeline-event ps-xxl-5 ps-xl-5 ps-lg-4 ps-md-5 py-5 mb-5" data-aos="fade-up">
                        <div className=''>
                            <p className="font16c999 pb-3 ps-5 ms-5">2015 - 2022</p>
                            <div className='d-flex align-items-center pe-5 gap-5 mb-4'>
                                <div>
                                    <FontAwesomeIcon icon={faBriefcase} className='resumeIcon'/>
                                </div>
                                <div>
                                    <h3 className='font24White pb-2'>Graphics Designer (Remotely)</h3>
                                    <p className='font13c999'>Cruise Control Marketing, LLC </p>
                                </div>
                            </div>
                            <div className='d-flex align-items-center pe-5 gap-5 mb-4'>
                                <div>
                                    <FontAwesomeIcon icon={faBriefcase} className='resumeIcon'/>
                                </div>
                                <div>
                                    <h3 className='font24White pb-2'>Graphic Design Instructor </h3>
                                    <p className='font13c999'>ChangeTech BD</p>
                                </div>
                            </div>
                            <div className='d-flex align-items-center pe-5 gap-5'>
                                <div>
                                    <FontAwesomeIcon icon={faBriefcase} className='resumeIcon'/>
                                </div>
                                <div>
                                    <h3 className='font24White pb-2'>Graphic Designer</h3>
                                    <p className='font13c999'>Freelance</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

                {/* ============= Education Timeline =============== */}

            <div>
                <div className="timeline-container">
                    <p className='font16 pb-3 text-white'><FontAwesomeIcon icon={faGraduationCap} className='me-3'/>Education</p>
                    <div className="timeline-event ps-xxl-5 ps-xl-5 ps-lg-4 ps-md-5 py-5 mb-5" data-aos="fade-up">
                        <div className=''>
                            <p className="font16c999 pb-3 ps-5 ms-5">2015 - 2016</p>
                            <div className='d-flex align-items-center pe-5 gap-5 mb-4'>
                                <div>
                                    <FontAwesomeIcon icon={faAward} className='resumeIcon'/>
                                </div>
                                <div>
                                    <h3 className='font24White pb-2'>Master’s of English Literature</h3>
                                    <p className='font13c999'>National University, Bangladesh</p>
                                </div>
                            </div>
                            <p className="font16c999 pb-3 ps-5 ms-5">2011-2012</p>
                            <div className='d-flex align-items-center pe-5 gap-5 mb-4'>
                                <div>
                                    <FontAwesomeIcon icon={faAward} className='resumeIcon'/>
                                </div>
                                <div>
                                    <h3 className='font24White pb-2'>Bachelor of English Literature</h3>
                                    <p className='font13c999'>National University, Bangladesh</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TimeLine;