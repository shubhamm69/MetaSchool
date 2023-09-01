import Layout from "../../components/Layout";
import React, { useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { useGLTF, useAnimations, OrbitControls, useScroll } from '@react-three/drei'
import { Link } from "react-router-dom";

import ButtonCard from "../../components/ButtonCard";
import ModuleCard from "../../components/ModuleCard";
import { AiFillVideoCamera, AiOutlineClockCircle } from "react-icons/ai";
import ModuleOverview from "../../components/ModuleOverview";
import Navbar from "../../components/navbar";

export default function Course(props) {
    const [module, setModule] = useState("");
    const [wid, setWidth] = useState(0);

    return (
        <div style={{display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '10vw', marginRight: '9vw'}}>
            <Navbar/>
        </div>
        <Layout title="Course 101" headers={
            <div style={{ display: "flex" }}>
                <Link to='/videocall'><ButtonCard icon={<AiFillVideoCamera fontSize={20} color='white' />} title="Join Class" /></Link>
            </div>
        }>
            <div style={{ display: "flex" }} >
                <div style={{ width: "80%", marginRight: 20 }}>
                    <Canvas camera={{ fov: 75, near: 0.1, far: 100, position: [8.6, 20, 25] }}>
                        <Suspense fallback={null}>
                            <ambientLight intensity={5} />
                            <River setWidth={setWidth} setModule={setModule} />
                        </Suspense>
                        <OrbitControls />
                    </Canvas>
                </div>
                <div style={{ maxHeight: "80vh", overflowY: "scroll" }}>
                    <h3>Modules (4 out of 5 completed)</h3>
                    <div style={{ maxHeight: "60vh", overflowY: "scroll" }}>
                        <ModuleCard title="Module 1" />
                        <ModuleCard title="Module 2" />
                        <ModuleCard title="Module 3" />
                        <ModuleCard title="Module 4" />
                        <ModuleCard title="Module 5" />
                    </div>
                    <h3>Upcoming</h3>
                    <div className='modulestats' style={{ width: "20vw", overflow: "hidden" }}>
                        <p> <AiOutlineClockCircle color="white" /> Class on: 2nd September</p>
                        <p> <AiOutlineClockCircle color="white" /> Quiz: 5pm 2nd September</p>
                        <p> <AiOutlineClockCircle color="white" /> Deadline for Assignment 5</p>
                    </div>
                </div>
            </div>  
            <ModuleOverview width={wid} module={module} setWidth={setWidth}/>
        </Layout>
        </div>
        
    )
}



export function River(props) {
    const group = useRef()
    const { nodes, materials, animations } = useGLTF('/river_village_-_low_poly.glb')
    const { actions } = useAnimations(animations, group)
    return (
        <group ref={group} {...props} dispose={null}>
            <group name="Sketchfab_Scene">
                <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
                    <group name="root">
                        <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
                            <group name="Empty_167" position={[2.049, 6.628, -0.529]} />
                            <group name="waterhole_1" position={[1.46, 1.123, 3.479]} rotation={[0, 1.191, -Math.PI]} scale={[-0.419, 0.059, 0.462]}>
                                <mesh name="Object_4" geometry={nodes.Object_4.geometry} material={materials['Material.015']} />
                            </group>
                            <group name="Cube007_2" position={[0.785, 1.498, -5.099]} rotation={[-3.139, -0.301, -3.141]} scale={[0.079, 0.032, 0.079]}>
                                <mesh name="Object_6" geometry={nodes.Object_6.geometry} material={materials['Material.015_0']} />
                            </group>
                            <group onClick={() => {
                                console.log("clicked")
                                props.setWidth(900);
                                props.setModule("Module 4")
                            }} name="hut_small_3" position={[2.824, 1.502, -8.2]} rotation={[0, 0.604, 0]} scale={[0.023, 0.03, 0.023]}>
                                <mesh name="Object_8" geometry={nodes.Object_8.geometry} material={materials['Material.015_1']} />
                            </group>
                            <group name="fence_2_4" position={[1.817, 1.483, -3.626]} rotation={[0.023, 1.113, -3.13]} scale={[-0.382, 0.054, 0.421]}>
                                <mesh name="Object_10" geometry={nodes.Object_10.geometry} material={materials['Material.015']} />
                            </group>
                            <group name="fence_1_5" position={[2.095, 1.343, -0.166]} rotation={[0, -0.453, -Math.PI]} scale={[-0.371, 0.052, 0.409]}>
                                <mesh name="Object_12" geometry={nodes.Object_12.geometry} material={materials['Material.015']} />
                            </group>
                            <group name="cover_wood_3004_6" position={[4.45, 1.611, 3.462]} rotation={[-1.453, -0.921, 1.104]} scale={[0.023, 0.52, 0.086]}>
                                <mesh name="Object_14" geometry={nodes.Object_14.geometry} material={materials['Material.015_2']} />
                            </group>
                            <group name="cover_wood_3001_7" position={[4.5, 1.411, 1.114]} rotation={[1.6, 0.07, 1.173]} scale={[0.015, 0.33, 0.055]}>
                                <mesh name="Object_16" geometry={nodes.Object_16.geometry} material={materials['Material.015_3']} />
                            </group>
                            <group name="cart_8" position={[0.686, 1.593, -8.216]} rotation={[-0.114, -0.334, 2.901]} scale={[-0.188, 0.026, 0.208]}>
                                <mesh name="Object_18" geometry={nodes.Object_18.geometry} material={materials['Material.015']} />
                            </group>
                            <group name="Steak2_9" position={[-1.33, 0.749, -1.09]} rotation={[Math.PI, -0.42, 0]} scale={[-0.011, 0.011, 0.011]}>
                                <mesh name="Object_20" geometry={nodes.Object_20.geometry} material={materials['Material.015_4']} />
                            </group>
                            <group name="Steak1_10" position={[5.548, -0.414, -2.224]} rotation={[0, 0.42, 0]} scale={0.005}>
                                <mesh name="Object_22" geometry={nodes.Object_22.geometry} material={materials['Material.015_4']} />
                            </group>
                            <group name="Table1001_11" position={[1.618, 1.476, 3.045]} rotation={[-0.238, -0.281, -0.066]} scale={[0.009, 0.01, 0.012]}>
                                <mesh name="Object_24" geometry={nodes.Object_24.geometry} material={materials['Material.015_5']} />
                                <mesh name="Object_25" geometry={nodes.Object_25.geometry} material={materials['Material.015_6']} />
                            </group>
                            <group name="box_12" position={[6.067, 1.456, -5.318]} rotation={[0, 0.42, -Math.PI]} scale={[-0.193, 0.027, 0.213]}>
                                <mesh name="Object_27" geometry={nodes.Object_27.geometry} material={materials['Material.015']} />
                            </group>
                            <group name="barrel_2_13" position={[1.032, 1.545, -8.42]} rotation={[-0.664, 0.787, 2.514]} scale={[-0.303, 0.042, 0.334]}>
                                <mesh name="Object_29" geometry={nodes.Object_29.geometry} material={materials['Material.015']} />
                            </group>
                            <group name="barrel_1_14" position={[1.356, 1.468, -8.691]} rotation={[0, 0.42, -Math.PI]} scale={[-0.335, 0.047, 0.369]}>
                                <mesh name="Object_31" geometry={nodes.Object_31.geometry} material={materials['Material.015']} />
                            </group>
                            <group name="bag_15" position={[0.681, 1.556, -8.196]} rotation={[-0.699, 1.145, -2.437]} scale={[-0.272, 0.038, 0.3]}>
                                <mesh name="Object_33" geometry={nodes.Object_33.geometry} material={materials['Material.015']} />
                            </group>
                            <group name="tree_3_16" position={[7.19, 1.404, -4.004]} rotation={[-Math.PI, 0.266, -Math.PI]} scale={[0.106, 0.125, 0.106]}>
                                <mesh name="Object_35" geometry={nodes.Object_35.geometry} material={materials['Material.015_7']} />
                            </group>
                            <group name="tree_2_17" position={[-2.7, 1.364, -5.603]} rotation={[-Math.PI, 0.921, -Math.PI]} scale={[0.192, 0.184, 0.192]}>
                                <mesh name="Object_37" geometry={nodes.Object_37.geometry} material={materials['Material.015_7']} />
                            </group>
                            <group name="tree_1_18" position={[8.805, 0.927, -5.498]} rotation={[0, -0.914, 0]} scale={[0.258, 0.304, 0.258]}>
                                <mesh name="Object_39" geometry={nodes.Object_39.geometry} material={materials['Material.015_7']} />
                            </group>
                            <group name="Cone_19" position={[-5.549, 4.635, 6.575]} rotation={[0.009, 0.366, -0.085]} scale={[2.671, 2.658, 2.658]}>
                                <mesh name="Object_41" geometry={nodes.Object_41.geometry} material={materials.gray} />
                                <mesh name="Object_42" geometry={nodes.Object_42.geometry} material={materials.obsidiana} />
                            </group>
                            <group name="rock_2003_21" position={[-3.318, 1.126, -1.326]} rotation={[0.14, -0.939, 1.745]} scale={1.198}>
                                <mesh name="Object_44" geometry={nodes.Object_44.geometry} material={materials['Material.015_8']} />
                            </group>
                            <group name="Cube023_22" position={[5.234, 1.512, -5.28]} rotation={[3.14, 0, -3.135]} scale={[0.06, 0.023, 0.06]}>
                                <mesh name="Object_46" geometry={nodes.Object_46.geometry} material={materials['Material.015_9']} />
                            </group>
                            <group name="Cube024_23" position={[5.678, 1.504, -5.928]} rotation={[-3.14, 1.201, -3.139]} scale={[0.055, 0.022, 0.055]}>
                                <mesh name="Object_48" geometry={nodes.Object_48.geometry} material={materials['Material.015_9']} />
                            </group>
                            <group name="Cube040_24" position={[4.079, 1.512, -6.659]} rotation={[-3.079, 1.221, 3.076]} scale={[0.06, 0.014, 0.06]}>
                                <mesh name="Object_50" geometry={nodes.Object_50.geometry} material={materials['Material.015_9']} />
                            </group>
                            <group name="rock_2005_25" position={[-8.158, 4.018, 0.524]} rotation={[1.418, -1.337, 2.847]} scale={1.21}>
                                <mesh name="Object_52" geometry={nodes.Object_52.geometry} material={materials['Material.015_8']} />
                            </group>
                            <group name="rock_2004_26" position={[-8.11, 4.007, 1.729]} rotation={[-3.117, -0.726, -1.496]} scale={1.204}>
                                <mesh name="Object_54" geometry={nodes.Object_54.geometry} material={materials['Material.015_8']} />
                            </group>
                            <group name="Cube001_27" position={[1.529, 1.51, -4.907]} rotation={[-3.053, -0.581, -3.081]} scale={[0.062, 0.015, 0.062]}>
                                <mesh name="Object_56" geometry={nodes.Object_56.geometry} material={materials['Material.015_9']} />
                            </group>
                            <group name="tree_1013_28" position={[-7.827, 4.143, 0.306]} rotation={[0, 1.063, 0]} scale={[0.308, 0.362, 0.308]}>
                                <mesh name="Object_58" geometry={nodes.Object_58.geometry} material={materials['Material.015_7']} />
                            </group>
                            <group name="rock_1001_29" position={[-0.956, 4.427, 5.234]} rotation={[0.439, 0.396, -1.117]} scale={[0.616, 0.317, 0.708]}>
                                <mesh name="Object_60" geometry={nodes.Object_60.geometry} material={materials['Material.015_10']} />
                            </group>
                            <group name="rock_5003_30" position={[6.632, 1.032, 1.593]} rotation={[0.11, 0.591, -0.107]} scale={[0.542, 0.313, 0.476]}>
                                <mesh name="Object_62" geometry={nodes.Object_62.geometry} material={materials['Material.015_11']} />
                            </group>
                            <group name="Cube002_31" position={[10.19, 0.932, -1.669]} rotation={[0.496, 0.93, -0.894]} scale={[0.237, 0.399, 0.215]}>
                                <mesh name="Object_64" geometry={nodes.Object_64.geometry} material={materials['stone.002']} />
                            </group>
                            <group name="rock_1002_32" position={[-3.829, 0.959, -5.94]} rotation={[1.026, 0.845, -0.412]} scale={[0.646, 0.333, 0.742]}>
                                <mesh name="Object_66" geometry={nodes.Object_66.geometry} material={materials['Material.015_10']} />
                            </group>
                            <group name="grass_1a003_33" position={[2.79, 1.569, -5.328]} rotation={[-0.951, -1.242, -0.654]} scale={[0.022, 0.043, 0.001]}>
                                <mesh name="Object_68" geometry={nodes.Object_68.geometry} material={materials['Material.015_12']} />
                            </group>
                            <group name="grass_1a004_34" position={[2.251, 1.497, -3.498]} rotation={[-2.664, -0.995, -1.979]} scale={[0.019, 0.026, 0.001]}>
                                <mesh name="Object_70" geometry={nodes.Object_70.geometry} material={materials['Material.015_12']} />
                            </group>
                            <group name="grass_1a005_35" position={[2.708, 1.5, -1.89]} rotation={[-2.968, 0.838, -2.97]} scale={[0.018, 0.017, 0.001]}>
                                <mesh name="Object_72" geometry={nodes.Object_72.geometry} material={materials['Material.015_12']} />
                            </group>
                            <group name="grass_3002_36" position={[-1.541, 4.897, 4.581]} rotation={[1.601, 0.82, -1.98]} scale={[0.149, 0.149, 0.13]}>
                                <mesh name="Object_74" geometry={nodes.Object_74.geometry} material={materials['Material.015_12']} />
                            </group>
                            <group name="grass_3003_37" position={[6.208, 1.394, 1.209]} rotation={[-2.737, 1.273, 2.388]} scale={[0.087, 0.087, 0.075]}>
                                <mesh name="Object_76" geometry={nodes.Object_76.geometry} material={materials['Material.015_12']} />
                            </group>
                            <group name="grass_1a006_38" position={[5.417, 1.326, 1.206]} rotation={[0.075, -1.396, -0.054]} scale={[0.019, 0.026, 0.001]}>
                                <mesh name="Object_78" geometry={nodes.Object_78.geometry} material={materials['Material.015_12']} />
                            </group>
                            <group name="grass_1a007_39" position={[7.179, 1.901, -2.492]} rotation={[-0.572, 0.504, 0.715]} scale={[0.025, 0.034, 0.001]}>
                                <mesh name="Object_80" geometry={nodes.Object_80.geometry} material={materials['Material.015_12']} />
                            </group>
                            <group name="grass_1a008_40" position={[7.878, 1.491, -6.006]} rotation={[-0.399, 0.719, 0.483]} scale={[0.025, 0.034, 0.001]}>
                                <mesh name="Object_82" geometry={nodes.Object_82.geometry} material={materials['Material.015_12']} />
                            </group>
                            <group name="grass_1a009_41" position={[7.634, 1.448, -6.506]} rotation={[-3.074, -0.406, -3.048]} scale={[0.027, 0.054, 0.001]}>
                                <mesh name="Object_84" geometry={nodes.Object_84.geometry} material={materials['Material.015_12']} />
                            </group>
                            <group name="bush001_42" position={[2.679, 1.486, -5.681]} rotation={[-0.184, 0.162, -0.013]} scale={[0.373, 0.097, 0.373]}>
                                <mesh name="Object_86" geometry={nodes.Object_86.geometry} material={materials['Material.015_12']} />
                            </group>
                            <group name="grass_3004_43" position={[-2.034, 1.511, -7.005]} rotation={[-3.073, 0.973, 3.034]} scale={[0.074, 0.074, 0.065]}>
                                <mesh name="Object_88" geometry={nodes.Object_88.geometry} material={materials['Material.015_12']} />
                            </group>
                            <group name="grass_3005_44" position={[2.446, 1.483, -0.714]} rotation={[0, -1.017, 0]} scale={[0.074, 0.074, 0.065]}>
                                <mesh name="Object_90" geometry={nodes.Object_90.geometry} material={materials['Material.015_12']} />
                            </group>
                            <group name="grass_1a010_45" position={[1.509, 1.404, 0.319]} rotation={[-0.283, 0.317, 0.114]} scale={[0.022, 0.043, 0.001]}>
                                <mesh name="Object_92" geometry={nodes.Object_92.geometry} material={materials['Material.015_12']} />
                            </group>
                            <group name="bush002_46" position={[7.691, 1.294, 0.325]} rotation={[0.055, 0.206, -0.168]} scale={[0.446, 0.12, 0.452]}>
                                <mesh name="Object_94" geometry={nodes.Object_94.geometry} material={materials['Material.015_12']} />
                            </group>
                            <group name="grass_1a011_47" position={[6.912, 2.285, 3.583]} rotation={[0, 0.621, -0.603]} scale={[0.025, 0.034, 0.001]}>
                                <mesh name="Object_96" geometry={nodes.Object_96.geometry} material={materials['Material.015_12']} />
                            </group>
                            <group name="grass_1a012_48" position={[1.878, 1.395, 3.639]} rotation={[-2.682, -1.271, -2.294]} scale={[0.022, 0.043, 0.001]}>
                                <mesh name="Object_98" geometry={nodes.Object_98.geometry} material={materials['Material.015_12']} />
                            </group>
                            <group name="bush003_49" position={[-2.068, 1.466, -5.556]} rotation={[-0.006, 0.303, -0.027]} scale={[0.244, 0.064, 0.244]}>
                                <mesh name="Object_100" geometry={nodes.Object_100.geometry} material={materials['Material.015_12']} />
                            </group>
                            <group name="grass_1a013_50" position={[2.576, 0.799, -9.56]} rotation={[2.581, -0.601, -3.107]} scale={[0.027, 0.054, 0.001]}>
                                <mesh name="Object_102" geometry={nodes.Object_102.geometry} material={materials['Material.015_12']} />
                            </group>
                            <group name="grass_1a014_51" position={[5.124, 0.454, -9.46]} rotation={[2.921, -0.658, -2.418]} scale={[0.027, 0.054, 0.001]}>
                                <mesh name="Object_104" geometry={nodes.Object_104.geometry} material={materials['Material.015_12']} />
                            </group>
                            <group name="bush004_52" position={[2.931, 1.401, 1.238]} rotation={[-0.004, 0.047, 0.049]} scale={[0.293, 0.077, 0.293]}>
                                <mesh name="Object_106" geometry={nodes.Object_106.geometry} material={materials['Material.015_12']} />
                            </group>
                            <group name="grass_3006_53" position={[-0.619, 1.543, -2.453]} rotation={[0.282, 0.986, 0.251]} scale={[0.074, 0.074, 0.065]}>
                                <mesh name="Object_108" geometry={nodes.Object_108.geometry} material={materials['Material.015_12']} />
                            </group>
                            <group name="grass_1a015_54" position={[-0.75, 1.512, -3.14]} rotation={[-0.597, -1.085, -0.625]} scale={[0.025, 0.024, 0.001]}>
                                <mesh name="Object_110" geometry={nodes.Object_110.geometry} material={materials['Material.015_12']} />
                            </group>
                            <group name="rock_2006_55" position={[1.157, 0.992, 0.195]} rotation={[-2.49, 1.214, -2.006]} scale={[0.628, 1.275, 1.275]}>
                                <mesh name="Object_112" geometry={nodes.Object_112.geometry} material={materials['Material.015_8']} />
                            </group>
                            <group name="grass_3007_56" position={[9.772, 1.742, 1.943]} rotation={[3.126, -0.868, -2.941]} scale={[0.096, 0.096, 0.083]}>
                                <mesh name="Object_114" geometry={nodes.Object_114.geometry} material={materials['Material.015_12']} />
                            </group>
                            <group name="grass_1a017_57" position={[10.467, 1.272, -0.032]} rotation={[2.923, -0.951, 2.676]} scale={[0.028, 0.054, 0.001]}>
                                <mesh name="Object_116" geometry={nodes.Object_116.geometry} material={materials['Material.015_12']} />
                            </group>
                            <group name="grass_1a016_58" position={[11.347, -0.356, 0.641]} rotation={[2.091, 0.789, -1.753]} scale={[0.026, 0.025, 0.001]}>
                                <mesh name="Object_118" geometry={nodes.Object_118.geometry} material={materials['Material.015_12']} />
                            </group>
                            <group name="grass_3008_59" position={[10.139, 1.339, -1.841]} rotation={[0.155, 0.159, -0.278]} scale={[0.096, 0.096, 0.083]}>
                                <mesh name="Object_120" geometry={nodes.Object_120.geometry} material={materials['Material.015_12']} />
                            </group>
                            <group name="grass_3009_60" position={[2.57, 1.521, -5.383]} rotation={[0.191, 1.076, 0.114]} scale={[0.076, 0.076, 0.066]}>
                                <mesh name="Object_122" geometry={nodes.Object_122.geometry} material={materials['Material.015_12']} />
                            </group>
                            <group name="grass_1a018_61" position={[-2.466, 4.507, 2.331]} rotation={[-2.675, -0.269, -1.957]} scale={[0.027, 0.026, 0.001]}>
                                <mesh name="Object_124" geometry={nodes.Object_124.geometry} material={materials['Material.015_12']} />
                            </group>
                            <group name="grass_1a019_62" position={[-2.686, 4.218, 0.803]} rotation={[-2.379, -0.548, -1.951]} scale={[0.029, 0.028, 0.001]}>
                                <mesh name="Object_126" geometry={nodes.Object_126.geometry} material={materials['Material.015_12']} />
                            </group>
                            <group name="bush005_63" position={[-3.949, 5.131, 1.429]} rotation={[-0.378, 0.37, -0.219]} scale={[0.346, 0.09, 0.346]}>
                                <mesh name="Object_128" geometry={nodes.Object_128.geometry} material={materials['Material.015_12']} />
                            </group>
                            <group name="toad_2004_64" position={[1.901, 1.586, -2.022]} rotation={[-0.043, 0.656, -0.071]} scale={[0.104, 0.053, 0.104]}>
                                <mesh name="Object_130" geometry={nodes.Object_130.geometry} material={materials['Material.015_12']} />
                            </group>
                            <group name="toad_3b002_65" position={[-3.44, 5.085, 0.972]} rotation={[0.122, 1.085, -0.5]} scale={[0.154, 0.115, 0.154]}>
                                <mesh name="Object_132" geometry={nodes.Object_132.geometry} material={materials['Material.015_12']} />
                            </group>
                            <group name="toad_2005_66" position={[-2.683, 2.776, -2.682]} rotation={[0.825, 0.979, -1.433]} scale={[0.104, 0.053, 0.104]}>
                                <mesh name="Object_134" geometry={nodes.Object_134.geometry} material={materials['Material.015_12']} />
                            </group>
                            <group name="toad_1b002_67" position={[3.863, 1.502, 1.424]} rotation={[-3.13, 1.16, 3.124]} scale={[0.121, 0.061, 0.121]}>
                                <mesh name="Object_136" geometry={nodes.Object_136.geometry} material={materials['Material.015_12']} />
                            </group>
                            <group name="toad_3b003_68" position={[8.602, 1.625, -6.337]} rotation={[2.956, -0.396, -2.894]} scale={[0.131, 0.097, 0.131]}>
                                <mesh name="Object_138" geometry={nodes.Object_138.geometry} material={materials['Material.015_12']} />
                            </group>
                            <group name="toad_3b004_69" position={[-2.165, 1.677, -6.674]} rotation={[-0.082, -0.195, -0.246]} scale={[0.152, 0.113, 0.152]}>
                                <mesh name="Object_140" geometry={nodes.Object_140.geometry} material={materials['Material.015_12']} />
                            </group>
                            <group name="toad_2006_70" position={[-5.811, 5.682, -0.593]} rotation={[2.865, 0.946, -2.959]} scale={[0.115, 0.059, 0.115]}>
                                <mesh name="Object_142" geometry={nodes.Object_142.geometry} material={materials['Material.015_12']} />
                            </group>
                            <group name="toad_1b003_71" position={[-2.116, 5.401, 4.488]} rotation={[2.4, 0.763, -2.708]} scale={[0.121, 0.061, 0.121]}>
                                <mesh name="Object_144" geometry={nodes.Object_144.geometry} material={materials['Material.015_12']} />
                            </group>
                            <group name="toad_1b004_72" position={[9.314, 1.545, 1.443]} rotation={[-2.483, 1.134, 1.862]} scale={[0.121, 0.061, 0.121]}>
                                <mesh name="Object_146" geometry={nodes.Object_146.geometry} material={materials['Material.015_12']} />
                            </group>
                            <group name="toad_1b005_73" position={[8.355, 1.44, -0.104]} rotation={[3.055, 0.669, -2.732]} scale={[0.121, 0.061, 0.121]}>
                                <mesh name="Object_148" geometry={nodes.Object_148.geometry} material={materials['Material.015_12']} />
                            </group>
                            <group name="toad_2007_74" position={[3.277, 1.521, -9.265]} rotation={[-0.744, 0.072, -0.154]} scale={[0.067, 0.034, 0.067]}>
                                <mesh name="Object_150" geometry={nodes.Object_150.geometry} material={materials['Material.015_12']} />
                            </group>
                            <group name="toad_1b006_75" position={[1.867, 1.486, 0.451]} rotation={[-3.071, 0.833, 3.041]} scale={[0.121, 0.061, 0.121]}>
                                <mesh name="Object_152" geometry={nodes.Object_152.geometry} material={materials['Material.015_12']} />
                            </group>
                            <group name="grass_1a020_76" position={[6.737, 1.478, -3.325]} rotation={[-1.149, 0.958, 0.892]} scale={[0.025, 0.034, 0.001]}>
                                <mesh name="Object_154" geometry={nodes.Object_154.geometry} material={materials['Material.015_12']} />
                            </group>
                            <group name="cover_wood_3002_77" position={[9.229, 1.455, -1.261]} rotation={[1.635, -0.241, -2.228]} scale={[0.015, 0.33, 0.055]}>
                                <mesh name="Object_156" geometry={nodes.Object_156.geometry} material={materials['Material.015_3']} />
                            </group>
                            <group name="grass_3010_78" position={[9.853, 1.398, -1.504]} rotation={[-2.608, -1.152, -2.684]} scale={[0.074, 0.074, 0.065]}>
                                <mesh name="Object_158" geometry={nodes.Object_158.geometry} material={materials['Material.015_12']} />
                            </group>
                            <group name="toad_2008_79" position={[9.296, 1.516, -0.866]} rotation={[-2.742, -0.623, -2.946]} scale={[0.104, 0.053, 0.104]}>
                                <mesh name="Object_160" geometry={nodes.Object_160.geometry} material={materials['Material.015_12']} />
                            </group>
                            <group name="toad_3b005_80" position={[8.904, 1.642, -0.648]} rotation={[0.517, 1.181, -0.651]} scale={[0.153, 0.114, 0.153]}>
                                <mesh name="Object_162" geometry={nodes.Object_162.geometry} material={materials['Material.015_12']} />
                            </group>
                            <group name="rock_2009_81" position={[6.897, 1.54, -2.088]} rotation={[2.62, -0.437, -2.354]} scale={0.922}>
                                <mesh name="Object_164" geometry={nodes.Object_164.geometry} material={materials['Material.015_8']} />
                            </group>
                            <group name="Cone001_82" position={[-5.549, 4.635, 6.575]} rotation={[0.009, 0.366, -0.085]} scale={[2.671, 2.658, 2.658]}>
                                <mesh name="Object_166" geometry={nodes.Object_166.geometry} material={materials.piky_tex} />
                            </group>
                            <group name="Cone004_84" position={[-5.549, 4.635, 6.575]} rotation={[0.009, 0.366, -0.085]} scale={[2.671, 2.658, 2.658]}>
                                <mesh name="Object_168" geometry={nodes.Object_168.geometry} material={materials.obsidiana} />
                            </group>
                            <group name="Icosphere001_85" position={[1.11, -0.014, 0.564]} rotation={[0, 0.42, 0]} scale={[10, 11.442, 10]}>
                                <mesh name="Object_170" geometry={nodes.Object_170.geometry} material={materials['green.001']} />
                                <mesh name="Object_171" geometry={nodes.Object_171.geometry} material={materials['brown.001']} />
                                <mesh name="Object_172" geometry={nodes.Object_172.geometry} material={materials['blue.001']} />
                            </group>
                            <group name="rock_5004_86" position={[-0.661, 1.47, 4.582]} rotation={[1.325, 0.024, 2.259]} scale={[0.417, 0.516, 1.154]}>
                                <mesh name="Object_174" geometry={nodes.Object_174.geometry} material={materials['Material.015_11']} />
                            </group>
                            <group name="rock_5005_87" position={[7.186, 0.729, 3.027]} rotation={[1.655, -0.137, 1.619]} scale={[0.2, 0.248, 0.553]}>
                                <mesh name="Object_176" geometry={nodes.Object_176.geometry} material={materials['Material.015_11']} />
                            </group>
                            <group name="grass_1a021_88" position={[1.342, 1.348, 3.027]} rotation={[-0.227, -1.14, 0.988]} scale={[0.02, 0.023, 0.001]}>
                                <mesh name="Object_178" geometry={nodes.Object_178.geometry} material={materials['Material.015_12']} />
                            </group>
                            <group name="grass_3011_89" position={[0.591, 1.416, -0.336]} rotation={[0, 0.941, 0]} scale={[0.074, 0.074, 0.065]}>
                                <mesh name="Object_180" geometry={nodes.Object_180.geometry} material={materials['Material.015_12']} />
                            </group>
                            <group name="toad_2009_90" position={[2.486, 1.754, -5.261]} rotation={[-0.097, 0.615, -0.198]} scale={[0.104, 0.053, 0.104]}>
                                <mesh name="Object_182" geometry={nodes.Object_182.geometry} material={materials['Material.015_12']} />
                            </group>
                            <group name="toad_3b006_91" position={[3.101, 1.68, -5.493]} rotation={[-3.048, 0.539, 2.863]} scale={[0.128, 0.095, 0.128]}>
                                <mesh name="Object_184" geometry={nodes.Object_184.geometry} material={materials['Material.015_12']} />
                            </group>
                            <group name="cover_wood_3003_92" position={[2.904, 1.608, -5.14]} rotation={[-1.73, -0.013, -2.07]} scale={[0.008, 0.188, 0.031]}>
                                <mesh name="Object_186" geometry={nodes.Object_186.geometry} material={materials['Material.015_2']} />
                            </group>
                            <group name="rock_2007_93" position={[-2.319, 0.803, -0.947]} rotation={[-0.15, -1.239, 1.491]} scale={0.831}>
                                <mesh name="Object_188" geometry={nodes.Object_188.geometry} material={materials['Material.015_8']} />
                            </group>
                            <group name="toad_1b001_94" position={[-1.554, 1.592, -6.669]} rotation={[-3.13, 1.16, 3.124]} scale={[0.121, 0.061, 0.121]}>
                                <mesh name="Object_190" geometry={nodes.Object_190.geometry} material={materials['Material.015_12']} />
                            </group>
                            <group onClick={() => {
                                console.log("clicked")
                                props.setWidth(900);
                                props.setModule("Course Summary")
                            }} name="hut_top_95" position={[-1.074, 1.647, -4.427]} rotation={[-Math.PI, -0.622, -Math.PI]} scale={0.04}>
                                <mesh name="Object_192" geometry={nodes.Object_192.geometry} material={materials['Material.015_13']} />
                            </group>
                            <group onClick={() => {
                                console.log("clicked")
                                props.setWidth(900);
                                props.setModule("Course")
                            }} name="hut_mid_96" position={[-1.074, 1.553, -4.427]} rotation={[-Math.PI, -0.622, -Math.PI]} scale={[0.04, 0.047, 0.04]}>
                                <mesh name="Object_194" geometry={nodes.Object_194.geometry} material={materials['Material.015_14']} />
                            </group>
                            <group name="hut_bot_97" position={[-0.839, 1.552, -4.53]} rotation={[-1.581, 0.335, -3.109]} scale={[0.016, 0.369, 0.061]}>
                                <mesh name="Object_196" geometry={nodes.Object_196.geometry} material={materials['Material.015_15']} />
                            </group>
                            <group name="hut_carpet_98" position={[-1.069, 1.534, -4.447]} rotation={[0, 0.387, -Math.PI]} scale={[-0.56, 0.068, 0.56]}>
                                <mesh name="Object_198" geometry={nodes.Object_198.geometry} material={materials['Material.015_16']} />
                            </group>
                            <group name="rock_5001_99" position={[-2.898, 1.289, 0.947]} rotation={[1.317, 0.849, -1.376]} scale={[0.566, 0.504, 0.504]}>
                                <mesh name="Object_200" geometry={nodes.Object_200.geometry} material={materials['Material.015_11']} />
                            </group>
                            <group onClick={() => {
                                console.log("clicked")
                                props.setWidth(900);
                                props.setModule("Module 5")
                            }} name="hut_small001_100" position={[0.072, 1.509, -7.259]} rotation={[-Math.PI, -0.001, -Math.PI]} scale={[0.022, 0.035, 0.022]}>
                                <mesh name="Object_202" geometry={nodes.Object_202.geometry} material={materials['Material.015_1']} />
                            </group>
                            <group name="Cube015_101" position={[1.695, 1.508, -6.202]} rotation={[-0.014, -0.667, 0.02]} scale={[0.063, 0.017, 0.063]}>
                                <mesh name="Object_204" geometry={nodes.Object_204.geometry} material={materials['Material.015_0']} />
                            </group>
                            <group name="Cube014_102" position={[3.413, 1.495, -3.768]} rotation={[3.101, 1.169, 0.031]} scale={[0.038, 0.04, 0.065]}>
                                <mesh name="Object_206" geometry={nodes.Object_206.geometry} material={materials['Material.015_17']} />
                            </group>
                            <group name="Cube013_103" position={[1.798, 1.504, -7.671]} rotation={[-0.005, -0.161, -0.03]} scale={[0.062, 0.019, 0.062]}>
                                <mesh name="Object_208" geometry={nodes.Object_208.geometry} material={materials['Material.015_9']} />
                            </group>
                            <group onClick={() => {
                                console.log("clicked")
                                props.setWidth(900);
                                props.setModule("Module 1")
                            }} name="hut_small003_104" position={[5.019, 1.493, -4.147]} rotation={[-3.082, -1.469, -3.099]} scale={[0.023, 0.035, 0.023]}>
                                <mesh name="Object_210" geometry={nodes.Object_210.geometry} material={materials['Material.015_1']} />
                            </group>
                            <group onClick={() => {
                                console.log("clicked")
                                props.setWidth(900);
                                props.setModule("Module 3")
                            }} name="hut_small005_105" position={[4.342, 1.497, -8.143]} rotation={[-3.121, 1.202, 3.077]} scale={[0.022, 0.031, 0.022]}>
                                <mesh name="Object_212" geometry={nodes.Object_212.geometry} material={materials['Material.015_1']} />
                            </group>
                            <group name="Cube016_106" position={[4.397, 1.502, -7.184]} rotation={[-3.124, -0.019, -3.133]} scale={[0.053, 0.013, 0.053]}>
                                <mesh name="Object_214" geometry={nodes.Object_214.geometry} material={materials['Material.015_9']} />
                            </group>
                            <group name="Cube017_107" position={[3.889, 1.51, -5.963]} rotation={[-0.019, 0.257, 0.002]} scale={[0.063, 0.022, 0.063]}>
                                <mesh name="Object_216" geometry={nodes.Object_216.geometry} material={materials['Material.015_9']} />
                            </group>
                            <group name="Cube018_108" position={[3.266, 1.509, -4.292]} rotation={[-0.015, 0.399, -0.009]} scale={[0.069, 0.031, 0.069]}>
                                <mesh name="Object_218" geometry={nodes.Object_218.geometry} material={materials['Material.015_9']} />
                            </group>
                            <group name="Cube019_109" position={[2.095, 1.51, -6.524]} rotation={[3.021, 1.03, 0.141]} scale={[0.037, 0.026, 0.063]}>
                                <mesh name="Object_220" geometry={nodes.Object_220.geometry} material={materials['Material.015_17']} />
                            </group>
                            <group name="Cube020_110" position={[1.962, 1.498, -4.431]} rotation={[-0.008, -0.508, 0.011]} scale={[0.065, 0.027, 0.064]}>
                                <mesh name="Object_222" geometry={nodes.Object_222.geometry} material={materials['Material.015_9']} />
                            </group>
                            <group name="Cube021_111" position={[3.775, 1.493, -4.634]} rotation={[3.116, 0.61, 0.022]} scale={[0.042, 0.036, 0.072]}>
                                <mesh name="Object_224" geometry={nodes.Object_224.geometry} material={materials['Material.015_17']} />
                            </group>
                            <group name="Cube022_112" position={[1.29, 1.513, -6.993]} rotation={[0.126, 1.5, -0.162]} scale={[0.062, 0.017, 0.062]}>
                                <mesh name="Object_226" geometry={nodes.Object_226.geometry} material={materials['Material.015_9']} />
                            </group>
                            <group name="Cube025_113" position={[3.389, 1.502, -6.496]} rotation={[0.033, 0.978, 3.116]} scale={[0.033, 0.019, 0.064]}>
                                <mesh name="Object_228" geometry={nodes.Object_228.geometry} material={materials['Material.015_17']} />
                            </group>
                            <group name="Cube026_114" position={[4.008, 1.493, -5.273]} rotation={[3.124, -0.069, -0.001]} scale={[0.039, 0.031, 0.067]}>
                                <mesh name="Object_230" geometry={nodes.Object_230.geometry} material={materials['Material.015_17']} />
                            </group>
                            <group name="Cube027_115" position={[2.549, 1.511, -4.206]} rotation={[-3.062, -1.413, -3.069]} scale={[0.067, 0.028, 0.067]}>
                                <mesh name="Object_232" geometry={nodes.Object_232.geometry} material={materials['Material.015_9']} />
                            </group>
                            <group name="Cube028_116" position={[1.405, 1.494, -5.616]} rotation={[-0.008, -0.138, -0.018]} scale={[0.062, 0.032, 0.075]}>
                                <mesh name="Object_234" geometry={nodes.Object_234.geometry} material={materials['Material.015_0']} />
                            </group>
                            <group name="Cube029_117" position={[2.751, 1.492, -6.575]} rotation={[0.424, 1.473, 2.701]} scale={[0.035, 0.036, 0.068]}>
                                <mesh name="Object_236" geometry={nodes.Object_236.geometry} material={materials['Material.015_17']} />
                            </group>
                            <group name="Cube030_118" position={[4.604, 1.508, -6.678]} rotation={[-3.037, -0.932, -3.053]} scale={[0.051, 0.013, 0.051]}>
                                <mesh name="Object_238" geometry={nodes.Object_238.geometry} material={materials['Material.015_9']} />
                            </group>
                            <group onClick={() => {
                                console.log("clicked")
                                props.setWidth(900);
                                props.setModule("Module 2")
                            }} name="hut_small006_119" position={[6.682, 1.488, -6.327]} rotation={[0.037, 0.652, -0.017]} scale={[0.022, 0.03, 0.022]}>
                                <mesh name="Object_240" geometry={nodes.Object_240.geometry} material={materials['Material.015_1']} />
                            </group>
                            <group name="Cube032_120" position={[4.952, 1.507, -6.305]} rotation={[-3.133, -0.603, 3.13]} scale={[0.055, 0.019, 0.055]}>
                                <mesh name="Object_242" geometry={nodes.Object_242.geometry} material={materials['Material.015_9']} />
                            </group>
                            <group name="fence_1002_121" position={[0.649, 1.839, -3.75]} rotation={[-2.839, 1.405, 2.827]} scale={[-0.375, 0.053, 0.413]}>
                                <mesh name="Object_244" geometry={nodes.Object_244.geometry} material={materials['Material.015_18']} />
                            </group>
                            <group name="fence_2001_122" position={[2.521, 1.417, -1.344]} rotation={[-3.126, 0.118, 0.031]} scale={[-0.382, 0.054, 0.421]}>
                                <mesh name="Object_246" geometry={nodes.Object_246.geometry} material={materials['Material.015_18']} />
                            </group>
                            <group name="Cube033_123" position={[2.681, 1.467, 0.312]} rotation={[0.025, 1.202, -3.118]} scale={[0.035, 0.023, 0.06]}>
                                <mesh name="Object_248" geometry={nodes.Object_248.geometry} material={materials['Material.015_17']} />
                            </group>
                            <group name="Cube034_124" position={[2.986, 1.488, -0.191]} rotation={[0.002, -0.368, 0.005]} scale={[0.06, 0.02, 0.06]}>
                                <mesh name="Object_250" geometry={nodes.Object_250.geometry} material={materials['Material.015_9']} />
                            </group>
                            <group name="Cube035_125" position={[3.207, 1.503, -0.745]} rotation={[0.048, 1.169, 3.099]} scale={[0.035, 0.034, 0.06]}>
                                <mesh name="Object_252" geometry={nodes.Object_252.geometry} material={materials['Material.015_17']} />
                            </group>
                            <group name="box001_126" position={[0.616, 1.45, -6.334]} rotation={[0, 0.42, -Math.PI]} scale={[-0.212, 0.03, 0.234]}>
                                <mesh name="Object_254" geometry={nodes.Object_254.geometry} material={materials['Material.015_18']} />
                            </group>
                            <group name="Cube036_127" position={[3.535, 1.488, -1.217]} rotation={[-3.129, 0.394, -0.011]} scale={[0.037, 0.031, 0.063]}>
                                <mesh name="Object_256" geometry={nodes.Object_256.geometry} material={materials['Material.015_17']} />
                            </group>
                            <group name="Cube039_128" position={[3.784, 1.514, -2.618]} rotation={[0, 0.088, -0.01]} scale={[0.069, 0.025, 0.069]}>
                                <mesh name="Object_258" geometry={nodes.Object_258.geometry} material={materials['Material.015_9']} />
                            </group>
                            <group name="Cube038_129" position={[3.654, 1.495, -1.96]} rotation={[-0.039, 1.454, -3.08]} scale={[0.039, 0.036, 0.066]}>
                                <mesh name="Object_260" geometry={nodes.Object_260.geometry} material={materials['Material.015_17']} />
                            </group>
                            <group name="Cube037_130" position={[3.69, 1.492, -3.239]} rotation={[-0.018, -1.124, 0.033]} scale={[0.069, 0.031, 0.069]}>
                                <mesh name="Object_262" geometry={nodes.Object_262.geometry} material={materials['Material.015_9']} />
                            </group>
                            <group name="tree_1001_131" position={[5.796, 0.676, -8.911]} rotation={[0, 0.453, 0]} scale={[0.22, 0.259, 0.22]}>
                                <mesh name="Object_264" geometry={nodes.Object_264.geometry} material={materials['Material.015_7']} />
                            </group>
                            <group name="tree_1002_132" position={[6.734, 2.032, 3.163]} rotation={[0, 0.453, 0]} scale={[0.254, 0.299, 0.254]}>
                                <mesh name="Object_266" geometry={nodes.Object_266.geometry} material={materials['Material.015_7']} />
                            </group>
                            <group name="tree_2001_133" position={[5.192, 1.325, 1.016]} rotation={[0, 0.852, 0]} scale={[0.123, 0.145, 0.123]}>
                                <mesh name="Object_268" geometry={nodes.Object_268.geometry} material={materials['Material.015_7']} />
                            </group>
                            <group name="tree_1003_134" position={[6.854, 1.278, 0.785]} rotation={[0, 1.495, 0]} scale={[0.25, 0.295, 0.25]}>
                                <mesh name="Object_270" geometry={nodes.Object_270.geometry} material={materials['Material.015_7']} />
                            </group>
                            <group name="tree_3001_135" position={[8.05, 1.221, 0.117]} rotation={[2.824, 0.455, -2.843]} scale={[0.127, 0.149, 0.127]}>
                                <mesh name="Object_272" geometry={nodes.Object_272.geometry} material={materials['Material.015_7']} />
                            </group>
                            <group name="tree_2002_136" position={[2.744, 1.011, -9.446]} rotation={[0, -0.069, 0]} scale={[0.199, 0.235, 0.199]}>
                                <mesh name="Object_274" geometry={nodes.Object_274.geometry} material={materials['Material.015_7']} />
                            </group>
                            <group name="tree_2003_137" position={[8.41, 1.47, -5.835]} rotation={[0, -0.733, 0]} scale={[0.162, 0.191, 0.162]}>
                                <mesh name="Object_276" geometry={nodes.Object_276.geometry} material={materials['Material.015_7']} />
                            </group>
                            <group name="tree_1004_138" position={[-2.79, 4.166, 1.979]} rotation={[0, -1.294, 0]} scale={[0.214, 0.251, 0.214]}>
                                <mesh name="Object_278" geometry={nodes.Object_278.geometry} material={materials['Material.015_7']} />
                            </group>
                            <group name="tree_2004_139" position={[-3.652, 4.76, 0.644]} rotation={[0, -1.403, 0]} scale={[0.13, 0.153, 0.13]}>
                                <mesh name="Object_280" geometry={nodes.Object_280.geometry} material={materials['Material.015_7']} />
                            </group>
                            <group name="tree_1005_140" position={[-1.963, 1.136, -2.937]} rotation={[-0.044, 1.503, 0.066]} scale={[0.206, 0.243, 0.206]}>
                                <mesh name="Object_282" geometry={nodes.Object_282.geometry} material={materials['Material.015_7']} />
                            </group>
                            <group name="tree_1006_141" position={[-2.855, 1.022, -6.212]} rotation={[0, 0.791, 0]} scale={[0.308, 0.362, 0.308]}>
                                <mesh name="Object_284" geometry={nodes.Object_284.geometry} material={materials['Material.015_7']} />
                            </group>
                            <group name="tree_3002_142" position={[-2.533, 1.391, -6.583]} rotation={[-Math.PI, 1.2, -Math.PI]} scale={[0.135, 0.159, 0.135]}>
                                <mesh name="Object_286" geometry={nodes.Object_286.geometry} material={materials['Material.015_7']} />
                            </group>
                            <group name="tree_1007_143" position={[1.389, 3.462, 7.042]} rotation={[0, -0.914, 0]} scale={[0.235, 0.277, 0.235]}>
                                <mesh name="Object_288" geometry={nodes.Object_288.geometry} material={materials['Material.015_7']} />
                            </group>
                            <group name="tree_3003_144" position={[-1.669, 4.898, 5.149]} rotation={[2.034, 1.257, -2.098]} scale={[0.103, 0.121, 0.103]}>
                                <mesh name="Object_290" geometry={nodes.Object_290.geometry} material={materials['Material.015_7']} />
                            </group>
                            <group name="tree_2005_145" position={[9.122, 1.458, 1.618]} rotation={[0, 0.371, 0]} scale={[0.184, 0.217, 0.184]}>
                                <mesh name="Object_292" geometry={nodes.Object_292.geometry} material={materials['Material.015_7']} />
                            </group>
                            <group name="tree_1008_146" position={[-6.272, 5.001, -0.424]} rotation={[-Math.PI, -0.684, -Math.PI]} scale={[0.223, 0.262, 0.223]}>
                                <mesh name="Object_294" geometry={nodes.Object_294.geometry} material={materials['Material.015_7']} />
                            </group>
                            <group name="tree_1009_147" position={[10.703, 0.603, 0.604]} rotation={[Math.PI, -1.475, Math.PI]} scale={[0.268, 0.275, 0.268]}>
                                <mesh name="Object_296" geometry={nodes.Object_296.geometry} material={materials['Material.015_7']} />
                            </group>
                            <group name="tree_1010_148" position={[1.431, 1.292, -2.47]} rotation={[-Math.PI, -0.764, -Math.PI]} scale={[0.25, 0.267, 0.25]}>
                                <mesh name="Object_298" geometry={nodes.Object_298.geometry} material={materials['Material.015_7']} />
                            </group>
                            <group name="cover_wood_3005_149" position={[-2.013, 1.596, -6.293]} rotation={[-1.517, 0.15, 2.215]} scale={[0.014, 0.311, 0.052]}>
                                <mesh name="Object_300" geometry={nodes.Object_300.geometry} material={materials['Material.015_2']} />
                            </group>
                            <group name="box002_150" position={[5.469, 1.469, -6.832]} rotation={[0, 0.42, -Math.PI]} scale={[-0.213, 0.03, 0.235]}>
                                <mesh name="Object_302" geometry={nodes.Object_302.geometry} material={materials['Material.015_18']} />
                            </group>
                            <group name="barrel_2001_151" position={[5.502, 1.685, -7.475]} rotation={[-3.09, -0.415, -0.111]} scale={[-0.275, 0.039, 0.303]}>
                                <mesh name="Object_304" geometry={nodes.Object_304.geometry} material={materials['Material.015_18']} />
                            </group>
                            <group name="cart001_152" position={[5.369, 1.633, -7.476]} rotation={[3.133, -0.747, -0.198]} scale={[-0.181, 0.025, 0.2]}>
                                <mesh name="Object_306" geometry={nodes.Object_306.geometry} material={materials['Material.015_18']} />
                            </group>
                            <group name="Cube012_153" position={[5.169, 1.507, -5.852]} rotation={[-3.141, -0.358, -3.137]} scale={[0.055, 0.022, 0.055]}>
                                <mesh name="Object_308" geometry={nodes.Object_308.geometry} material={materials['Material.015_9']} />
                            </group>
                            <group name="toad_2001_154" position={[-1.654, 1.603, -6.986]} rotation={[2.757, 0.939, -3.009]} scale={[0.104, 0.053, 0.104]}>
                                <mesh name="Object_310" geometry={nodes.Object_310.geometry} material={materials['Material.015_12']} />
                            </group>
                            <group name="grass_1a001_155" position={[-1.44, 1.495, -6.877]} rotation={[-0.163, 0.382, 0.114]} scale={[0.014, 0.014, 0.001]}>
                                <mesh name="Object_312" geometry={nodes.Object_312.geometry} material={materials['Material.015_12']} />
                            </group>
                            <group name="toad_2002_156" position={[4.549, 1.526, 0.729]} rotation={[-0.134, 0.415, -0.067]} scale={[0.104, 0.053, 0.104]}>
                                <mesh name="Object_314" geometry={nodes.Object_314.geometry} material={materials['Material.015_12']} />
                            </group>
                            <group name="toad_3b001_157" position={[4.999, 1.603, 0.634]} rotation={[-3.109, -0.964, 2.959]} scale={[0.153, 0.114, 0.153]}>
                                <mesh name="Object_316" geometry={nodes.Object_316.geometry} material={materials['Material.015_12']} />
                            </group>
                            <group name="grass_3001_158" position={[1.846, 1.412, -0.504]} rotation={[0, 0.941, 0]} scale={[0.074, 0.074, 0.065]}>
                                <mesh name="Object_318" geometry={nodes.Object_318.geometry} material={materials['Material.015_12']} />
                            </group>
                            <group name="grass_1a002_159" position={[7.855, 1.389, -7.102]} rotation={[2.997, 0.089, -2.919]} scale={[0.019, 0.018, 0.001]}>
                                <mesh name="Object_320" geometry={nodes.Object_320.geometry} material={materials['Material.015_12']} />
                            </group>
                            <group name="toad_2003_160" position={[8.044, 1.557, -6.783]} rotation={[-0.122, 0.508, -0.306]} scale={[0.067, 0.034, 0.067]}>
                                <mesh name="Object_322" geometry={nodes.Object_322.geometry} material={materials['Material.015_12']} />
                            </group>
                            <group name="rock_2001_161" position={[-2.874, 0.902, -0.242]} rotation={[-2.991, -0.607, -1.341]} scale={1.244}>
                                <mesh name="Object_324" geometry={nodes.Object_324.geometry} material={materials['Material.015_8']} />
                            </group>
                            <group name="tree_1011_162" position={[1.528, 1.262, 0.599]} rotation={[0, 1.495, 0]} scale={[0.175, 0.206, 0.175]}>
                                <mesh name="Object_326" geometry={nodes.Object_326.geometry} material={materials['Material.015_7']} />
                            </group>
                            <group name="tree_2006_163" position={[3.376, 1.281, 1.765]} rotation={[-Math.PI, 0.84, -Math.PI]} scale={[0.107, 0.125, 0.107]}>
                                <mesh name="Object_328" geometry={nodes.Object_328.geometry} material={materials['Material.015_7']} />
                            </group>
                            <group name="tree_1012_164" position={[8.859, 1.202, -4.601]} rotation={[Math.PI, -1.531, Math.PI]} scale={[0.274, 0.322, 0.274]}>
                                <mesh name="Object_330" geometry={nodes.Object_330.geometry} material={materials['Material.015_7']} />
                            </group>
                            <group name="fence_1003_165" position={[2.488, 1.495, -2.631]} rotation={[0.013, 0.187, 3.141]} scale={[-0.393, 0.055, 0.433]}>
                                <mesh name="Object_332" geometry={nodes.Object_332.geometry} material={materials['Material.015_18']} />
                            </group>
                            <group name="Cube008_166" position={[1.846, 1.504, -7.087]} rotation={[2.905, 1.262, -2.932]} scale={[0.062, 0.022, 0.062]}>
                                <mesh name="Object_334" geometry={nodes.Object_334.geometry} material={materials['Material.015_9']} />
                            </group>
                            <group name="rock_3001_168" position={[-3.06, 4.343, 0.379]} rotation={[-2.537, -0.863, -1.156]} scale={[0.969, 0.959, 0.787]}>
                                <mesh name="Object_337" geometry={nodes.Object_337.geometry} material={materials['Material.015_19']} />
                            </group>
                            <group name="rock_5002_169" position={[-3.227, 4.748, -1.852]} rotation={[-0.361, 1.074, 0.085]} scale={[0.67, 0.387, 0.588]}>
                                <mesh name="Object_339" geometry={nodes.Object_339.geometry} material={materials['Material.015_11']} />
                            </group>
                            <group name="rock_2002_170" position={[-3.397, 4.124, -1.2]} rotation={[0.233, -0.373, -2.244]} scale={[0.363, 0.408, 0.652]}>
                                <mesh name="Object_341" geometry={nodes.Object_341.geometry} material={materials['Material.015_8']} />
                            </group>
                            <group name="Cube031_171" position={[-0.763, 0.92, 2.355]} rotation={[0.324, 0.831, 0.024]} scale={[0.237, 0.399, 0.215]}>
                                <mesh name="Object_343" geometry={nodes.Object_343.geometry} material={materials['stone.002']} />
                            </group>
                            <group name="trunk_2_172" position={[7.853, 1.5, -6.489]} rotation={[3.098, 0.775, -3.041]} scale={0.139}>
                                <mesh name="Object_345" geometry={nodes.Object_345.geometry} material={materials['Material.015_3']} />
                            </group>
                            <group name="toad_3b_173" position={[8.059, 1.663, -5.803]} rotation={[3.026, -0.668, 2.644]} scale={[0.131, 0.097, 0.131]}>
                                <mesh name="Object_347" geometry={nodes.Object_347.geometry} material={materials['Material.015_12']} />
                            </group>
                            <group name="toad_1b_174" position={[7.703, 1.557, -6.741]} rotation={[-0.158, 0.436, -0.078]} scale={[0.076, 0.039, 0.076]}>
                                <mesh name="Object_349" geometry={nodes.Object_349.geometry} material={materials['Material.015_12']} />
                            </group>
                            <group name="rock_6_175" position={[10.491, -1.179, -2.372]} rotation={[2.747, -0.503, 3.073]} scale={[0.364, 0.613, 0.331]}>
                                <mesh name="Object_351" geometry={nodes.Object_351.geometry} material={materials['Material.015_20']} />
                            </group>
                            <group name="rock_5_176" position={[4.544, 1.3, 2.99]} rotation={[0.295, 0.135, 1.757]} scale={[0.598, 0.505, 0.528]}>
                                <mesh name="Object_353" geometry={nodes.Object_353.geometry} material={materials['Material.015_11']} />
                            </group>
                            <group name="rock_4_177" position={[1.087, 0.666, 3.598]} rotation={[-Math.PI, 0.522, -Math.PI]} scale={[0.866, 0.968, 0.866]}>
                                <mesh name="Object_355" geometry={nodes.Object_355.geometry} material={materials['Material.015_21']} />
                            </group>
                            <group name="rock_3_178" position={[10.925, 1.028, -0.635]} rotation={[-2.742, -0.676, -1.536]} scale={[0.982, 0.972, 0.798]}>
                                <mesh name="Object_357" geometry={nodes.Object_357.geometry} material={materials['Material.015_19']} />
                            </group>
                            <group name="rock_2_179" position={[-2.835, 1.057, -1.894]} rotation={[-0.02, 0.331, 1.635]} scale={1.15}>
                                <mesh name="Object_359" geometry={nodes.Object_359.geometry} material={materials['Material.015_8']} />
                            </group>
                            <group name="rock_1_180" position={[3.614, 0.668, -9.262]} rotation={[0.439, 0.396, -1.117]} scale={[0.777, 0.4, 0.893]}>
                                <mesh name="Object_361" geometry={nodes.Object_361.geometry} material={materials['Material.015_10']} />
                            </group>
                            <group name="grass_3_181" position={[3.832, 1.441, 1.187]} rotation={[0, 0.941, 0]} scale={[0.074, 0.074, 0.065]}>
                                <mesh name="Object_363" geometry={nodes.Object_363.geometry} material={materials['Material.015_12']} />
                            </group>
                            <group name="grass_1a_182" position={[1.728, 1.457, -1.838]} rotation={[-0.364, -1.187, -0.197]} scale={[0.018, 0.017, 0.001]}>
                                <mesh name="Object_365" geometry={nodes.Object_365.geometry} material={materials['Material.015_12']} />
                            </group>
                            <group name="bush_183" position={[6.713, 1.594, -2.878]} rotation={[-0.023, 0.05, 0.655]} scale={[0.293, 0.077, 0.293]}>
                                <mesh name="Object_367" geometry={nodes.Object_367.geometry} material={materials['Material.015_12']} />
                            </group>
                        </group>
                    </group>
                </group>
            </group>
        </group>
    )
}
