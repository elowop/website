import React, {useState, props} from "react"
import "./projects.css"

import ProjectEntry from "./project_entry"

const projects = (props) => {
    const handleClick = () => {

    }

    return (
    <div>
        <div className="project_title_box">
            <h2>Projects</h2>
        </div>
        <div className="carosel">
            <ProjectEntry/>
        </div>
    </div>);
};

export default projects; 