import React, {useState, props} from "react"
import frog_blue from "../images/frog_blue.jpeg"
import "./project_entry.css"

const project_entry = (props) => {
    const handleClick = () => {

    }

    return (
    <div onClick={() => handleClick} className="entry_flex">
        <div className="image_div">
            <img src={frog_blue} style={{width: "330px", 
            height: "300px",
             objectFit: "cover",
             borderRadius: "10px"}}/>
        </div>
        <div className="project_title">
            <h2>this is a harry</h2>
        </div>
        <div className="project_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Phasellus venenatis dictum nibh, id tincidunt tortor commodo id. 
            Nunc sed est non enim laoreet malesuada. Curabitur facilisis mauris purus, 
            vel bibendum odio molestie tincidunt. Curabitur lobortis mauris lectus, a semper odio aliquam eu. 
            Nam mauris ex, facilisis tempor venenatis eget, tristique a lacus. Phasellus eu semper dolor. Nunc tempor dictum fringilla. 
            In eu auctor libero. Sed sollicitudin, ipsum semper aliquam malesuada, quam ex tempor turpis, 
            eget finibus neque orci sed urna. Maecenas ac sodales augue.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Phasellus venenatis dictum nibh, id tincidunt tortor commodo id. 
            Nunc sed est non enim laoreet malesuada. Curabitur facilisis mauris purus, 
            vel bibendum odio molestie tincidunt. Curabitur lobortis mauris lectus, a semper odio aliquam eu. 
            Nam mauris ex, facilisis tempor venenatis eget, tristique a lacus. Phasellus eu semper dolor. Nunc tempor dictum fringilla. 
            In eu auctor libero. Sed sollicitudin, ipsum semper aliquam malesuada, quam ex tempor turpis, 
            eget finibus neque orci sed urna. Maecenas ac sodales augue.
        </div>

    </div>);
};

export default project_entry; 