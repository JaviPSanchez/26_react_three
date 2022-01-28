import "./App.css";
import { Canvas } from "react-three-fiber";
import { Physics } from "@react-three/cannon";
import { Suspense } from "react"; //useRef API
import Orbit from "./components/Orbit";
// import Box from "./components/Box";
import Background from "./components/Background";
import Floor from "./components/Floor";
import ColorPicker from "./components/ColorPicker";
import Moto from "./components/Moto";
import CameraControls from "./components/CameraControls";
import CameraButtons from "./components/CameraButtons";
import Lights from "./components/Lights";
import Effects from "./components/Effects";
// import Spinner from "./components/Spinner";

function App() {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <ColorPicker />
      <CameraButtons />
      <Canvas
        gl={{
          powerPreference: "high-performance",
          antialias: false,
          stencil: false,
          depth: false,
        }}
        shadows
        style={{ background: "black" }}
        camera={{ position: [20, 10, 20] }}
      >
        {/* <fog attach="fog" args={["white", 1, 10]} /> */}
        <CameraControls />
        {/* <axesHelper args={[5]} /> */}
        <Orbit />
        <Lights />

        <Suspense fallback={null}>
          <Background position={[0, 0, 0]} />
        </Suspense>
        <Physics>
          <Moto />
          {/* <Suspense fallback={null}>
              <Box position={[-4, 1, 0]} />
            </Suspense>
            <Suspense fallback={null}>
              <Box position={[4, 1, 0]} />
            </Suspense> */}
          <Floor position={[0, 1, 0]} />
        </Physics>
        <Effects />
      </Canvas>
    </div>
  );
}

export default App;
