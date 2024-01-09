import React from 'react';

const CertificateCompo = () => {
    return (
        <div className='pb-5'>
            <div className='pb-5'>
                <h6 className='font48'>Certificates & <span className='colorText'>Achievement</span></h6>
            </div>
            <div className="timeline-container">
                <p className='font16 ps-5 pb-3 ms-4 colorText'>Experience</p>
                <div className="timeline-event " data-aos="fade-up">
                    <div className='ps-5'>
                        <h3 className='font24White pb-2'>Google UX Design</h3>
                        <p className='font13c999 pb-4'>Google </p>
                    </div>
                </div>
                <div className="timeline-event " data-aos="fade-up">
                    <div className='ps-5' >
                        <h3 className='font24White pb-2'>Professional UI/UX Design</h3>
                        <p className='font13c999 pb-4'>Pixency Academy </p>
                    </div>
                </div>
                <div className="timeline-event" data-aos="fade-up">
                    <div className='ps-5' > 
                        <h3 className='font24White pb-2'>UI / UX Design Specialization</h3>
                        <p className='font13c999 pb-4'>California Institute of the Arts </p>
                    </div>
                </div>
                <div className="timeline-event" data-aos="fade-up">
                    <div className='ps-5'>
                        <h3 className='font24White pb-2'>Graphic Design Specialization</h3>
                        <p className='font13c999 pb-4'>California Institute of the Arts </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CertificateCompo;