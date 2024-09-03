import React from "react";
import { Link } from "react-router-dom";
import Logo from '../../resources/image/logo.svg';
function Footer(){
    return (
        <footer className="d-flex flex-wrap justify-content-center align-items-end py-3 mt-5 border-top">
            <div className="d-flex align-items-end" >
                <Link to="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                    <img src={Logo} width={60} alt="참방"></img>
                </Link>
                <span className="mb-3 mb-md-0 text-muted">© 2024 참방. All rights reserved</span>
            </div>
            
        </footer>
    );
}

export default Footer;