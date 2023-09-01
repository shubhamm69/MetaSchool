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
import TeacherView from './page/TeacherView';
import Course from './page/Course';
import LMS from './page/LMS'
import ChatBot from './components/chatbot'
import Profile from './page/Profile';
import Login from './page/Login';
import Quiz from './page/Quiz';


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
      <div style={{display:"flex", width: "100vw", backgroundColor:"black"}}>

      {/* <Navbar /> */}
      {/* <Courses /> */}
      {/* <TeacherView /> */}
      {/* <Course /> */}
      {/* <VideoClass /> */}
      {/* <LMS/> */}
      {/* <ChatBot/> */}
      {/* <Profile name='Suraj Shah' email='surajshah.bombay@gmail.com'/> */}
      <Login/>
      {/* <Quiz /> */}
      </div>
    </div>
  );
}

export default App;
