import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripVertical } from '@fortawesome/free-solid-svg-icons';
import cafeCrave from "../../public/images/content/cafecarve-coffeeshop.png";
import nft from "../../public/images/content/NFT-website-Design.png";
import barAndRes from "../../public/images/content/Bar&RestaurantWebsite.png";
import realEstate from "../../public/images/content/Real-Estate_Website.png";
import Image from 'next/image';
import Link from 'next/link';

const PortfolioComponent = () => {
    return (
        <>
            <div className='container portfolioHeight alignCenter' id='portfolio'>
                <div className='row w-100 justify-content-end'>
                    <div className='col-xxl-7 col-xl-7 col-lg-7 col-md-12 col-sm-12 col-xs-12'>
                        <div>
                            <div className='mb-5'>
                                <span className='sectionTitleFont'><FontAwesomeIcon icon={faGripVertical} className='me-4'/>PORTFOLIO</span>
                            </div>
                            <div className=''>
                                <h1 className='font48 mb-5'>Featured<span className='colorText'> Projects</span></h1>
                            </div>
                            <div>
                                <Link href="https://www.behance.net/gallery/184304483/cafecarve-coffeeshop-case-study" ><a target="_blank">
                                    <Image src={cafeCrave} alt='Cafe Crave Coffee Shop Case Study' className='' />
                                    <h3 className='font24White mt-3'>CafeCrave Coffeeshop Case Study</h3>
                                </a></Link>
                            </div>
                            <div className='d-flex justify-content-start flex-wrap gap-4 my-5'>
                                <div className='portfolioContentWidth'>
                                    <Link href="https://dribbble.com/shots/23062399-NFT-Website-Design" target="_blank"><a target="_blank">
                                        <Image src={nft} alt='NFT Website Design' className='' />
                                        <h3 className='font20White mt-3'>NFT Website Design</h3>
                                    </a></Link>
                                </div>
                                <div className='portfolioContentWidth'>
                                    <Link href="https://dribbble.com/shots/23350321-Travel-Agency-Website-design" target="_blank"><a target="_blank">
                                        <Image src={barAndRes} alt='Bar & restaurant Website Design' className='' />
                                        <h3 className='font20White mt-3'>Travel Agency Website Design</h3>
                                    </a></Link>
                                </div>
                                <div className='portfolioContentWidth'>
                                    <Link href="https://dribbble.com/shots/22262915-Real-estate-website-design" target="_blank"><a target="_blank">
                                        <Image src={realEstate} alt='Real Estate Website Design' className='' />
                                        <h3 className='font20White mt-3'>Real Estate Website Design</h3>
                                    </a></Link>  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PortfolioComponent;