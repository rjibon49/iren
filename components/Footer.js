import React from 'react';
import Link from 'next/link';


const Footer = () => {
    return (
        <>
            <div className='container'>
                <div className='text-center my-5'>
                    <p className='font18White'>	&copy; All rights reserved Visualsage 2024</p>
                    <p className='font12White'> Developed By: <Link href="https://www.linkedin.com/in/rayhanhossainjibon"><a className='colorText'>Raihan Hossain</a></Link> </p>
                </div>
            </div>
        </>
    );
};

export default Footer;