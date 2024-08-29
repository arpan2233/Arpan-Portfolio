import React from "react";
import experience from "./experincedata";
function ExperienceCards(props){
    return (
        <div className="experience-card">
            <div className="experience-heading"><h4>{props.title}</h4></div>
            <div className="horizontal-rule"><hr/></div>
            <div className="experience-content"><p>{props.content}</p></div>
            <div className="experience-duration">
                <p>{props.duration}</p>
                {props.isCredentials && <a className="experience-credentials" href="https://acrobat.adobe.com/id/urn:aaid:sc:AP:17d9e051-c87e-40c7-a423-69e91832b742">Credential</a>}
            </div>
            
        </div>
    );
}
function Experience() {
    return <section id="experience-section">
        <h1>Experience</h1>
        <div className="experience">
            {experience.map(element => 
            <ExperienceCards
                title={element.title}
                content={element.content}
                isCredentials={element.isCredentials}
                Credential={element.Credential}
                duration={element.duration}
            />)}
        </div>
    </section>
}
export default Experience;