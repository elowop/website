import React, {useState, props} from "react"
import './navbar.css';

const Navbar = (props) => {

    

    return(
        <div className="navbar_flex">
            <div className="button_box">
                <button>personal</button>
            </div>
            <div className="button_box">
                <button
                    onClick={() => props.toggleWebcam()}
                >webcam</button>
            </div>
            <div className="button_box">
                <button>about</button>
            </div>
            <div className="button_box">
                <button>login</button>
            </div>
        </div>
    );
}

export default Navbar