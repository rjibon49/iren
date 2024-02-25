import { faMedal } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const CertificateCompo = () => {
    return (
        <div className='pb-5'>
            <div className='pb-5'>
                <h6 className='font48'>Certificates & <span className='colorText'>Achievement</span></h6>
            </div>
            <div className="timeline-container">
                <div className="timeline-event ps-5 py-5 mb-5" data-aos="fade-up">
                    <div className=''>
                        <div className='d-flex align-items-center pe-5 gap-5 mb-4'>
                            <div>
                                <FontAwesomeIcon icon={faMedal} className='resumeIcon'/>
                            </div>
                            <div>
                                <h3 className='font24White pb-2'>Google UX Design</h3>
                                <p className='font13c999'>Google</p>
                            </div>
                        </div>
                        <div className='d-flex align-items-center pe-5 gap-5 mb-4'>
                            <div>
                                <FontAwesomeIcon icon={faMedal} className='resumeIcon'/>
                            </div>
                            <div>
                                <h3 className='font24White pb-2'>Professional UI/UX Design</h3>
                                <p className='font13c999'>Pixency Academy</p>
                            </div>
                        </div>
                        <div className='d-flex align-items-center pe-5 gap-5 mb-4'>
                            <div>
                                <FontAwesomeIcon icon={faMedal} className='resumeIcon'/>
                            </div>
                            <div>
                                <h3 className='font24White pb-2'>UI / UX Design Specialization</h3>
                                <p className='font13c999'>California Institute of the Arts</p>
                            </div>
                        </div>
                        <div className='d-flex align-items-center pe-5 gap-5 mb-4'>
                            <div>
                                <FontAwesomeIcon icon={faMedal} className='resumeIcon'/>
                            </div>
                            <div>
                                <h3 className='font24White pb-2'>Graphic Design Specialization</h3>
                                <p className='font13c999'>California Institute of the Arts</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CertificateCompo;