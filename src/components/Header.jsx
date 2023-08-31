import React from "react";
import '../App.css';
import logoImage from '../images/Tangerine-removebg-preview.png';


const Header = () => {

    return (
        <div className="Header">
            <header className="App-header">
                <div className='header-menu'>
                    <div className='header-menu-logo'>
                        <img src={logoImage} alt='Logo' className='header-menu-logo-png'></img>
                    </div>
                    <div className='header-menu-components'>
                        <span>m&m's</span>
                        <span>Cadbury</span>
                        <span>Toblerone</span>
                        
                        {/* <span>About</span>
                        <span>FAQ</span>
                        <span>Contact</span> */}
                    </div>
                </div>
            </header>
        </div>
    );

}

export default Header;