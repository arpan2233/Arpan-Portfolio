import React, { useState } from "react";
import { projects } from "../projects";
import ProjectCard from "./ProjectCardEntry";
function Project(){
    const [clicked, setClicked] =  useState("");
    const expand = projects.filter(element => {
        return element.title === clicked;
    })
    var expandit;
    expand.length === 0 ? expandit = {title:"Empty"} :expandit = expand[0];
    return (
        <section id="project-section">
            <h1>Projects</h1>
            <div className="projects">
                <div className="expanded">
                    {expandit.title === "Empty" ? <div className="not-expanded"><h3>Click on Expand to know more about the Project.</h3>
                    <img src="https://media4.giphy.com/media/qgQUggAC3Pfv687qPC/200w.gif?cid=6c09b952z4rto4ztltjivohaxf03iu5od7v827hc20gej0lm&ep=v1_gifs_search&rid=200w.gif&ct=g"/> </div>:
                    (<div className="expandit">
                        <div className="expanded-heading"><h2>{expandit.title}</h2></div>
                        <hr/>
                        <div className="expanded-content"><p>{expandit.content}</p></div>
                        <div className="link">
                            <a href={expandit.githubRepo}>GitHub Repo⫸</a>
                            {expandit.isWebsite && <a href={expandit.websiteLink}>Website Link</a>}
                        </div>
                    </div> )  }
                    
                </div>
                <div className="all-projects-outer">
                    <div className="all-projects">
                        {projects.map(element => 
                        <ProjectCard 
                            key={element.key}
                            title={element.title}
                            isWebsite={element.isWebsite}
                            websiteLink={element.websiteLink}
                            githubRepo={element.githubRepo}
                            content={element.content}
                            onClick={setClicked}
                            /> 
                        )}
                    </div>
                </div>
            </div>  
        </section>
    )
}
export default Project;