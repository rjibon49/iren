/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesUp, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ContactComponent = () => {
    return (
        <>
            <div className='container contactHeight alignCenter' id='about'>
                <div className='row w-100 justify-content-end'>
                    <div className='col-xxl-7 col-xl-7 col-lg-7 col-md-12 col-sm-12 col-xs-12'>
                        <div>
                            <div className='mb-5'>
                                <span className='sectionTitleFont'><FontAwesomeIcon icon={faEnvelope} className='me-4'/>CONTACT</span>
                            </div>
                            <div className=''>
                                <form className="d-flex justify-content-between flex-wrap gap-4">
                                    <div className="col-md-5">
                                        <label for="inputName" className="form-label mb-2">FULL NAME <span className='colorText'>*</span></label>
                                        <input type="text" required className="form-control" id="inputName" placeholder='Your Full Name' />
                                    </div>
                                    <div className="col-md-5">
                                        <label for="inputEmail4" className="form-label mb-2">EMAIL <span className='colorText'>*</span></label>
                                        <input type="email" required className="form-control" id="inputEmail4" placeholder='Your Email Address' />
                                    </div>
                                    <div className="col-md-5">
                                        <label for="inputPhone" className="form-label mb-2">PHOTNE <span className='colorText999'>(optional)</span></label>
                                        <input type="text" className="form-control" id="inputPhone" placeholder='Your Phone Number' />
                                    </div>
                                    <div className="col-md-5">
                                        <label for="inputSubject" className="form-label mb-2">SUBJECT <span className='colorText'>*</span></label>
                                        <input type="text" required className="form-control" id="inputSubject" placeholder='Select a subject' />
                                    </div>
                                    <div className="col-md-5">
                                        <label for="inputBudget" className="form-label mb-2">BUDGET <span className='colorText999'>(optional)</span></label>
                                        <input type="text" className="form-control" id="inputBudget" placeholder='A range budget for your project' />
                                    </div>
                                    <div className="col-md-9 messageForm">
                                        <label for="inutMessage" className="form-label mb-2">MESSAGE</label>
                                        <textarea className="form-control" id="inutMessage" rows="5"></textarea>
                                    </div>
                                    <div className='col-md-5 mb-3'>
                                        <label className="custom-file-input d-flex align-items-center" for="attachment">
                                            <FontAwesomeIcon icon={faAnglesUp} className='me-3 iconStyle'/> <span className='font12White'>ADD AN ATTACHMENT</span>
                                            <input type="file" id="attachment" name="attachment" />
                                        </label>
                                    </div>
                                    <div class="col-12">
                                        <button type="submit" className="btnMessage font12White">SEND MESSAGE</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactComponent;