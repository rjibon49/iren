import { faMedal } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const CertificateCompo = () => {
  const certificates = [
    { title: 'Google UX Design', organization: 'Google' },
    { title: 'Professional UI/UX Design', organization: 'Pixency Academy' },
    { title: 'UI / UX Design Specialization', organization: 'California Institute of the Arts' },
    { title: 'Graphic Design Specialization', organization: 'California Institute of the Arts' },
  ];

  return (
    <div className=''>
      <div className='pb-5'>
        <h6 className='font48'>Certificates & <span className='colorText'>Achievement</span></h6>
      </div>
      <div className="timeline-container">
        <div className="timeline-event ps-xxl-5 ps-xl-5 ps-lg-4 ps-md-5 py-5 mb-5" data-aos="fade-up">
          <div className=''>
            {certificates.map((certificate, index) => (
              <div key={index} className='d-flex align-items-center pe-5 gap-5 mb-4'>
                <div>
                  <FontAwesomeIcon icon={faMedal} className='resumeIcon'/>
                </div>
                <div>
                  <h3 className='font24White pb-2'>{certificate.title}</h3>
                  <p className='font13c999'>{certificate.organization}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateCompo;
