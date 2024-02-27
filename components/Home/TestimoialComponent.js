/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Autoplay, Pagination, Navigation} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
// import "swiper/css/effect-cube";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import { faComments } from '@fortawesome/free-regular-svg-icons';
import dummy from "../../public/images/content/userDummy.png";
import Image from 'next/image';

const comments = [ {
    "name": "Anthony",
    "designation": "CEO",
    "company": "Project OASIS",
    "message": "Incredible talent! Iren not only delivered a visually appealing website but also ensured a smooth and enjoyable user experience. A true asset to any project.",
    "projets": "12+",
    "jobType": "Remote Job"
},{
    "name": "Reyes Lee",
    "designation": "Founder",
    "company": "",
    "message": "Iren is a true professional. They not only delivered a visually appealing design but also considered the user journey, resulting in an interface that is both aesthetically pleasing and highly functional. Highly recommend!",
    "projets": "3+",
    "jobType": "Freelance Job"
},{
    "name": "Stephen Frick",
    "designation": "CO-Founder",
    "company": "",
    "message": "Working with Iren was an absolute pleasure! Their attention to detail and creative flair transformed our vision into a visually stunning and user-friendly interface. We're thrilled with the results!",
    "projets": "4+",
    "jobType": "Freelance Job"
}]


const TestimoialComponent = () => {
    
    return (
        <>
            <div className='container' id='testimonial'>
                <div className='row w-100 justify-content-start'>
                    <div className='col-xxl-7 col-xl-7 col-lg-7 col-md-12 col-sm-12 col-xs-12'>
                        <div>
                            <div className='mb-5'>
                                <span className='sectionTitleFont'><FontAwesomeIcon icon={faComments} className='me-3 fs-5'/>TESTIMONIAL</span>
                            </div>
                            <div className=''>
                                <h1 className='font48 '>Trusted by <span className='colorText'>Hundered Clients</span></h1>
                            </div>
                            <div className='sliderbg'>
                                <div className="sliderItem">
                                    <Swiper
                                        slidesPerView={1}
                                        spaceBetween={30}
                                        loop={true}
                                        autoplay={{
                                        delay: 4000,
                                        disableOnInteraction: false,
                                        }}
                                        // navigation={true}
                                    pagination={{
                                    clickable: true,
                                    }}
                                        breakpoints={{
                                            640: {
                                                slidesPerView: 1,
                                                spaceBetween: 20,
                                            },
                                            768: {
                                                slidesPerView: 1,
                                                spaceBetween: 40,
                                            },
                                            1024: {
                                                slidesPerView: 1,
                                                spaceBetween: 20,
                                            },
                                            1440: {
                                                slidesPerView: 1,
                                                spaceBetween: 20,
                                            },
                                        }}
                                        modules={[Autoplay, Navigation, Pagination]}
                                        className="mySwiper py-5"
                                        >
                                            {comments.map((comment) => (
                                                <SwiperSlide key={comment.name}>
                                                    <div className='testimonialItem' >
                                                        <div className='d-flex justify-content-start gap-3'>
                                                            <div>
                                                            <Image src={dummy} alt='User Icon' className='' />
                                                            </div>
                                                            <div>
                                                            <p className='font18White p-0 m-0'>{comment.name}</p>
                                                            <p className='font14c999 p-0 m-0'>
                                                                {comment.designation} 
                                                                {comment.company ? (
                                                                    <span><span> of </span> <span className='colorText'>{comment.company}</span></span>
                                                                ) : null}
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <p className='font24White my-5'>{comment.message}</p>
                                                        </div>
                                                        <div className='d-flex justify-content-start gap-4'>
                                                            <span className='font12White'>{comment.projets} Projects</span>
                                                            <span className='font12White'>|</span>
                                                            <span className='font12White'>{comment.jobType}</span>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            ))}
                                                
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TestimoialComponent;