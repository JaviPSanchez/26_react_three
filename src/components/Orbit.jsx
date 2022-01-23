import { extend, useThree } from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
extend({ OrbitControls });

const Orbit = () => {
  // const state = useThree();
  const { camera, gl } = useThree();
  return <orbitControls args={[camera, gl.domElement]} />;
};

export default Orbit;
