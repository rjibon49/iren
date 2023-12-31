/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesUp, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { sendContactForm } from '../../lib/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons';
import { faBehance, faDribbble, faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import ReactPlayer from 'react-player'

const ContactComponent = () => {
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
            <div className='container contactHeight alignCenter' id='contact'>
                <div className='row w-100 justify-content-between gap-5'>
                    <div className='col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                        <div className='mb-5'>
                            <span className='sectionTitleFont'><FontAwesomeIcon icon={faEnvelope} className='me-4'/>CONTACT</span>
                        </div>
                        <div className=''>
                            <form className="row gap-4" onSubmit={onSubmit}>
                                <div className="col-md-5 form-group">
                                    <label for="inputName" className="form-label mb-2">FULL NAME <span className='colorText'>*</span></label>
                                    <input type="text" required className="form-control" id="inputName" placeholder='Your Full Name' value={values.name} name="name" onChange={handleChange} />
                                </div>
                                <div className="col-md-5 form-group">
                                    <label for="inputEmail4" className="form-label mb-2">EMAIL <span className='colorText'>*</span></label>
                                    <input type="email" required className="form-control" id="inputEmail4" placeholder='Your Email Address' value={values.email} name="email" onChange={handleChange} />
                                </div>
                                <div className="col-md-5 form-group">
                                    <label for="inputSubject" className="form-label mb-2">SUBJECT <span className='colorText'>*</span></label>
                                    <input type="text" required className="form-control" id="inputSubject" placeholder='Select a subject' value={values.subject} name="subject" onChange={handleChange} />
                                </div>
                                <div className="col-md-5 form-group">
                                    <label for="inputPhone" className="form-label mb-2">PHONE <span className='colorText999'>(optional)</span></label>
                                    <input type="text" className="form-control" id="inputPhone" placeholder='Your Phone Number' value={values.number} name="number" onChange={handleChange} />
                                </div>
                                {/* <div className="col-md-5 form-group">
                                    <label for="inputBudget" className="form-label mb-2">BUDGET <span className='colorText999'>(optional)</span></label>
                                    <input type="text" className="form-control" id="inputBudget" placeholder='A range budget for your project' value={values.budget} name="budget" onChange={handleChange} />
                                </div> */}
                                <div className="col-md-10 messageForm form-group">
                                    <label for="inutMessage" className="form-label mb-2">MESSAGE</label>
                                    <textarea className="form-control" id="inutMessage" rows="5" value={values.message} name="message" onChange={handleChange}></textarea>
                                </div>
                                <div className='col-md-5 mb-3 form-group' >
                                    <label className="custom-file-input d-flex align-items-center" for="attachment">
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
                                    <Link href="https://www.upwork.com/freelancers/~013a1545ed7b7f3fad"><a><button className='hireButton'>HIRE ME!</button></a></Link>
                                </div>
                                <div className='mt-5'>
                                    <ReactPlayer url='https://www.youtube.com/embed/wkhVXxU-H9E?si=Pt1N4iJlvG8WCeeO' width="100%" height="250px" />
                                </div>
                            </div>
                        </div>
                        <div className=''>
                            
                        </div>
                        <div>
                            <div className='d-flex align-items-center justify-content-evenly iconWidth mt-5 mx-auto'>
                                <Link href="https://www.facebook.com/visualsageux"><a><FontAwesomeIcon icon={faFacebook} className='socialIcon' /></a></Link> 
                                <Link href="https://twitter.com/irenaktar"><a><FontAwesomeIcon icon={faTwitter} className='socialIcon' /></a></Link> 
                                <Link href="https://dribbble.com/irenaktar"><a><FontAwesomeIcon icon={faDribbble} className='socialIcon' /></a></Link> 
                                <Link href="https://www.linkedin.com/in/irenaktar"><a><FontAwesomeIcon icon={faLinkedin} className='socialIcon' /></a></Link> 
                                <Link href="https://www.instagram.com/visualsageux/"><a><FontAwesomeIcon icon={faInstagram} className='socialIcon' /></a></Link> 
                                <Link href="https://www.behance.net/irenaktar2/"><a><FontAwesomeIcon icon={faBehance} className='socialIcon' /></a></Link> 
                                {/* <Link href="https://www.youtube.com/@visualsage0"><a><FontAwesomeIcon icon={faYoutube} className='socialIcon' /></a></Link>
                                <Link href="https://medium.com/@irenaktar2"><a><FontAwesomeIcon icon={faMedium} className='socialIcon' /></a></Link>  */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactComponent;