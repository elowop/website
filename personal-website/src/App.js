import './App.css';
import {useState} from 'react'
import Navbar from './components/navbar'
import ParticleLogo from "./components/particlelogo"
import ShowWebcam from "./components/showWebcam"
import Introduction from "./components/introduction"
import Projects from "./components/projects"
import DrawingModule from "./components/drawingModule"

function App() {

  const [webcamStatus, setWebcamStatus] = useState(false)
  const [isDrawing, setIsDrawing] = useState(false)



  const toggleWebcam = () => {
    console.log("toggling webcam")
    setWebcamStatus(!webcamStatus)
  }

  const toggleDrawing = () => {
    console.log("toggling drawing")
    setIsDrawing(!isDrawing)
}

  return (
    <div className="App">
      <Navbar
        webcamStatus={webcamStatus}
        toggleWebcam={toggleWebcam}
      />
      {/* <>
        {webcamStatus ? 
          <div>
            <ShowWebcam/>
          </div> : null}
      </> */}
      <DrawingModule
        isDrawing={isDrawing}
        toggleDrawing={toggleDrawing}
        webcamStatus={webcamStatus}
      />
      <ParticleLogo/>
      <Introduction/>
      <Projects/>

      <h1>hello</h1>
      <div style={{height: "1000px"}}>this is where I am</div>
    </div>
  );
}

export default App;
