import Link from 'next/link';
import React from 'react';
import Marquee from "react-fast-marquee";

const MarqueeItem = () => {
  return (
    <>
      <Marquee className='hello'>
        <Link href="https://www.upwork.com/freelancers/~013a1545ed7b7f3fad"><a target='_blank'><span className='marqueInfo'>HIRE ME AT UPWORK </span></a></Link>
        <Link href="https://www.fiverr.com/designerirenn"><a target='_blank'><span className='marqueInfo'> HIRE ME AT FIVERR </span></a></Link>
        <Link href="https://www.upwork.com/freelancers/~013a1545ed7b7f3fad"><a target='_blank'><span className='marqueInfo'>HIRE ME AT UPWORK </span></a></Link>
        <Link href="https://www.fiverr.com/designerirenn"><a target='_blank'><span className='marqueInfo'> HIRE ME AT FIVERR </span></a></Link>
      </Marquee>
    </>
  );
};

export default MarqueeItem;
