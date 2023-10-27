import logo from './logo.svg';
import { useMemo } from 'react';
import React from 'react';
import * as ReactDOM from "react-dom/client";
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
import AvatarMaker from './page/AvatarMaker';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Signup from './page/Signup';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "/signup",
    element: <Signup/>,
  },
  {
    path: "/course",
    element: <Course/>  
  },
  {
    path: "/courses",
    element: <Courses/>  
  },
  {
    path: "/profile",
    element: <Profile/>  
  },
  {
    path: "/teacher",
    element: <TeacherView/>  
  },
  {
    path: "/videocall",
    element: <VideoClass/>
  },
  {
    path: '/lms',
    element: <LMS/>
  },
  {
    path: '/quiz',
    element: <Quiz/>
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


function App() {
  
  return (
    <div className="App">
      <div style={{display:"flex", width: "100vw", backgroundColor:"black"}}>
      
      <RouterProvider router={router} />
      </div>
      </div>
    
  );
}

export default App;
