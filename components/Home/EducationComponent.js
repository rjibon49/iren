import React, { useEffect } from 'react';
import TimeLine from './Misc/TimeLine';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import CertificateCompo from './Misc/CertificateCompo';


const EducationComponent = () => {

    // const experience = [
    //     {
    //       date: '2022 - Present',
    //       title: 'UX Designer (Remotely)',
    //       location: 'DicoIT Agency, USA ',
    //     },
    //     {
    //       date: '2023-02-01',
    //       title: 'Event 2',
    //       description: 'Description for Event 2',
    //     },
    //     // Add more events as needed
    //   ];

    return (
        <>
            <div className='container educationHeight alignCenter' id='resume'>
                <div className='row w-100 justify-content-end'>
                    <div className='col-xxl-7 col-xl-7 col-lg-7 col-md-12 col-sm-12 col-xs-12'>
                        <div className=''>
                            <div className='mb-5'>
                                <span className='sectionTitleFont'><FontAwesomeIcon icon={faUserGraduate} className='me-4'/>RESUME</span>
                            </div>
                            <div className=''>
                                <TimeLine  />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container certificateHeight alignCenter'>
                <div className='row w-100'>
                    <div className='col-xxl-5 col-xl-5 col-lg-5 col-md-12 col-sm-12 col-xs-12'>

                    </div>
                    <div className='col-xxl-7 col-xl-7 col-lg-7 col-md-12 col-sm-12 col-xs-12'>
                        <div className=''>
                            <div className=''>
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