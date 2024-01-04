/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from 'react';
import { InlineWidget } from "react-calendly";

const CalendlyComponent = () => {
    // useEffect(() => {
    //     const script = document.createElement("script");
    //     script.src = "https://calendly.com/assets/external/widget.js";
    //     script.async = true;
    //     document.body.appendChild(script);
    
    //     return () => {
    //       document.body.removeChild(script);
    //     };
    //   }, []);
    return (
        <>
            <div className='container calendlyHeight alignCenter' id='about'>
                <div className='row w-100 justify-content-center'>
                    <div className='col-xxl-10 col-xl-10 col-lg-7 col-md-12 col-sm-12 col-xs-12'>
                        <div className=''>
                            <h1 className='font48'>Make a Calendly</h1>
                            <h1 className='font48 mb-5 colorText'>Schedule</h1>
                        </div>
                        <div>
                            <div className="">
                                <InlineWidget  url="https://calendly.com/irenaktar/let-s-have-a-coffee-session" styles={{height:"700px",}} />
                            </div>
                            {/* <div
                                className="calendly-inline-widget"
                                data-url="https://calendly.com/irenaktar/let-s-have-a-coffee-session"
                                style={{ minWidth: "320px", height: "700px" }}
                            /> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CalendlyComponent;