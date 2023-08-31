import React from "react";
import './Component.css';
import tangerineLogo from '../images/Tangerine-removebg-preview.png';
import { ReactSocialMediaIcons } from "react-social-media-icons";

const Footer = () => {

    return (
        <div className="Footer">
            <div className="Footer-body">
                <div className="Footer-body-logo">
                    <img src={tangerineLogo} alt='Logo' className='header-menu-logo-png'></img>
                </div>
                <div className="Footer-body-contents">
                    <span>m&m's</span><br></br>
                    <span>Cadbury</span><br></br>
                    <span>Toblerone</span><br></br>
                </div>
                <div className="Footer-body-contents">
                    <span>About Us</span><br></br>
                    <span>Contact Us</span><br></br>
                    <span>FAQ</span><br></br>
                </div>
            </div>
            <div className="Footer-social-logos">
                <ReactSocialMediaIcons borderColor="rgba(0, 0, 0, 0)" icon="twitter" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(0, 0, 0, 0.48)" />
                <ReactSocialMediaIcons borderColor="rgba(0, 0, 0, 0)" icon="facebook" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(0, 0, 0, 0.48)" />
                <ReactSocialMediaIcons borderColor="rgba(0, 0, 0, 0)" icon="instagram" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(0, 0, 0, 0.48)" />
                <ReactSocialMediaIcons borderColor="rgba(0, 0, 0, 0)" icon="pinterest" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(0, 0, 0, 0.48)" />
            </div>
        </div>
    );

}

export default Footer;