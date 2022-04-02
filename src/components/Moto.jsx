import { Suspense } from "react";
import BoundingBox from "./BoundingBox";
import Model from "./Model";
import Dragable from "./Dragable";
// import { useRef } from "react";
// import { useLoader, useFrame } from "react-three-fiber";
import { useBox } from "@react-three/cannon";
import * as THREE from "three";

const Moto = (props) => {
  const [ref, api] = useBox(() => ({ mass: 20, ...props }));
  // const texture = useLoader(
  //   THREE.TextureLoader,
  //   "../public/moto/textures/bike_lowblinn6SG_baseColor.png"
  // );
  // useFrame((state) => {
  //   ref.current.rotation.x += 0.01;
  //   ref.current.rotation.y += 0.01;
  // });
  return (
    <Suspense fallback={null}>
      <Dragable transformGroup>
        <BoundingBox
          // visible
          position={[0, 3, 0]}
          dims={[3, 4.5, 10]}
          offset={[0, -2, 0]}
        >
          <Model
            ref={ref}
            api={api}
            {...props}
            path="/moto/scene.gltf"
            scale={new Array(3).fill(10)}
            position={[0, 0, 0]}
          >
            <meshPhysicalMaterial
            // map={texture}
            // color="white"
            // fog={false}
            // opacity={0.7}
            // transparent
            // visible={false}
            // wireframe
            // metalness={1}
            // roughness={0}
            // clearcoat={1}
            // transmission={0.5}
            // reflectivity={1}
            // side={THREE.DoubleSide} NOT WORKING
            />
          </Model>
        </BoundingBox>
      </Dragable>
    </Suspense>
  );
};

export default Moto;
