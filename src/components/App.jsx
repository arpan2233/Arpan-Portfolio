import React from "react";
import Navbar from "./Navbar";
import Intro from "./Intro";
import Skills from "./Skills";
import Project from "./Projects";
import Experience from "./Exprience";
import About from "./About";
import ContactForm from "./Form";
import Footer from "./Footer";
function App() {
    return (
        <div>
            <Navbar />
            <Intro />
            <About/>
            <Skills/>
            <Project/>
            <Experience/>
            <ContactForm/>
            <Footer/>
        </div>
    );
    
}
export default App;