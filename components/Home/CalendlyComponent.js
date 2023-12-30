/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { InlineWidget } from "react-calendly";

const CalendlyComponent = () => {
    return (
        <>
            <div className='container calendlyHeight alignCenter' id='about'>
                <div className='row w-100 justify-content-end'>
                    <div className='col-xxl-7 col-xl-7 col-lg-7 col-md-12 col-sm-12 col-xs-12'>
                        <div>
                            {/* <div className='mb-5'>
                                <span className='sectionTitleFont'><FontAwesomeIcon icon={faUser} className='me-4'/>ABOUT</span>
                            </div> */}
                            <div className=''>
                                <h1 className='font48'>Make a Calendly</h1>
                                <h1 className='font48 mb-5 colorText'>Schedule</h1>
                            </div>
                            <div>
                                <div className="">
                                    <InlineWidget  url="https://calendly.com/irenaktar/let-s-have-a-coffee-session" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CalendlyComponent;