import React from "react";
import Typewriter from "typewriter-effect";
function Intro() {
    return (
        <div className="intro">
            <div className="intro-img"></div>
            <div className="intro-content">
                <div>
                    <h2>I AM A</h2>
                    <strong><h1 className="broad-intro"><Typewriter 
                        options={{
                            strings: ["Full-Stack Web Developer", "Competetive Programmer"],
                            autoStart: true,
                            loop:true,
                            deleteSpeed:40,
                            cursor:"_"
                        }}
                    /></h1></strong>
                </div>
                <div>
                    <div className="first"></div>
                    <div className="second"></div>
                    <div className="third"></div>
                    <div className="fourth"></div>
                    <div className="fifth"></div>
                    <img src="https://avatars.githubusercontent.com/u/118041697?v=4" />
                </div>
            </div>
        </div>
    );
    
}

export default Intro;