"use client";
import { extend, useLoader } from '@react-three/fiber'
import * as THREE from "three";
import { Canvas } from '@react-three/fiber'
import Image from 'next/image'
import css from './globals.css'
import {  Vector3 } from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { DDSLoader } from "three-stdlib";

// import obj from './Lowpoly_tree_sample.obj'
THREE.DefaultLoadingManager.addHandler(/\.dds$/i, new DDSLoader());

// function Floor(props) {
//   return (
//     <mesh {...props} recieveShadow>
//       <boxBufferGeometry args={[20,1,10]} />
//       <meshPhysicalMaterial color='white' />
//     </mesh>
//   );
// }

function TreeBush(props) {
  return (
    <mesh position={new Vector3(props.pos[0], props.pos[1], props.pos[2])} scale={new Vector3(props.scale[0], props.scale[1], props.scale[2])}>
      <boxGeometry />
      <meshLambertMaterial color={props.color} />
    </mesh>
  )
}

export default function Home() {
  const materials = useLoader(MTLLoader, "tree.mtl");
  const tree = useLoader(OBJLoader, "tree.obj", (loader) => {
    materials.preload();
    loader.setMaterials(materials);
  })
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Canvas
        shadows
        className={css.canvas}
        camera={{
          position: [6,6,7],
        }}>
        {/* <ambientLight color={"white"} intensity={0.3} />
        <Floor /> */}
        <ambientLight intensity={1} />
        
        <directionalLight color="red" position={[0, 0, 5]} />
        {/* <group>  */}
        <primitive object={tree} />

        {/* <TreeBush pos={[0, 0, 0.5]} scale={[4,4,4]} color={"#33cc33"}/>
        <TreeBush pos={[0, 0, 0]} scale={[4,4, 4]} color={"#33cc33"}/>  */}
        {/* <TreeBush pos={[0.4, 1.7, -0.5]} scale={[0.7,0.7,0.7]} color={"#33cc33"}/> */}
        {/* <TreeBush pos={[0.4, 1.7, -0.5]} scale={[1,2,1]} color={"#33cc33"}/> */}

        {/* <TreeBush pos={[0, 1.2, 0]} scale={[1.1,0.5,1.1]} color={"#33cc33"}/>
        <TreeBush pos={[0, 1.2, 0]} scale={[1,2,1]} color={"#33cc33"}/>
        <TreeBush pos={[0, -1, 0]} scale={[2.4,0.8,2.4]} color={"#33cc33"}/> */}
        {/* </group> */}
        {/* <TreeBush pos={[0.4, 1.7, -0.5]} scale={[1,2,1]} color={"#33cc33"}/>
        <TreeBush pos={[0.4, 1.7, -0.5]} scale={[1,2,1]} color={"#33cc33"}/> */}
      </Canvas>
    </main>
  )
}
