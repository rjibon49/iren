import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripVertical } from '@fortawesome/free-solid-svg-icons';
import cafeCrave from "../../public/images/portfolio/cafecarve-coffeeshop.webp";
import travelAgency from "../../public/images/portfolio/TreavelAgency.webp";
import nft from "../../public/images/portfolio/NFT-website-Design.webp";
import realEstate1 from "../../public/images/portfolio/Real-Estate_Website.webp";
import realEstate from "../../public/images/portfolio/RealEstate.webp";
import beutySalon from "../../public/images/portfolio/Beauty-Salon.webp";
import traveling from "../../public/images/portfolio/Traveling-Website.webp";
import Image from 'next/image';
import Link from 'next/link';

const portfolioData = [
    { title: 'NFT Website Design', link: "https://dribbble.com/irenaktar", image: nft },
    { title: 'Travel Agency Website Design', link: "https://dribbble.com/irenaktar", image: travelAgency },
    { title: 'Real Estate light version website Design', link: "https://dribbble.com/irenaktar", image: realEstate1 },
    { title: 'Real Estate Dark Version Website', link: "https://dribbble.com/irenaktar", image: realEstate },
    { title: 'Beauty Salon Website Design', link: "https://dribbble.com/irenaktar", image: beutySalon },
    { title: 'Traveling Website Design', link: "https://dribbble.com/irenaktar", image: traveling },
  ];

const PortfolioComponent = () => {
    return (
        <>
            <div className='container' id='portfolio'>
                <div className='row w-100 justify-content-start'>
                    <div className='col-xxl-7 col-xl-7 col-lg-7 col-md-12 col-sm-12 col-xs-12'>
                        <div>
                            <div className='mb-5'>
                                <span className='sectionTitleFont'><FontAwesomeIcon icon={faGripVertical} className='me-3 fs-5'/>PORTFOLIO</span>
                            </div>
                            <div className=''>
                                <h1 className='font48 mb-5'>Featured<span className='colorText'> Projects</span></h1>
                            </div>
                            <div>
                                <Link href="https://dribbble.com/irenaktar" ><a target="_blank">
                                    <Image src={cafeCrave} alt='Cafe Crave Coffee Shop Case Study' className='portfolioImage' quality={80} loading="lazy" />
                                    <p className='font24White mt-3'>CafeCrave Coffeeshop Case Study</p>
                                </a></Link>
                            </div>

                            <div className='d-flex justify-content-start flex-wrap gap-4 my-5'>
                                {portfolioData.map((portfolio, index) => (
                                    <div className='portfolioContentWidth my-2' key={index}>
                                        <Link href={portfolio.link}>
                                            <a target="_blank">
                                                <Image src={portfolio.image} alt={portfolio.title} className='portfolioImage' loading="lazy" />
                                                <h3 className='font20White mt-3'>{portfolio.title}</h3>
                                            </a>
                                        </Link>  
                                    </div>
                                ))}
                            </div>
                            <div className='col-xxl-10'>
                                <p className='colorText fs-4'>Kindly explore my designs on <Link href="https://dribbble.com/irenaktar"><a target='_blank'><span className='protfolioText'>Dribbble</span></a></Link> and <Link href="https://www.behance.net/irenaktar2"><a target='_blank'><span className='protfolioText'>Behance</span></a></Link> for more inspiration.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PortfolioComponent;