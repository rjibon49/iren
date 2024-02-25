import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBezierCurve } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

const skillsData = [
  { label: 'Figma', imageSrc: '/images/content/figma.png', percentage: 95, progress: 90 },
  { label: 'Framer', imageSrc: '/images/content/framer.png', percentage: 85, progress: 80 },
  { label: 'Photoshop', imageSrc: '/images/content/adobePhotshop.png', percentage: 90, progress: 85 },
  { label: 'Illustrator', imageSrc: '/images/content/adobeIllustrator.png', percentage: 90, progress: 85 },
  { label: 'After Effects', imageSrc: '/images/content/adobeAfterEffect.png', percentage: 80, progress: 75 },
  { label: 'Premiere Pro', imageSrc: '/images/content/adobePremierePro.png', percentage: 70, progress: 65 },
];

const SkillsComponent = () => {
  const imageSize = { width: 60, height: 60 };

  const Counter = ({ targetValue }) => {
    const [currentValue, setCurrentValue] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentValue((prevValue) => {
          const increment = 1;
          return prevValue + increment <= targetValue ? prevValue + increment : targetValue;
        });
      }, 20);

      return () => clearInterval(interval);
    }, [targetValue]);

    return <span>{Math.floor(currentValue)}%</span>;
  };

  return (
    <div className='container skillsHeight alignCenter skillBackground' id='skills'>
      <div className='row w-100 justify-content-start'>
        <div className='col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-xs-12'>
          <div>
            <div className='mb-5'>
              <span className='sectionTitleFont'><FontAwesomeIcon icon={faBezierCurve} className='me-3 fs-5'/>MY SKILLS</span>
            </div>
            <div className=''>
              <h1 className='font48 mb-5'>My <span className='colorText'>Advantages</span></h1>
            </div>
            <div className='d-flex gap-4 justify-content-start flex-wrap'>
              {skillsData.map((skill, index) => (
                <div key={index} data-aos="zoom-in" className='skillWidth'>
                  <div className='skillsBorder'>
                    <div className="counter">
                      <div className='mb-3'>
                        <Image src={skill.imageSrc} alt={`${skill.label} Logo`} className='skillImage' {...imageSize} />
                        <p className='text-white fs-6'>{skill.label}</p>
                      </div>
                      <div className="progress-container mb-3">
                        <div className='progress-event'>
                          <div className="progress-event-after" style={{ left: `${skill.progress}%` }} data-aos="slide-left" data-aos-duration="2000" ></div>
                        </div>
                      </div>
                      <Counter targetValue={skill.percentage} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsComponent;
