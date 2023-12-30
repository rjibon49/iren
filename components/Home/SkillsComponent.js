import React, { useEffect, useMemo, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShapes } from '@fortawesome/free-solid-svg-icons';
import figma from "../../public/images/content/figma.png";
import framer from "../../public/images/content/framer.png";
import photoshop from "../../public/images/content/adobePhotshop.png";
import illustrator from "../../public/images/content/adobeIllustrator.png";
import afterEffect from "../../public/images/content/adobeAfterEffect.png";
import premierepro from "../../public/images/content/adobePremierePro.png";
import SkillCounter from './Misc/SkillCounter';

const SkillsComponent = () => {

    const skillsRef = useRef(null);
    const [inViewport, setInViewport] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setInViewport(true);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5, // Change this value based on your needs
      }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);
    
const plusValue1 = [5, 5];
const plusValue2 = [15, 15];
const plusValue3 = [10, 10];
const plusValue4 = [10, 10];
const plusValue5 = [20, 20];
const plusValue6 = [30, 30];


    return (
        <>
            <div className='container skillsHeight alignCenter skillBackground' id='skills' ref={skillsRef}>
                <div className='row w-100 justify-content-end'>
                    <div className='col-xxl-7 col-xl-7 col-lg-7 col-md-12 col-sm-12 col-xs-12'>
                        <div>
                            <div className='mb-5'>
                                <span className='sectionTitleFont'><FontAwesomeIcon icon={faShapes} className='me-4'/>MY SKILLS</span>
                            </div>
                            <div className=''>
                                <h1 className='font48 mb-5'>My <span className='colorText'>Advantages</span></h1>
                            </div>
                            <div className='d-flex gap-5 justify-content-start flex-wrap' data-aos="zoom-in">
                                <div>
                                    <SkillCounter initialValue={95} imageSrc={figma} altText={"Figma Logo"} plusValue={plusValue1} />
                                    <p className='designationFont text-center mt-3'>Figma</p>
                                </div>
                                <div>
                                    <SkillCounter initialValue={85} imageSrc={framer} altText={"Framer Logo"} plusValue={plusValue2} /> 
                                    <p className='designationFont text-center mt-3'>Framer</p>
                                </div>
                                <div>
                                    <SkillCounter initialValue={90} imageSrc={photoshop} altText={"Photoshop Logo"} plusValue={plusValue3} />
                                    <p className='designationFont text-center mt-3'>Photoshop</p>
                                </div>
                                <div>
                                    <SkillCounter initialValue={90} imageSrc={illustrator} altText={"Illustrator Logo"} plusValue={plusValue4} />
                                    <p className='designationFont text-center mt-3'>Illustrator</p>
                                </div>
                                <div>
                                    <SkillCounter initialValue={80} imageSrc={afterEffect} altText={"After Effect Logo"} plusValue={plusValue5} />
                                    <p className='designationFont text-center mt-3'>After Effects</p>
                                </div>
                                <div>
                                    <SkillCounter initialValue={70} imageSrc={premierepro} altText={"Premiere Pro Logo"} plusValue={plusValue6} />
                                    <p className='designationFont text-center mt-3'>Premiere Pro</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SkillsComponent;