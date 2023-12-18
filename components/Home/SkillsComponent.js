import React, { useEffect, useMemo, useState } from 'react';
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
// const [percentage, setPercentage] = useState(0);

//   useEffect(() => {
//     const targetPercentage = 95;
//     const animationDuration = 2000; // in milliseconds

//     const startTime = Date.now();

//     const updateAnimation = () => {
//       const currentTime = Date.now();
//       const elapsed = currentTime - startTime;

//       // Calculate the percentage based on the elapsed time
//       const newPercentage = (elapsed / animationDuration) * targetPercentage;

//       // If the new percentage exceeds the target, set it to the target
//       setPercentage(newPercentage > targetPercentage ? targetPercentage : newPercentage);

//       // If the animation is still in progress, request the next frame
//       if (newPercentage < targetPercentage) {
//         requestAnimationFrame(updateAnimation);
//       }
//     };

//     // Start the animation
//     requestAnimationFrame(updateAnimation);

//   }, []);
// const [currentStep, setCurrentStep] = useState(0);
//   const [percentage, setPercentage] = useState(0);

//   const steps = useMemo(() => [95, 85, 80, 90, 75, 70], []); // Memoize the steps array
//   const animationDuration = 2000; // in milliseconds

//   useEffect(() => {
//     const startTime = Date.now();

//     const updateAnimation = () => {
//       const currentTime = Date.now();
//       const elapsed = currentTime - startTime;

//       // Calculate the percentage based on the elapsed time
//       const targetPercentage = steps[currentStep];
//       const newPercentage = (elapsed / animationDuration) * targetPercentage;

//       // If the new percentage exceeds the target, set it to the target
//       setPercentage(newPercentage > targetPercentage ? targetPercentage : newPercentage);

//       // If the animation is still in progress, request the next frame
//       if (newPercentage < targetPercentage) {
//         requestAnimationFrame(updateAnimation);
//       } else {
//         // Move to the next step
//         setCurrentStep((prevStep) => prevStep + 1);

//         // If there are more steps, start the next animation
//         if (currentStep < steps.length - 1) {
//           requestAnimationFrame(updateAnimation);
//         }
//       }
//     };

//     // Start the animation
//     requestAnimationFrame(updateAnimation);

//   }, [currentStep, steps]);
const plusValue1 = [5, 5];
const plusValue2 = [15, 15];
const plusValue3 = [10, 10];
const plusValue4 = [10, 10];
const plusValue5 = [20, 20];
const plusValue6 = [30, 30];


    return (
        <>
            <div className='container skillsHeight alignCenter' id='skills'>
                <div className='row w-100 justify-content-end'>
                    <div className='col-xxl-7 col-xl-7 col-lg-7 col-md-12 col-sm-12 col-xs-12'>
                        <div>
                            <div className='mb-5'>
                                <span className='sectionTitleFont'><FontAwesomeIcon icon={faShapes} className='me-4'/>MY SKILLS</span>
                            </div>
                            <div className=''>
                                <h1 className='font48 mb-5'>My <span className='font48Color'>Advantages</span></h1>
                            </div>
                            <div className='d-flex gap-5 justify-content-start flex-wrap'>
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


// <div className='skillsBorder'  style={{ clipPath: `polygon(0 0, ${percentage + 5}% 0, ${percentage + 5}% 100%, 0 100%)` }}>
// <div className="counter text-center">
//     <div className='mb-3'>
//         <Image src={figma} alt='Figma Logo' className='' /> 
//     </div>
//     {Math.floor(percentage)}%
// </div>
// </div>
// <div className='skillsBorder'  style={{ clipPath: `polygon(0 0, ${percentage + 5}% 0, ${percentage + 5}% 100%, 0 100%)` }}>
// <div className="counter text-center">
//     <div className='mb-3'>
//         <Image src={framer} alt='Framer Logo' className='' /> 
//     </div>
//     {Math.floor(percentage)}%
// </div>
// </div>