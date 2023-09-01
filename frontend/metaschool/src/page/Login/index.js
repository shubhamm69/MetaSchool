import React, {useRef, useState} from 'react'
import {Canvas} from '@react-three/fiber'
import {Suspense} from 'react'
import {useGLTF, useAnimations, OrbitControls, useScroll} from '@react-three/drei'
import CameraPositionLogger from '../../helpers/CameraPosition'
import {GoogleLogin} from 'react-google-login'
import axios from 'axios';


function Login() {
    const [module, setModule] = useState("");
    const [wid, setWidth] = useState(0);


    return (
        <div className='loginMain'>
            <div className='Avatar'>
                <Canvas style={
                        {
                            height: 400,
                            zIndex: 1000
                        }
                    }
                    camera={
                        {
                            fov: 100,
                            near: 0.1,
                            far: 1000,
                            position: [215, 222, -9]
                        }
                }>
                    <Suspense fallback={null}>
                        <ambientLight intensity={5}/>
                        <pointLight position={
                                [0, 2, 2]
                            }
                            intensity={10}/>
                        <Pakan/>
                    </Suspense>
                    <OrbitControls/>
                    <CameraPositionLogger event='mousedown'/>
                </Canvas>
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                    style={
                        {
                            // margin: 'auto',
                            background: 'rgb(0,0,0)',
                            display: 'block',
                            zIndex: 1,
                            position: 'relative',
                            shapeRendering: 'auto',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            filter: 'rotateZ(180deg)'
                        }
                    }
                    width="400"
                    height="100vh"
                    preserveAspectRatio="xMidYMid"
                    viewBox="0 0 500 600  ">
                    <g transform="translate(195.5,353.5) scale(1,-1) translate(-195.5,-353.5)">
                        <linearGradient id="lg-0.00033050074062868084" x1="0" x2="1" y1="0" y2="0">
                            <stop stop-color="#4f7abe" offset="0"></stop>
                            <stop stop-color="#0a7142" offset="1"></stop>
                        </linearGradient>
                        <path d="" fill="url(#lg-0.00033050074062868084)" opacity="0.4">
                            <animate attributeName="d" dur="10s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcMode="spline" keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1" begin="0s" values="M0 0L 0 314.9864821876473Q 39.1 291.72321825178466  78.2 253.06201566408646T 156.4 225.79445166832565T 234.6 159.4644548151999T 312.8 104.87893930181093T 391 51.25157042016423L 391 0 Z;M0 0L 0 341.26292457172Q 39.1 296.1387113415588  78.2 261.38309411322336T 156.4 180.7359063609391T 234.6 131.67323718909T 312.8 65.05621551612711T 391 2.6397938672361647L 391 0 Z;M0 0L 0 347.24924285466943Q 39.1 321.0730554336404  78.2 282.26511108729073T 156.4 217.64242393428796T 234.6 141.1066224172935T 312.8 121.67484138376011T 391 19.54253110168969L 391 0 Z;M0 0L 0 314.9864821876473Q 39.1 291.72321825178466  78.2 253.06201566408646T 156.4 225.79445166832565T 234.6 159.4644548151999T 312.8 104.87893930181093T 391 51.25157042016423L 391 0 Z"></animate>
                        </path>
                        <path d="" fill="url(#lg-0.00033050074062868084)" opacity="0.4">
                            <animate attributeName="d" dur="10s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcMode="spline" keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1" begin="-2s" values="M0 0L 0 336.3494682440059Q 39.1 284.2328703178914  78.2 247.74589935735688T 156.4 184.90086583683404T 234.6 148.19053887182162T 312.8 53.37308203220488T 391 12.002448837107465L 391 0 Z;M0 0L 0 339.87363339408995Q 39.1 290.9949934276414  78.2 254.1997521293892T 156.4 225.83811611985882T 234.6 169.8441728164142T 312.8 90.60144739725553T 391 43.737265091240374L 391 0 Z;M0 0L 0 315.3696138336399Q 39.1 310.93190824489665  78.2 271.68208378180924T 156.4 200.77786016423536T 234.6 126.992778597972T 312.8 106.4002244986429T 391 35.23984407236276L 391 0 Z;M0 0L 0 336.3494682440059Q 39.1 284.2328703178914  78.2 247.74589935735688T 156.4 184.90086583683404T 234.6 148.19053887182162T 312.8 53.37308203220488T 391 12.002448837107465L 391 0 Z"></animate>
                        </path>
                        <path d="" fill="url(#lg-0.00033050074062868084)" opacity="0.4">
                            <animate attributeName="d" dur="10s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcMode="spline" keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1" begin="-4s" values="M0 0L 0 337.8124042892053Q 39.1 302.83981523215147  78.2 267.7614123004579T 156.4 203.65093671128767T 234.6 120.77907933696196T 312.8 97.67070341950219T 391 15.819485202229941L 391 0 Z;M0 0L 0 347.33789989499905Q 39.1 299.2274099763515  78.2 254.67851413917992T 156.4 217.08711720814657T 234.6 163.04231445947622T 312.8 128.785943377323T 391 27.294362534396157L 391 0 Z;M0 0L 0 344.58971237068414Q 39.1 313.3713069270186  78.2 282.8723433443655T 156.4 218.93428197355837T 234.6 119.2937416053135T 312.8 46.90145398443423T 391 -8.342964520390126L 391 0 Z;M0 0L 0 337.8124042892053Q 39.1 302.83981523215147  78.2 267.7614123004579T 156.4 203.65093671128767T 234.6 120.77907933696196T 312.8 97.67070341950219T 391 15.819485202229941L 391 0 Z"></animate>
                        </path>
                        <path d="" fill="url(#lg-0.00033050074062868084)" opacity="0.4">
                            <animate attributeName="d" dur="10s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcMode="spline" keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1" begin="-6s" values="M0 0L 0 342.6388060028802Q 39.1 310.29597664334693  78.2 281.4403239096219T 156.4 236.30412830185156T 234.6 169.8881365174391T 312.8 117.10290591432246T 391 23.837728221825046L 391 0 Z;M0 0L 0 317.2325075194358Q 39.1 330.2739932803082  78.2 291.5067588488549T 156.4 205.2642155972788T 234.6 140.15726703998234T 312.8 91.70268094499019T 391 22.301399179322573L 391 0 Z;M0 0L 0 352.1268437476903Q 39.1 291.24663908867757  78.2 260.16170158342914T 156.4 213.60724398818024T 234.6 143.03690039610146T 312.8 94.33219162291616T 391 17.140249388673567L 391 0 Z;M0 0L 0 342.6388060028802Q 39.1 310.29597664334693  78.2 281.4403239096219T 156.4 236.30412830185156T 234.6 169.8881365174391T 312.8 117.10290591432246T 391 23.837728221825046L 391 0 Z"></animate>
                        </path>
                        <path d="" fill="url(#lg-0.00033050074062868084)" opacity="0.4">
                            <animate attributeName="d" dur="10s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcMode="spline" keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1" begin="-8s" values="M0 0L 0 340.0583481900363Q 39.1 282.44221984661795  78.2 249.90889806226627T 156.4 196.5020391024322T 234.6 123.30670982608905T 312.8 81.96600460171123T 391 14.672888704409559L 391 0 Z;M0 0L 0 347.4777852450436Q 39.1 284.85194948518415  78.2 255.51401043508412T 156.4 196.30348901813156T 234.6 149.8818519194863T 312.8 66.52238576593203T 391 1.0096363695607238L 391 0 Z;M0 0L 0 314.2921754814829Q 39.1 296.6486198443872  78.2 252.43477116566743T 156.4 207.56093869048098T 234.6 128.96012173761332T 312.8 94.8849788155992T 391 29.985633909065314L 391 0 Z;M0 0L 0 340.0583481900363Q 39.1 282.44221984661795  78.2 249.90889806226627T 156.4 196.5020391024322T 234.6 123.30670982608905T 312.8 81.96600460171123T 391 14.672888704409559L 391 0 Z"></animate>
                        </path>
                    </g>
                </svg>
            </div>
            <div className='login'>
                <h1>Login</h1>
                <div>
                    <h5 style={
                        {marginBottom: 5}
                    }>Email:</h5>
                    <input type='text' name='email'/>
                </div>
                <div>
                    <h5 style={
                        {marginBottom: 5}
                    }>Password:</h5>
                    <input type='password' name='password'/>
                </div>
                <p>Or</p>
                <div>

                        <div>
                            <GoogleLogin clientId='972106384956-l3sm7gtprpf683ohqrqj7mql95uubt41.apps.googleusercontent.com'
                            buttonText='Sign in and Authorize Calendar'
                            onSuccess={responseGoogle}
                            onFailure={responseError}
                            cookiePolicy={'single_host_origin'}
                            // This is important
                            responseType='code'
                            accessType='offline'
                            scope='openid email profile https://www.googleapis.com/auth/calendar'
                            />
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login

function Pakan(props) {
    const {nodes, materials} = useGLTF('/pakan.glb')
    return (
        <group {...props}
            dispose={null}>
            <group rotation={
                    [
                        -Math.PI / 2,
                        0,
                        0
                    ]
                }
                scale={0.015}>
                <group rotation={
                    [
                        Math.PI / 2,
                        0,
                        0
                    ]
                }>
                    <group scale={100}>
                        <mesh geometry={
                                nodes.pakanStatue1_beard_rigAnimationPakanPxrDisney1SG_0.geometry
                            }
                            material={
                                materials.rigAnimationPakanPxrDisney1SG
                            }/>
                        <mesh geometry={
                                nodes.pakanStatue1_beard_initialShadingGroup_0.geometry
                            }
                            material={
                                materials.initialShadingGroup
                            }/>
                    </group>
                    <mesh geometry={
                            nodes.pakanStatue1_table001_basisdesert_0.geometry
                        }
                        material={
                            materials.basisdesert
                        }
                        scale={100}/>
                    <mesh geometry={
                            nodes.pakanStatue1_eyes001_eyesglass_0.geometry
                        }
                        material={
                            materials.eyesglass
                        }
                        scale={100}/>
                    <mesh geometry={
                            nodes.pakanStatue1_Scarf001_scarf_02_0.geometry
                        }
                        material={
                            materials.scarf_02
                        }
                        scale={100}/>
                    <mesh geometry={
                            nodes.pakanStatue1_head_head_0.geometry
                        }
                        material={
                            materials.head
                        }
                        scale={100}/>
                    <mesh geometry={
                            nodes.pakanStatue1_table_basis_0.geometry
                        }
                        material={
                            materials.basis
                        }
                        scale={100}/>
                    <mesh geometry={
                            nodes.staff_pakanStatue1_staff_0.geometry
                        }
                        material={
                            materials.staff
                        }
                        scale={100}/>
                    <mesh geometry={
                            nodes.pakanStatue1_Scarf_scarf_0.geometry
                        }
                        material={
                            materials.scarf
                        }
                        scale={100}/>
                    <mesh geometry={
                            nodes.pakanStatue1_Cloths_Clothes_0.geometry
                        }
                        material={
                            materials.Clothes
                        }
                        scale={100}/>
                    <mesh geometry={
                            nodes.pakanStatue1_eyes_eyes_0.geometry
                        }
                        material={
                            materials.eyes
                        }
                        scale={100}/>
                    <mesh geometry={
                            nodes.pakanStatue1_accessories_accessories_0.geometry
                        }
                        material={
                            materials.accessories
                        }
                        scale={100}/>
                    <mesh geometry={
                            nodes.pakanStatue1_Body_Body_0.geometry
                        }
                        material={
                            materials.Body
                        }
                        scale={100}/>
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('/pakan.glb')
