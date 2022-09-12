import React from "react"
import placeholder from '../images/placeholder.jpeg'

import ParticleImage, { ParticleOptions, Vector, forces } from "react-particle-image"
import {useState} from "react"
import "./particlelogo.css"


const particleOptions = {
    filter: ({ x, y, image }) => {
      const pixel = image.get(x, y);
      return pixel.b !== 255 && pixel.g !== 255 && pixel.r !== 255;
    },
    color: ({ x, y, image }) => "#000000",
    radius: () => 0.3,
    initialVelocity: ({image}) => new Vector((Math.random() - .5)*10, (Math.random() - 1)*10)
  };

const motionForce = (x, y) => {
  return forces.disturbance(x, y, 50)
};


const ParticleLogo = () => {  
  
  return (
      <div className="centering">
          <ParticleImage
            style={{width: "400px", height: "400px"}}
            src={placeholder}
            scale={0.40}
            entropy={5}
            maxParticles={10000}
            particleOptions={particleOptions}
            mouseMoveForce={motionForce}
            mouseMoveForceDuration={100000}
            backgroundColor="#FFFFFF"
          />
      </div>
  );
}

export default ParticleLogo