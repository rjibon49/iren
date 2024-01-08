/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { InlineWidget } from "react-calendly";

const CalendlyComponent = () => {
    return (
        <>
            <div className='container calendlyHeight my-5 py-5' id='meeting'>
                <div className='row w-100 justify-content-end'>
                    <div className='col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                        <div className='text-center'>
                            <h1 className='font48'>Make a Calendly <br /><span className='colorText'>Schedule</span></h1>
                        </div>
                        <div className=''>
                            <div className="mettongContent">
                                <InlineWidget  url="https://calendly.com/irenaktar/let-s-have-a-coffee-session" styles={{height:"700px"}} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CalendlyComponent;