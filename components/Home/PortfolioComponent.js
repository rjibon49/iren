import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripVertical } from '@fortawesome/free-solid-svg-icons';
import cafeCrave from "../../public/images/content/cafecarve-coffeeshop.png";
import nft from "../../public/images/content/NFT-website-Design.png";
import barAndRes from "../../public/images/content/Bar&RestaurantWebsite.png";
import realEstate from "../../public/images/content/Real-Estate_Website.png";
import Image from 'next/image';

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
                                <h1 className='font48 mb-5'>Featured<span className='font48Color'> Projects</span></h1>
                            </div>
                            <div>
                                <Image src={cafeCrave} alt='Cafe Crave Coffee Shop Case Study' className='' />
                                <h3 className='font24White mt-3'>CafeCrave Coffeeshop Case Study</h3>
                            </div>
                            <div className='d-flex justify-content-start flex-wrap gap-4 my-5'>
                                <div className='portfolioContentWidth'>
                                    <Image src={nft} alt='NFT Website Design' className='' />
                                    <h3 className='font20White mt-3'>NFT Website Design</h3>
                                </div>
                                <div className='portfolioContentWidth'>
                                    <Image src={barAndRes} alt='Bar & restaurant Website Design' className='' />
                                    <h3 className='font20White mt-3'>Bar & restaurant Website Design</h3>
                                </div>
                                <div className='portfolioContentWidth'>
                                    <Image src={realEstate} alt='Real Estate Website Design' className='' />
                                    <h3 className='font20White mt-3'>Real Estate Website Design</h3>
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