import Image from 'next/image';
import React from 'react';
import logo from "../public/images/logo/visualsage-logo.png";
import Link from 'next/link';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const Header = () => {
    const scrollToAbout = () => {
        scroll.scrollTo('#about', {
          duration: 500,
          smooth: true,
        });
      };
    const scrollToResume = () => {
        scroll.scrollTo('#resume', {
          duration: 500,
          smooth: true,
        });
      };
    const scrollToService = () => {
        scroll.scrollTo('#service', {
          duration: 500,
          smooth: true,
        });
      };
    const scrollToSkills= () => {
        scroll.scrollTo('#skills', {
          duration: 500,
          smooth: true,
        });
      };
    const scrollToPortfolio= () => {
        scroll.scrollTo('#portfolio', {
          duration: 500,
          smooth: true,
        });
      };
    const scrollToContact= () => {
        scroll.scrollTo('#contact', {
          duration: 500,
          smooth: true,
        });
      };
    return (
        <div>
            <nav className="navbar navbar-expand-lg fixed-top navbar-dark" style={{background:"#191919"}}>
                <div className="container">
                    <Link href="/"><a className="navbar-brand"><Image src={logo} alt="visualsage-logo" className="navbar-logo" /></a></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link href="#"><a className="nav-link active" aria-current="page" >Home</a></Link>
                            </li>
                            <li className="nav-item">
                                {/* <Link href="#about"><a className="nav-link" aria-current="page">About</a></Link> */}
                                <ScrollLink
                                    to="about"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    className="nav-link"
                                    onClick={scrollToAbout}
                                    >
                                    About
                                </ScrollLink>
                            </li>
                            <li className="nav-item">
                                {/* <Link href="#resume"><a className="nav-link " aria-current="page" >Resume</a></Link> */}
                                <ScrollLink
                                    to="resume"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    className="nav-link"
                                    onClick={scrollToResume}
                                    >
                                    Resume
                                </ScrollLink>
                            </li>
                            <li className="nav-item">
                                {/* <Link href="#service"><a className="nav-link " aria-current="page" >Service</a></Link> */}
                                <ScrollLink
                                    to="service"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    className="nav-link"
                                    onClick={scrollToService}
                                    >
                                    Service
                                </ScrollLink>
                            </li>
                            <li className="nav-item">
                                {/* <Link href="#skills"><a className="nav-link " aria-current="page" >Skills</a></Link> */}
                                <ScrollLink
                                    to="skills"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    className="nav-link"
                                    onClick={scrollToSkills}
                                    >
                                    Skills
                                </ScrollLink>
                            </li>
                            <li className="nav-item">
                                {/* <Link href="#portfolio"><a className="nav-link " aria-current="page" >Portfolios</a></Link> */}
                                <ScrollLink
                                    to="portfolio"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    className="nav-link"
                                    onClick={scrollToPortfolio}
                                    >
                                    Portfolios
                                </ScrollLink>
                            </li>
                            {/* <li className="nav-item">
                                <Link href="#testimoial"><a className="nav-link " aria-current="page" >Testimonial</a></Link>
                            </li> */}
                            <li className="nav-item">
                                {/* <Link href="#contact"><a className="nav-link " aria-current="page" >Contact</a></Link> */}
                                <ScrollLink
                                    to="contact"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    className="nav-link"
                                    onClick={scrollToContact}
                                    >
                                    Contact
                                </ScrollLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;