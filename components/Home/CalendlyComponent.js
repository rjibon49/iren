/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from 'react';

const CalendlyComponent = () => {
    useEffect(() => {
        // Load Calendly script asynchronously
        const script = document.createElement('script');
        script.src = 'https://calendly.com/assets/external/widget.js';
        script.async = true;
        document.body.appendChild(script);

        // Cleanup
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <>
            <div className='container' id='meeting'>
                <div className='row w-100 justify-content-start'>
                    <div className='col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                        <div className='text-center'>
                            <h1 className='font48'>Make a Calendly <br /><span className='colorText'>Schedule</span></h1>
                        </div>
                        <div className=''>
                            <div className="mettongContent">
                                {/* Embed Calendly Inline Widget */}
                                <div className="calendly-inline-widget" data-url="https://calendly.com/irenaktar/let-s-have-a-coffee-session" style={{ minWidth: '320px', height: '810px' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CalendlyComponent;