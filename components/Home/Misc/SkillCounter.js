import Image from 'next/image';
import { useEffect, useState } from 'react';

const SkillCounter = ({ initialValue, imageSrc, altText, plusValue }) => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const targetPercentage = initialValue;
    const animationDuration = 2000; // in milliseconds

    const startTime = Date.now();

    const updateAnimation = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;

      // Calculate the percentage based on the elapsed time
      const newPercentage = (elapsed / animationDuration) * targetPercentage;

      // If the new percentage exceeds the target, set it to the target
      setPercentage(newPercentage > targetPercentage ? targetPercentage : newPercentage);

      // If the animation is still in progress, request the next frame
      if (newPercentage < targetPercentage) {
        requestAnimationFrame(updateAnimation);
      }
    };

    // Start the animation
    requestAnimationFrame(updateAnimation);

  }, [initialValue]);

  return (
    <div className='skillsBorder' style={{ clipPath: `polygon(0 0, ${percentage + plusValue[0]}% 0, ${percentage + plusValue[1]}% 100%, 0 100%)` }}>
      <div className="counter text-center">
        <div className='mb-3'>
          <Image src={imageSrc} alt={altText} className='' />
        </div>
        {Math.floor(percentage)}%
      </div>
    </div>
  );
};

export default SkillCounter;
