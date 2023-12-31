/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesUp, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { sendContactForm } from '../../lib/api';

const ContactComponent = () => {

    const initlValues = {
        name: "",
        email: "",
        number: "",
        budget: "",
        subject: "",
        message: ""
    }
    const initState = {values: initlValues}

    const [state, setState] = useState(initState);

    const {values, isLoding, error} = state;

    const handleChange = ({target}) => setState((prev) => ({
        ...prev,
        values: {
            ...prev.values,
            [target.name]: target.value
        }
    }))

    const onSubmit = async () => {
        setState((prev) => ({
            ...prev,
            isLoding: true
        }));
        try {
            await sendContactForm(values)
        } catch (error) {
            setState((prev) => ({
                ...prev,
                isLoding: false,
                error:error.message,
            }));
        }
    };

    return (
        <>
            <div className='container contactHeight alignCenter' id='contact'>
                <div className='row w-100 justify-content-end'>
                    <div className='col-xxl-7 col-xl-7 col-lg-7 col-md-12 col-sm-12 col-xs-12'>
                        <div>
                            <div className='mb-5'>
                                <span className='sectionTitleFont'><FontAwesomeIcon icon={faEnvelope} className='me-4'/>CONTACT</span>
                            </div>
                            <div className=''>
                                <form className="row gap-5">
                                    <div className="col-md-5 form-group">
                                        <label for="inputName" className="form-label mb-2">FULL NAME <span className='colorText'>*</span></label>
                                        <input type="text" required className="form-control" id="inputName" placeholder='Your Full Name' value={values.name} name="name" onChange={handleChange} />
                                    </div>
                                    <div className="col-md-5 form-group">
                                        <label for="inputEmail4" className="form-label mb-2">EMAIL <span className='colorText'>*</span></label>
                                        <input type="email" required className="form-control" id="inputEmail4" placeholder='Your Email Address' value={values.email} name="email" onChange={handleChange} />
                                    </div>
                                    <div className="col-md-5 form-group">
                                        <label for="inputPhone" className="form-label mb-2">PHOTNE <span className='colorText999'>(optional)</span></label>
                                        <input type="text" className="form-control" id="inputPhone" placeholder='Your Phone Number' value={values.number} name="number" onChange={handleChange} />
                                    </div>
                                    <div className="col-md-5 form-group">
                                        <label for="inputSubject" className="form-label mb-2">SUBJECT <span className='colorText'>*</span></label>
                                        <input type="text" required className="form-control" id="inputSubject" placeholder='Select a subject' value={values.subject} name="subject" onChange={handleChange} />
                                    </div>
                                    <div className="col-md-5 form-group">
                                        <label for="inputBudget" className="form-label mb-2">BUDGET <span className='colorText999'>(optional)</span></label>
                                        <input type="text" className="form-control" id="inputBudget" placeholder='A range budget for your project' value={values.budget} name="budget" onChange={handleChange} />
                                    </div>
                                    <div className="col-md-9 messageForm form-group">
                                        <label for="inutMessage" className="form-label mb-2">MESSAGE</label>
                                        <textarea className="form-control" id="inutMessage" rows="5" value={values.message} name="message" onChange={handleChange}></textarea>
                                    </div>
                                    <div className='col-md-5 mb-3' form-group>
                                        <label className="custom-file-input d-flex align-items-center" for="attachment">
                                            <FontAwesomeIcon icon={faAnglesUp} className='me-3 iconStyle'/> <span className='font12White'>ADD AN ATTACHMENT</span>
                                            <input type="file" id="attachment" name="attachment" />
                                        </label>
                                    </div>
                                    {
                                        error && (
                                            <p style={{color:"red", fontSize:"18px", fontWeight:"700",margin:"10px 0px", textAlign:"center" }}>{error}</p>
                                        )
                                    }
                                    <div className="col-12">
                                        <button className="btnMessage font12White" onClick={onSubmit} isLoding={isLoding}>{" "}SEND MESSAGE</button>
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

// disabled={!values.name || !values.email || values.subject || !values.message}