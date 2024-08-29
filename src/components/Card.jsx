import React from "react";
import { DevelopmentTools, Frameworks, Languages, TechSkills } from "../SkillData"
import TechEntry from "./SkillCardEntries/TechEntry";
import IconEntry from "./SkillCardEntries/IconEntry";
const [frontend, backend] = Frameworks;
function Card(props) {
    if(props.option === "Tech-Skills"){
        return <div className="card card-tech-skills">
            {TechSkills.map(element => <TechEntry title={element.title} content={element.content}/>)}
        </div>
    } else if(props.option === "Frameworks"){
        return <div className="card card-frameworks">
            <div className="front-end">
                <h2>Front-End</h2>
                {frontend.map(element => <IconEntry title={element.title} url={element.url}/>)}
            </div>
            <div className="back-end">
                <h2>Back-End</h2>
                {backend.map(element => <IconEntry title={element.title} url={element.url}/>)}
            </div>
        </div>
    } else if(props.option === "Development-Tools") {
        return <div className="card card-dev-tools">
            {DevelopmentTools.map(element => <IconEntry title={element.title} url={element.url}/>)}
        </div>
    } else {
        return <div className="card card-Languages">
            {Languages.map(element => <IconEntry title={element.title} url={element.url}/>)}
        </div>
    }
}
export default Card;