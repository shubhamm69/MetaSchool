import logo from './logo.svg';
import { useMemo } from 'react';
import './App.css';
import { extend, useLoader } from '@react-three/fiber'
import * as THREE from "three";
import { Canvas } from '@react-three/fiber'
import {OrbitControls, useFBX} from '@react-three/drei'
import {  Vector3 } from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import Navbar from './components/navbar';
import Layout from './components/Layout';
import Courses from './page/Courses';
import VideoClass from './page/VideoClass';

function App() {
  
  const BasicMaterial = new  THREE.MeshBasicMaterial({color: new THREE.Color("#520B3E")})

  const treeMaterial = useLoader(MTLLoader, "tree.mtl");
  const tree = useLoader(OBJLoader, "tree.obj", (loader) => {
    treeMaterial.preload();
    loader.setMaterials(treeMaterial);
  })
  const bush = useFBX("BushSmall.fbx")
  return (
    <div className="App">
      {/* <Canvas
        shadows
        className={"canvas"}
        camera={{
          position: [6,6,7],
      }}>
        <ambientLight intensity={5} /> 
        <primitive object={bush} scale={0.05} />
        <OrbitControls />
      </Canvas> */}
      {/* <Navbar /> */}
      {/* <Courses /> */}
      <VideoClass />
    </div>
  );
}

export default App;
