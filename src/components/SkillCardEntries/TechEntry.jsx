import React from "react";
function TechEntry(props) {
    return <div className="tech-entry">
        <h3>{props.title}</h3>
        <hr/>
        <p>{props.content}</p>
    </div>
}
export default TechEntry;