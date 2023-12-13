import Image from 'next/image';
import React from 'react';
import logo from "../public/images/logo/visualsage-logo.png";
import Link from 'next/link';

const Header = () => {

    return (
        <div>
            <nav className="navbar navbar-expand-lg sticky-top navbar-dark" >
                <div className="container">
                    <Link href="#"><a className="navbar-brand"><Image src={logo} alt="visualsage-logo" className="navbar-logo" /></a></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link href="#"><a className="nav-link active" aria-current="page" >Home</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link href="#about"><a className="nav-link active" aria-current="page" >About</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link href="#service"><a className="nav-link active" aria-current="page" >Service</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link href="#skills"><a className="nav-link active" aria-current="page" >Skills</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link href="#portfolio"><a className="nav-link active" aria-current="page" >Portfolios</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link href="#testimoial"><a className="nav-link active" aria-current="page" >Testimonial</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link href="#contact"><a className="nav-link active" aria-current="page" >Contact</a></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;