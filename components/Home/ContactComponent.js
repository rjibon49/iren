/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesUp, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { sendContactForm } from '../../lib/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons';
import YouTube from 'react-youtube';
import SocialIcons from './Misc/SocialIcons';

const ContactComponent = () => {

    const videoOpts = {
        height: '280',
        width: '100%',
        playerVars: {
          autoplay: 0, // set to 1 if you want it to autoplay
          controls: 0,
          disablekb: 1,
          iv_load_policy: 3,
          modestbranding: 1,
          showinfo: 0,
        },
      };

    const initialValues = {
        name: "",
        email: "",
        number: "",
        budget: "",
        subject: "",
        message: "",
        attachment: null, // Track the selected file
    };

    const [state, setState] = useState({
        values: initialValues,
        isLoading: false,
        error: null,
    });

    const { values, isLoading, error } = state;

    const handleChange = ({ target }) => {
        // Check if the target is a file input
        if (target.type === 'file') {
            // Update the state with the selected file
            setState((prev) => ({
                ...prev,
                values: {
                    ...prev.values,
                    attachment: target.files[0], // Assuming single file selection
                },
            }));
        } else {
            // Update the state for other input fields
            setState((prev) => ({
                ...prev,
                values: {
                    ...prev.values,
                    [target.name]: target.value,
                },
            }));
        }
    };

    const onSubmit = async (event) => {
        event.preventDefault();
    
        // Check if required fields are empty
        const requiredFields = ['name', 'email', 'subject', 'message'];
        const emptyFields = requiredFields.filter(field => !values[field]);
    
        if (emptyFields.length > 0) {
            // Show error toast for empty fields
            toast.error(`Please fill in the required fields: ${emptyFields.join(', ')}`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            return;
        }
    
        // Start loading
        setState((prev) => ({
            ...prev,
            isLoading: true,
        }));
    
        try {
            // Pass the selected file to the sendContactForm function
            await sendContactForm(values);
    
            // Reset form fields after successful submission
            setState({
                values: initialValues,
                isLoading: false,
                error: null,
            });
    
            // Show success toast
            toast.success('Message sent successfully!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        } catch (error) {
            // Stop loading on error
            setState((prev) => ({
                ...prev,
                isLoading: false,
                error: error.message,
            }));
    
            // Show error toast
            toast.error('Failed to send message. Please try again.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        } finally {
            // Reset button text to "SEND MESSAGE" after success or error
            setState((prev) => ({
                ...prev,
                isLoading: false,
            }));
        }
    };

    return (
        <>
            <div className='container' id='contact'>
                <div className='row w-100 justify-content-between gap-5'>
                    <div className='col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                        <div className='mb-5'>
                            <span className='sectionTitleFont'><FontAwesomeIcon icon={faEnvelope} className='me-3 fs-5'/>CONTACT</span>
                        </div>
                        <div className=''>
                            <form className="row gap-4" onSubmit={onSubmit}>
                                <div className="col-md-5 form-group">
                                    <label htmlFor="inputName" className="form-label mb-2">FULL NAME <span className='colorText'>*</span></label>
                                    <input type="text" autoComplete="off" required className="form-control" id="inputName" placeholder='Your Full Name' value={values.name} name="name" onChange={handleChange} />
                                </div>
                                <div className="col-md-5 form-group">
                                    <label htmlFor="inputEmail4" className="form-label mb-2">EMAIL <span className='colorText'>*</span></label>
                                    <input type="email" autoComplete="off" required className="form-control" id="inputEmail4" placeholder='Your Email Address' value={values.email} name="email" onChange={handleChange} />
                                </div>
                                <div className="col-md-5 form-group">
                                    <label htmlFor="inputSubject" className="form-label mb-2">SUBJECT <span className='colorText'>*</span></label>
                                    <input type="text" autoComplete="off" required className="form-control" id="inputSubject" placeholder='Select a subject' value={values.subject} name="subject" onChange={handleChange} />
                                </div>
                                <div className="col-md-5 form-group">
                                    <label htmlFor="inputPhone" className="form-label mb-2">PHONE <span className='colorText999'>(optional)</span></label>
                                    <input type="text" autoComplete="off" className="form-control" id="inputPhone" placeholder='Your Phone Number' value={values.number} name="number" onChange={handleChange} />
                                </div>
                                <div className="col-md-10 messageForm form-group">
                                    <label htmlFor="inutMessage" className="form-label mb-2">MESSAGE</label>
                                    <textarea className="form-control" id="inutMessage" rows="5" value={values.message} name="message" onChange={handleChange}></textarea>
                                </div>
                                <div className='col-md-5 mb-3 form-group' >
                                    <label className="custom-file-input d-flex align-items-center" htmlFor="attachment">
                                        <FontAwesomeIcon icon={faAnglesUp} className='me-3 iconStyle'/>{' '}<span className='font12White'> {values.attachment ? values.attachment.name : 'ADD AN ATTACHMENT'}</span>
                                        <input type="file" id="attachment" name="attachment" onChange={handleChange} />
                                    </label>
                                </div>
                                <div className="col-12">
                                    <button className="btnMessage font12White" onClick={onSubmit} disabled={isLoading}>
                                        {isLoading ? (
                                            <div className="d-flex justify-content-center btnMessageSpin">
                                                <div className="spinner-border spinner-border-sm" role="status">
                                                    <span className="visually-hidden">Loading...</span>
                                                </div>
                                            </div>
                                        ) : 'SEND MESSAGE'}
                                    </button>
                                    <ToastContainer />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='col-xxl-5 col-xl-5 col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                        <div className='alignCenter justify-content-center'>
                            <div className='text-center'>
                                <p className='font16 footerContent'>Subscribe for Creative Brilliance: Elevate Your User Experience with a Skilled UI/UX Designer!</p>
                                <div className='d-flex justify-content-evenly flex-wrap'>
                                    <Link href="https://www.youtube.com/@visualsageux"><a><button className='subscribeBtn'><FontAwesomeIcon icon={faCirclePlay} className='me-3'/>Subscribe Me</button></a></Link>
                                    <Link href="https://www.fiverr.com/designerirenn"><a><button className='hireButton'>HIRE ME!</button></a></Link>
                                </div>
                                {/* <div className='mt-5'>
                                    <ReactPlayer url='https://www.youtube.com/embed/wkhVXxU-H9E?si=Pt1N4iJlvG8WCeeO' width="100%" height="250px" />
                                </div> */}
                                {/* <div className='mt-5 text-center'>
                                    <iframe width="100%" height="280" loading='lazy' src="https://www.youtube.com/embed/wkhVXxU-H9E?si=Z0X1FsSqFkFvIZpB&amp;controls=0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                </div> */}
                                <div className='mt-5'>
                                    <YouTube
                                        videoId="wkhVXxU-H9E"
                                        opts={videoOpts}
                                        className="youtube-video"
                                        sandbox="allow-scripts"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='mt-5 iconWidth ms-auto me-auto'>
                            <SocialIcons />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactComponent;