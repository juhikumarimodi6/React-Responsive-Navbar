import React from "react";
import {FaInstagramSquare, FaFacebookSquare,FaYoutubeSquare} from "react-icons/fa";
import './Navbar.css';
import {GiHamburgerMenu} from 'react-icons/gi';


const Navbar = () => {

    const [showMenu, setShowMenu] = React.useState(false);

    return (
        <>
            <nav className="main-nav">
                <div className="logo">
                    <h2>
                        Home Baker
                    </h2>
                </div>
                <div className={
            showMenu ? "menu-link mobile-menu-link" : "menu-link"
          }>
                    <ul className="menu">
                        <li>
                            <a href="#Home">Home</a>
                        </li>
                        <li>
                            <a href="#About">About</a>
                        </li>
                        <li>
                            <a href="#Services">Services</a>
                        </li>
                        <li>
                            <a href="#Contact">Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="social-media">
                    <ul className="social-media-desktop">
                        <li>
                            <a href = "https://www.youtube.com/" target = "_blank"><FaYoutubeSquare className="youtube" /></a>
                        </li>
                        <li>
                            <a href = "https://www.facebook.com/" target = "_blank"><FaFacebookSquare className="facebook" /></a>
                        </li>
                        <li>
                            <a href = "https://www.instagram.com/" target = "_blank"><FaInstagramSquare className="instagram" /></a>
                        </li>
                    </ul>
                    <div className="hamburger-menu">
                        <a href = "#hamburger" onClick = {() => setShowMenu(!showMenu)}><GiHamburgerMenu /></a>
                    </div>
                </div>
            </nav>

            <section className="hero-section">
                <p>Welcome to</p>
                <h2>Home Baker</h2>
            </section>
        </>
    )
}

export default Navbar;