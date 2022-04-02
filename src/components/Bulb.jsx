// import { useEffect, useRef } from "react";
// import { useThree } from "react-three-fiber";

const Bulb = (props) => {
  return (
    <mesh {...props}>
      <pointLight
        castShadow
        shadow-mapSize-height={2 ** 10}
        shadow-mapSize-width={2 ** 10}
        shadow-radius={10}
      />
      <sphereBufferGeometry args={[0.2, 20, 20]} />
      <meshPhongMaterial emissive="white" />
    </mesh>
  );
};

export default Bulb;
