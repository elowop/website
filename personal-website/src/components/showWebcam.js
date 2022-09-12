// import { HandPose } from "@tensorflow-models/handpose";
import React, {useRef, useState, useEffect} from "react";
import Webcam from "react-webcam";

import * as tf from '@tensorflow/tfjs';
import * as handpose from '@tensorflow-models/handpose'

import * as fp from "fingerpose"


const joints = {
    thumb: [0, 1, 2, 3, 4],
    index: [0, 5, 6, 7, 8],
    middle: [0, 9, 10, 11, 12],
    ring: [0, 13, 14, 15, 16],
    pinky: [0, 17, 18, 19, 20]
}

const INDEX_LANDMARK_INDEX = 8

const ShowWebcam = (props) => {

    const webcamRef = useRef(null)
    const canvasRef = useRef(null)
    const contextRef = useRef(null)

    const [initialLocation, setInitialLocation] = useState({x: 0, y: 0})

    const [indexIsPointing, setIndexIsPointing] = useState(false)
    const [clearCanvas, setClearCanvas] = useState(false)

    const [isDrawing, setIsDrawing] = useState(false)

    // const [test, setTest] = useState(false)

    // const [isDrawing, setIsDrawing] = useState(props.isDrawing)

    // useEffect(() => {
    //     if (props.isDrawing !== isDrawing) {
    //         setIsDrawing(props.isDrawing);
    //     }
    // }, [props.isDrawing])


    useEffect(() => {

        // if (props.isDrawing !== isDrawing) {
        //     setIsDrawing(props.isDrawing);
        // }
        // if (test !== isDrawing) {
        //     setTest(isDrawing)
        // }

        if (isDrawing) {
            const canvas = canvasRef.current
            canvas.width = webcamRef.current.video.videoWidth
            canvas.height = webcamRef.current.video.videoHeight

            const context = canvasRef.current.getContext("2d")
            context.scale(2, 2);
            context.lineCap = "round";
            context.strokeStyle = "black";
            context.lineWidth = 5;
            contextRef.current = context;
            context.beginPath()
            context.moveTo(initialLocation.x, initialLocation.y)
        }
    }, [isDrawing])

    const toggleDrawing = (prev) => {
        setIsDrawing((prevState) => {
            return !prevState
        })
    }

    const drawWithIndex = (predictions, ctx) => {
        if(predictions.length > 0 ) {
            predictions.forEach((prediction) => {
                const landmarks = prediction.landmarks
                // 1. get coords
                let coords = landmarks[INDEX_LANDMARK_INDEX]
                // 2. draw move to predictions x, y
                ctx.lineTo(coords[0], coords[1])
                // ctx.moveTo(coords[0], coords[1])
                // 3. draw line to x, y
                ctx.stroke()

                
                // ctx.beginPath()
                // ctx.moveTo(prevIndexPos.x, prevIndexPos.y)
                // console.log("prev x: " + prevIndexPos.x + " y: " + prevIndexPos.y)
                // console.log("current x: " + coords[0] + " y: " + coords[1])
                // ctx.lineTo(coords[0], coords[1])
                // ctx.strokeStyle = "blue"
                // ctx.lineWidth = 4
                // ctx.stroke()
                // ctx.save()
                // setPrevIndexPos({x: coords[0], y: coords[1]})
            })
        }
    }

    const drawHand = (predictions, ctx) => {
        console.log("2." + isDrawing)
        if(predictions.length > 0) {
            predictions.forEach((prediction) => {
                const landmarks = prediction.landmarks
                setInitialLocation({x: landmarks[INDEX_LANDMARK_INDEX][0], y: landmarks[INDEX_LANDMARK_INDEX][1]})
                for (let i = 0; i < Object.keys(joints).length; i++) {
                    let finger = Object.keys(joints)[i]
                    for (let j = 0; j < joints[finger].length - 1; j++) {
                        const first = joints[finger][j]
                        const second = joints[finger][j + 1]
    
                        ctx.beginPath()
                        ctx.moveTo(
                            landmarks[first][0],
                            landmarks[first][1]
                        )
                        ctx.lineTo(
                            landmarks[second][0],
                            landmarks[second][1]
                        )
                        ctx.strokeStyle = "blue";
                        ctx.lineWidth = 4;
                        ctx.stroke()
                    }
                }
    
    
                for (let i = 0; i < landmarks.length; i++) {
                    const x = landmarks[i][0]
                    const y = landmarks[i][1]
                    ctx.beginPath()
                    ctx.arc(x, y, 5, 0, 3 * Math.PI)
    
                    ctx.fillStyle = "red"
                    ctx.fill()
                }
            })
        }
    }


    const runHandpose = async () => {
        const net = await handpose.load()

        setInterval(() => {
            detect(net)
        }, 100)
    }

    const toggleClearCanvas = () => {
        setClearCanvas(!clearCanvas)
    }

    const detect = async (net) => {
        if (typeof webcamRef.current !== "undefined" &&
            webcamRef.current !== null && webcamRef.current.video.readyState === 4) {
                const video = webcamRef.current.video
                const videoWidth = webcamRef.current.video.videoWidth
                const videoHeight = webcamRef.current.video.videoHeight

                webcamRef.current.video.width = videoWidth
                webcamRef.current.video.height = videoHeight

                canvasRef.current.width = videoWidth
                canvasRef.current.height = videoHeight

                const hand = await net.estimateHands(video)

                if (hand.length > 0) {
                    const pointGesture = new fp.GestureDescription('index_point')
                    for(let finger of [fp.Finger.Middle, fp.Finger.Ring, fp.Finger.Pinky]) {
                        pointGesture.addCurl(finger, fp.FingerCurl.FullCurl, 1.0);
                        pointGesture.addCurl(finger, fp.FingerCurl.HalfCurl, 0.9);
                      }
                    pointGesture.addCurl(fp.Finger.Thumb, fp.Finger.HalfCurl)
                    pointGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpRight, 0.9)
                    pointGesture.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl);
                    pointGesture.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalUp, 1.0);

                    const GE = new fp.GestureEstimator([
                        pointGesture
                    ])

                    const gesture = await GE.estimate(hand[0].landmarks, 7)
                    // console.log(gesture?.gestures[0]?.name)

                    // if (gesture.gestures.length > 0) {
                    //     setIndexIsPointing(true)
                    //     toggleClearCanvas()
                    // }
                }
                const ctx = canvasRef.current.getContext("2d")
                if (isDrawing) {
                    drawWithIndex(hand, ctx)
                } else {
                    drawHand(hand, ctx)
                }
        }
    }

    runHandpose();

    return (
        <>
            <div>
                <Webcam ref={webcamRef}
                style={{
                    position: "absolute",
                    marginLeft: "auto",
                    marginRight: "auto",
                    left: 0, 
                    right: 0, 
                    textAlign: "center",
                    zindex: 9,
                    width: 640,
                    height: 480
                }}
                />
                <canvas ref={canvasRef}
                    style={{
                        position: "absolute",
                        marginLeft: "auto",
                        marginRight: "auto",
                        left: 0, 
                        right: 0, 
                        textAlign: "center",
                        zindex: 9,
                        width: 640,
                        height: 480}}
                />
            </div>
            <div>
                <button onClick={() => toggleDrawing(isDrawing)}
                        disabled={!props.webcamStatus}>
                    Start Drawing!
                </button>
            </div>
        </>
    );
}

export default ShowWebcam