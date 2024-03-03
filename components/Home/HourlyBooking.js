/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointRight } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';


const HourlyBooking = () => {
  const pricingOptions = [
    {
      type: 'BASIC',
      description: 'Need to redesign?',
      description2: 'or small budget',
      rate: '$20',
      features: [
        '1 Landing page design',
        'With graphics',
        'Wireframes, Prototype',
        'Responsive design',
        'Include source file',
        'Any graphic design project',
        'Work in business days, no weekend.',
        'Support 6 months',
        'Time to time update',
      ],
    },
    {
      type: 'PREMIUM',
      description: 'Need to redesign?',
      description2: 'Leave it for me',
      rate: '$60',
      features: [
        'Design from scratch',
        '10/12 Standard Mobile Screens Design with Source file, PNG, JPEG',
        'Research, user flow, Wireframes, Prototype, Visual design, App testing',
        'Website/App with graphics and content',
        'Design System',
        'Responsive design',
        'Work with both weekend',
        'Support 6 months',
        'Time to time update',
      ],
    },
  ];

  return (
    <div className='container' id='about'>
      <div className='row w-100 justify-content-start'>
        <div className='col-xxl-7 col-xl-7 col-lg-7 col-md-12 col-sm-12 col-xs-12'>
          <div>
            <div className=''>
              <h6 className='font48 mb-5'>Hourly <span className='colorText'>Pricing</span></h6>
            </div>
          </div>
          <div className='d-flex justify-content-between align-items-center flex-wrap gap-3'>
            {pricingOptions.map((option, index) => (
              <div key={index} className='hourlyWidth'>
                <div className='d-flex justify-content-between align-items-center flex-wrap'>
                  <p className='font18White'>{option.type}</p>
                  <p className='font13White text-end'>{option.description} <br /> {option.description2} </p>
                </div>
                <div style={{ borderBottom: "1px solid #555" }} className='mt-3'>
                  <p className='font48 colorText'>{option.rate}<span className='font14c999'> / HOUR</span></p>
                </div>
                <div className='pt-5'>
                  {option.features.map((feature, i) => (
                    <p key={i} className='font14White mb-3'>
                      <FontAwesomeIcon icon={faHandPointRight} className='me-3' />
                      {feature}
                    </p>
                  ))}
                </div>
                <div className='BookingButton'>
                  <div className='d-flex justify-content-center gap-3'>
                    <div className='weekly'>
                      <Link href="https://www.upwork.com/freelancers/~013a1545ed7b7f3fad"><a target='_blank'><p className='font12White'>20+ Hrs <br /> <span className='font16'>WEEKLY</span></p></a></Link>
                    </div>
                    <div className='monthly'>
                      <Link href="https://www.upwork.com/freelancers/~013a1545ed7b7f3fad"><a target='_blank'><p className='font12White'>80+ Hrs <br /> <span className='font16'>MONTHLY</span></p></a></Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='p-xxl-5 p-xl-5 p-lg-5 p-md-5 p-sm-0'>
            <p className='font16 pe-2'>
              Hey there! If you're thinking about bringing me on board every month, I'd be more than happy to chat with you and see how we can work together. Just drop me a line at <span className='colorText'>iren@visualsage.xyz</span> Can't wait to hear from you!
            </p>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default HourlyBooking;