import * as THREE from "three";
// Object1: "Object_21"
// Object2: "Object_20"
// Object3: "Object_22"
const objects = ("Object_20", "Object_21", "Object_22");
// Keep track of our current mesh
const state = {
  activeMesh: {},
  activeMeshName: objects,
  //Camera Position
  //X --> Red
  //Y --> Green
  //Z --> Blue
  cameraPos: new THREE.Vector3(12, 12, 12),
  target: new THREE.Vector3(4, 0, 0),
  shouldUpdate: true,
};

export default state;
