// import React from "react"

// const joints = {
//     thumb: [0, 1, 2, 3, 4],
//     index: [0, 5, 6, 7, 8],
//     middle: [0, 9, 10, 11, 12],
//     ring: [0, 13, 14, 15, 16],
//     pinky: [0, 17, 18, 19, 20]
// }

// export const drawHand = (predictions, ctx) => {
//     if(predictions.length > 0) {
//         predictions.forEach((prediction) => {
//             const landmarks = prediction.landmarks

//             for (let i = 0; i < Object.keys(joints).length; i++) {
//                 let finger = Object.keys(joints)[i]
//                 for (let j = 0; j < joints[finger].length - 1; j++) {
//                     const first = joints[finger][j]
//                     const second = joints[finger][j + 1]

//                     ctx.beginPath()
//                     ctx.moveTo(
//                         landmarks[first][0],
//                         landmarks[first][1]
//                     )
//                     ctx.lineTo(
//                         landmarks[second][0],
//                         landmarks[second][1]
//                     )
//                     ctx.strokeStyle = "blue";
//                     ctx.lineWidth = 4;
//                     ctx.stroke()
//                 }
//             }


//             for (let i = 0; i < landmarks.length; i++) {
//                 const x = landmarks[i][0]
//                 const y = landmarks[i][1]
//                 ctx.beginPath()
//                 ctx.arc(x, y, 5, 0, 3 * Math.PI)

//                 ctx.fillStyle = "red"
//                 ctx.fill()
//             }
//         })
//     }
// }