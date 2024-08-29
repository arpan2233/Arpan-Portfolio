import React from "react";
function ProjectCard(props){
    return (<div className="project-card">
        <div className="heading"><h4>{props.title}</h4></div> 
        <div className="content"><p>{props.content.substring(0,50)}....</p></div> 
        <div className="link">
            <a href={props.githubRepo}>GitHub Repo⫸</a>
            {props.isWebsite && <a href={props.websiteLink}>Website Link</a>}
        </div>
        <div className="expand">
            <button onClick={() => props.onClick(props.title)}>Expand</button>
            <button onClick={() => props.onClick("")}>Controct</button>
        </div> 
    </div>);
}
export default ProjectCard;