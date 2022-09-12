import ShowWebcam from "./showWebcam"
import React, {useState, props, useEffect} from 'react'

const DrawingModule = (props) => {

    return(
        <>
            {props.webcamStatus ? 
                <ShowWebcam
                    // isDrawing={isDrawing}
                    webcamStatus={props.webcamStatus}
                /> : null
            }
        </>
    );
}

export default DrawingModule