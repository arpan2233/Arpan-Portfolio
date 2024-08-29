import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
function Navbar() {
    const isDesktop = useMediaQuery({query: '(min-width: 800px)'});
    const [isShown, setShown] = useState(false);
    // if(isDesktop) setShown(false);
    // 
    return (
        <nav className={isDesktop ? "navbar" : (isShown ? "navbarOpen" : "navbarClosed")}>
                <div className="static-navbar">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#f0f8ff"><path d="M440-183v-274L200-596v274l240 139Zm80 0 240-139v-274L520-457v274Zm-80 92L160-252q-19-11-29.5-29T120-321v-318q0-22 10.5-40t29.5-29l280-161q19-11 40-11t40 11l280 161q19 11 29.5 29t10.5 40v318q0 22-10.5 40T800-252L520-91q-19 11-40 11t-40-11Zm200-528 77-44-237-137-78 45 238 136Zm-160 93 78-45-237-137-78 45 237 137Z"/></svg>
                    {!isDesktop && (!isShown ? <div><svg className="navButton" onClick={() => {isShown ? setShown(false):setShown(true)}} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFF"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></div>
                    : 
                    <div><svg className="navButton" onClick={() => {isShown ? setShown(false):setShown(true)}}  xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFF"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></div>)}
                </div>
                {(isShown || isDesktop ) && <div className="dynamic-navbar">   
                    <a href="#about-section"><h4>About Me</h4></a>
                    <a href="#skills"><h4>Skills</h4></a>
                    <a href="#project-section"><h4>Projects</h4></a>
                    <a href="#experience-section"><h4>Experience</h4></a>
                    <a href="#footer-section"><h4>Socials</h4></a>
                </div> }
        </nav>
    )
}

export default Navbar;