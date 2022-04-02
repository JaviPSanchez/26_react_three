import { useBox } from "@react-three/cannon";

const Floor = (props) => {
  const [ref, api] = useBox(() => ({ args: [20, 1, 10], ...props }));
  return (
    <mesh ref={ref} api={api} {...props} receiveShadow>
      <boxBufferGeometry args={[200, 0.5, 200]} />
      <meshPhysicalMaterial
        // transparent
        color={"white"}
        opacity={0.9}
      ></meshPhysicalMaterial>
      {/* <shadowMaterial opacity={0.2} /> */}
    </mesh>
  );
};

export default Floor;
