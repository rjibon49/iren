/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';

const serviceItems = [
  {
    title: 'Website & App Design',
    description: "I've crafted distinctive digital products by leveraging unique concepts and executed them seamlessly using Figma's design platform.",
  },
  {
    title: 'UX Research',
    description: 'In the UX research process starts with defining objectives and identifying target users, followed by data collection through methods like interviews and usability testing. Insights derived from the analysis inform design decisions, ensuring the final product aligns optimally with user needs and expectations.',
  },
  {
    title: 'Prototyping',
    description: 'Prototyping is a crucial phase in the design process, I always create interactive models of the design concepts before the final product. It provides a tangible preview, enabling stakeholders to visualize and test the user experience, leading to informed refinements and improvements.',
  },
];

const ServiceComponent = () => {
  return (
    <>
      <div className='container' id='service'>
        <div className='row w-100 justify-content-start'>
          <div className='col-xxl-7 col-xl-7 col-lg-7 col-md-12 col-sm-12 col-xs-12'>
            <div>
              <div className='mb-5'>
                <span className='sectionTitleFont'><FontAwesomeIcon icon={faBarsStaggered} className='me-3 fs-5'/>SERVICE</span>
              </div>
              <div className=''>
                <h1 className='font48 mb-5'>My <span className='colorText'>Specializations</span></h1>
              </div>
              {serviceItems.map((item, index) => (
                <div key={index} className='serviceBody' data-aos="fade-up">
                  <div>
                    <h2 className='font24White'>{item.title}</h2>
                    <p className='font14c999'>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceComponent;
