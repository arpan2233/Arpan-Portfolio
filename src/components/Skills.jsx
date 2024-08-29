import React, { useState } from "react";
import Card from "./Card";
var headsArr = ["Tech-Skills", "Frameworks", "Development-Tools", "Languages"];
var count = 0;
function Skills() {
    const [skill, setSkill] = useState("Tech-Skills");
    const [TStyle, setTStyle] = useState(0);
    const [FStyle, setFStyle] = useState(-1);
    const [DStyle, setDStyle] = useState(-1);
    const [LStyle, setLStyle] = useState(-1);
    const Notclicked = {backgroundColor:"white",color:"blue"};
    const clicked = {backgroundColor:"blue",color:"white"};
    return (
        <section id="skills">
            <h1>Skills</h1>
            <div className="skill-table">
                <div className="skill-headings">
                    <button className="Tech-Skills" style={count===TStyle?clicked:Notclicked}
                    onClick={() => {
                        setSkill("Tech-Skills");
                        count++;
                        setTStyle(count);
                        }}>Technical Skills</button>
                    <button className="Frameworks" style={count===FStyle?clicked:Notclicked}
                    onClick={() => {
                        setSkill("Frameworks")
                        count++;
                        setFStyle(count);
                        }}>FrameWorks</button>
                    <button className="Development-Tools" style={count===DStyle?clicked:Notclicked}
                    onClick={() => {
                        setSkill("Development-Tools")
                        count++;
                        setDStyle(count);
                        }}>Development Tools</button>
                    <button className="Languages" style={count===LStyle?clicked:Notclicked}
                    onClick={() => {
                        setSkill("Languages")
                        count++;
                        setLStyle(count);
                        }}>Languages</button>
                </div>
                <Card option={skill}/>
            </div>
        </section>
    )
}
export default Skills;
