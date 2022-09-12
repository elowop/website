// import React, {useState, props} from "react"


// const INDEX_DRAW_JOINT_INDEX = 4
// const INDEX_LANDMARK_INDEX = 1 

// const DrawImage = (predictions, ctx, props) => {
//     if(predictions.length > 0 && props.isPointing) {
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

// export default DrawImage