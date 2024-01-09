import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShapes } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

const skillsData = [
  { label: 'Figma', imageSrc: '/images/content/figma.png', percentage: 95 },
  { label: 'Framer', imageSrc: '/images/content/framer.png', percentage: 85 },
  { label: 'Photoshop', imageSrc: '/images/content/adobePhotshop.png', percentage: 90 },
  { label: 'Illustrator', imageSrc: '/images/content/adobeIllustrator.png', percentage: 90 },
  { label: 'After Effects', imageSrc: '/images/content/adobeAfterEffect.png', percentage: 80 },
  { label: 'Premiere Pro', imageSrc: '/images/content/adobePremierePro.png', percentage: 70 },
];

const SkillsComponent = () => {
  const imageSize = { width: 50, height: 50 };

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
      <div className='row w-100 justify-content-end'>
        <div className='col-xxl-7 col-xl-7 col-lg-7 col-md-12 col-sm-12 col-xs-12'>
          <div>
            <div className='mb-5'>
              <span className='sectionTitleFont'><FontAwesomeIcon icon={faShapes} className='me-4'/>MY SKILLS</span>
            </div>
            <div className=''>
              <h1 className='font48 mb-5'>My <span className='colorText'>Advantages</span></h1>
            </div>
            <div className='d-flex gap-5 justify-content-start flex-wrap'>
              {skillsData.map((skill, index) => (
                <div key={index} data-aos="zoom-in">
                  <div className='skillsBorder'>
                    <div className="counter text-center">
                      <div className='mb-3'>
                        <Image src={skill.imageSrc} alt={`${skill.label} Logo`} className='' {...imageSize} />
                      </div>
                      <Counter targetValue={skill.percentage} />
                    </div>
                  </div>
                  <p className='designationFont text-center mt-3'>{skill.label}</p>
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
