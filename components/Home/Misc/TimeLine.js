import React from 'react';

const TimeLine = () => {
    return (
        <>
            <div className='pb-5'>
                <div className='pb-5'>
                    <h6 className='font48'>Education & <span className='colorText'>Experience</span></h6>
                </div>
                <div className="timeline-container">
                    <p className='font16 ps-5 pb-3 ms-4 colorText'>Experience</p>
                    <div className="timeline-event " data-aos="fade-left">
                        <div className='ps-5'>
                            <p className="font16c999 pb-3">2022 - Present</p>
                            <h3 className='font24White pb-2'>UX Designer (Remotely)</h3>
                            <p className='font13c999 pb-4'>DicoIT Agency, USA </p>
                            <h3 className='font24White pb-2'>Graphics & UX Designer (Remotely) </h3>
                            <p className='font13c999 pb-4'>Upwork (2021, Dec - Present) </p>
                        </div>
                    </div>
                    <div className="timeline-event " data-aos="fade-left">
                        <div className='ps-5'>
                            <p className="font16c999 pb-3">2015 - 2022</p>
                            <h3 className='font24White pb-2'>Graphics Designer (Remotely)</h3>
                            <p className='font13c999 pb-4'>Cruise Control Marketing , LLC</p>
                            <h3 className='font24White pb-2'>Graphic Design Instructor</h3>
                            <p className='font13c999 pb-4'>ChangeTech BD</p>
                            <h3 className='font24White pb-2'>Graphic Designer</h3>
                            <p className='font13c999 pb-4'>Freelance</p>
                        </div>
                    </div>
                </div>
            </div>

                {/* ============= Education Timeline =============== */}

            <div>
                <div className="timeline-container">
                    <p className='font16 ps-5 pb-3 ms-4 colorText'>Education</p>
                    <div className="timeline-event " data-aos="fade-left">
                        <div className='ps-5'>
                            <p className="font16c999 pb-3">2022 - 2024</p>
                            <h3 className='font24White pb-2'>Bachelor of Computer Science</h3>
                            <p className='font13c999 pb-4'>University Of The People, USA</p>
                        </div>
                    </div>
                    <div className="timeline-event " data-aos="fade-left">
                        <div className='ps-5'>
                            <p className="font16c999 pb-3">2011-2012</p>
                            <h3 className='font24White pb-2'>Bachelor of English Literature</h3>
                            <p className='font13c999 pb-4'>National University, Bangladesh</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TimeLine;