import React, { useEffect } from 'react';
import TimeLine from './Misc/TimeLine';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardCheck } from '@fortawesome/free-solid-svg-icons';
import CertificateCompo from './Misc/CertificateCompo';


const EducationComponent = () => {

    return (
        <>
            <div className='container' id='resume'>
                <div className='row w-100 justify-content-start'>
                    <div className='col-xxl-6 col-xl-6 col-lg-7 col-md-12 col-sm-12 col-xs-12'>
                        <div className=''>
                            <div className='mb-5'>
                                <span className='sectionTitleFont'><FontAwesomeIcon icon={faClipboardCheck} className='me-3 fs-5'/>RESUME</span>
                            </div>
                            <div className=''>
                                <TimeLine  />
                                <CertificateCompo  />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EducationComponent;