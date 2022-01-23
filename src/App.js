import "./App.css";
import { Canvas } from "react-three-fiber";
import { Suspense } from "react"; //useRef API
import Orbit from "./components/Orbit";
import Box from "./components/Box";
import Background from "./components/Background";
import Floor from "./components/Floor";
import ColorPicker from "./components/ColorPicker";
import Bulb from "./components/Bulb";
// import Cars from "./components/Cars";
// import CameraControls from "./components/CameraControls";
// import CameraButtons from "./components/CameraButtons";
// import Lights from "./components/Lights";
// import Effects from "./components/Effects";
// import Spinner from "./components/Spinner";

function App() {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <ColorPicker />
      <Canvas
        shadows
        style={{ background: "black" }}
        camera={{ position: [7, 7, 7] }}
      >
        {/* <fog attach="fog" args={["white", 1, 10]} /> */}
        <ambientLight intensity={0.2} />
        <Bulb position={[0, 3, 0]} />
        <Orbit />
        <axesHelper args={[5]} />
        <Suspense fallback={null}>
          <Box position={[-4, 1, 0]} />
        </Suspense>
        <Suspense fallback={null}>
          <Box position={[4, 1, 0]} />
        </Suspense>
        <Suspense fallback={null}>
          <Background position={[0, 1, 0]} />
        </Suspense>
        <Floor position={[0, -0.5, 0]} />
      </Canvas>
    </div>
  );
}

export default App;
