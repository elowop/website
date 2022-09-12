import React, {useState} from "react"
import test_frog from '../images/test_frog.jpeg'
import './introduction.css';

import TypeAnimation from 'react-type-animation';
import { IconButton } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Introduction = () => {  

    return(
        <div className="go_content">
            <div className="title_flex">
                <div className="container">
                    <div className="crop">
                        <img src={test_frog} className="format"/>
                    </div>
                </div>
                <div className="title">
                    <span><h1>Hi, I'm </h1></span>
                    <TypeAnimation
                        cursor={true}
                        sequence={[
                        'a developer',
                        2000,
                        'jimmy.',
                        2000,
                        ]}
                        wrapper="h1"
                        repeat={Infinity}
                    />
                </div>
            </div>
            <div className="go_down">
                <h4>Check out my work</h4>
            </div>
            <div className="go_down" style={{marginTop: "-1% !important"}}>
                <IconButton>
                    <KeyboardArrowDownIcon/>
                </IconButton>
            </div>
        </div>
    );
}

export default Introduction
