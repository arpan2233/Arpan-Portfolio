import React from "react";
function IconEntry(props) {
    return <div className="icon" >
        <img src={props.url} />
        <h5>{props.title}</h5>
    </div>
}
export default IconEntry;