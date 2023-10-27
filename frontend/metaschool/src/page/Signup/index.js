import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { auth } from "../../Firebase";

const Signup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/courses");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };

  return (
    <div className="loginMain">
      <div className="Avatar">
        <Canvas
          camera={{ position: [2, 7, 12.25], fov: 15 }}
          style={{
            backgroundColor: "transparent",
            width: "30vw",
            height: "70vh",
            zIndex: 1000,
          }}
        >
          <ambientLight intensity={5} />
          <ambientLight intensity={5} />
          <directionalLight intensity={5} />
          <Suspense fallback={null}></Suspense>
          <OrbitControls />
        </Canvas>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          style={{
            background: "rgb(0,0,0)",
            display: "block",
            zIndex: 1,
            shapeRendering: "auto",
            position: "absolute",
            top: 0,
            left: 0,
            filter: "rotateZ(180deg)",
          }}
          width="400"
          height="100vh"
          preserveAspectRatio="xMidYMid"
          viewBox="0 0 500 600  "
        >
          <g transform="translate(195.5,353.5) scale(1,-1) translate(-195.5,-353.5)">
            <linearGradient
              id="lg-0.00033050074062868084"
              x1="0"
              x2="1"
              y1="0"
              y2="0"
            >
              <stop stop-color="#4f7abe" offset="0"></stop>
              <stop stop-color="#0a7142" offset="1"></stop>
            </linearGradient>
            <path d="" fill="url(#lg-0.00033050074062868084)" opacity="0.4">
              <animate
                attributeName="d"
                dur="10s"
                repeatCount="indefinite"
                keyTimes="0;0.333;0.667;1"
                calcMode="spline"
                keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1"
                begin="0s"
                values="M0 0L 0 314.9864821876473Q 39.1 291.72321825178466  78.2 253.06201566408646T 156.4 225.79445166832565T 234.6 159.4644548151999T 312.8 104.87893930181093T 391 51.25157042016423L 391 0 Z;M0 0L 0 341.26292457172Q 39.1 296.1387113415588  78.2 261.38309411322336T 156.4 180.7359063609391T 234.6 131.67323718909T 312.8 65.05621551612711T 391 2.6397938672361647L 391 0 Z;M0 0L 0 347.24924285466943Q 39.1 321.0730554336404  78.2 282.26511108729073T 156.4 217.64242393428796T 234.6 141.1066224172935T 312.8 121.67484138376011T 391 19.54253110168969L 391 0 Z;M0 0L 0 314.9864821876473Q 39.1 291.72321825178466  78.2 253.06201566408646T 156.4 225.79445166832565T 234.6 159.4644548151999T 312.8 104.87893930181093T 391 51.25157042016423L 391 0 Z"
              ></animate>
            </path>
            <path d="" fill="url(#lg-0.00033050074062868084)" opacity="0.4">
              <animate
                attributeName="d"
                dur="10s"
                repeatCount="indefinite"
                keyTimes="0;0.333;0.667;1"
                calcMode="spline"
                keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1"
                begin="-2s"
                values="M0 0L 0 336.3494682440059Q 39.1 284.2328703178914  78.2 247.74589935735688T 156.4 184.90086583683404T 234.6 148.19053887182162T 312.8 53.37308203220488T 391 12.002448837107465L 391 0 Z;M0 0L 0 339.87363339408995Q 39.1 290.9949934276414  78.2 254.1997521293892T 156.4 225.83811611985882T 234.6 169.8441728164142T 312.8 90.60144739725553T 391 43.737265091240374L 391 0 Z;M0 0L 0 315.3696138336399Q 39.1 310.93190824489665  78.2 271.68208378180924T 156.4 200.77786016423536T 234.6 126.992778597972T 312.8 106.4002244986429T 391 35.23984407236276L 391 0 Z;M0 0L 0 336.3494682440059Q 39.1 284.2328703178914  78.2 247.74589935735688T 156.4 184.90086583683404T 234.6 148.19053887182162T 312.8 53.37308203220488T 391 12.002448837107465L 391 0 Z"
              ></animate>
            </path>
            <path d="" fill="url(#lg-0.00033050074062868084)" opacity="0.4">
              <animate
                attributeName="d"
                dur="10s"
                repeatCount="indefinite"
                keyTimes="0;0.333;0.667;1"
                calcMode="spline"
                keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1"
                begin="-4s"
                values="M0 0L 0 337.8124042892053Q 39.1 302.83981523215147  78.2 267.7614123004579T 156.4 203.65093671128767T 234.6 120.77907933696196T 312.8 97.67070341950219T 391 15.819485202229941L 391 0 Z;M0 0L 0 347.33789989499905Q 39.1 299.2274099763515  78.2 254.67851413917992T 156.4 217.08711720814657T 234.6 163.04231445947622T 312.8 128.785943377323T 391 27.294362534396157L 391 0 Z;M0 0L 0 344.58971237068414Q 39.1 313.3713069270186  78.2 282.8723433443655T 156.4 218.93428197355837T 234.6 119.2937416053135T 312.8 46.90145398443423T 391 -8.342964520390126L 391 0 Z;M0 0L 0 337.8124042892053Q 39.1 302.83981523215147  78.2 267.7614123004579T 156.4 203.65093671128767T 234.6 120.77907933696196T 312.8 97.67070341950219T 391 15.819485202229941L 391 0 Z"
              ></animate>
            </path>
            <path d="" fill="url(#lg-0.00033050074062868084)" opacity="0.4">
              <animate
                attributeName="d"
                dur="10s"
                repeatCount="indefinite"
                keyTimes="0;0.333;0.667;1"
                calcMode="spline"
                keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1"
                begin="-6s"
                values="M0 0L 0 342.6388060028802Q 39.1 310.29597664334693  78.2 281.4403239096219T 156.4 236.30412830185156T 234.6 169.8881365174391T 312.8 117.10290591432246T 391 23.837728221825046L 391 0 Z;M0 0L 0 317.2325075194358Q 39.1 330.2739932803082  78.2 291.5067588488549T 156.4 205.2642155972788T 234.6 140.15726703998234T 312.8 91.70268094499019T 391 22.301399179322573L 391 0 Z;M0 0L 0 352.1268437476903Q 39.1 291.24663908867757  78.2 260.16170158342914T 156.4 213.60724398818024T 234.6 143.03690039610146T 312.8 94.33219162291616T 391 17.140249388673567L 391 0 Z;M0 0L 0 342.6388060028802Q 39.1 310.29597664334693  78.2 281.4403239096219T 156.4 236.30412830185156T 234.6 169.8881365174391T 312.8 117.10290591432246T 391 23.837728221825046L 391 0 Z"
              ></animate>
            </path>
            <path d="" fill="url(#lg-0.00033050074062868084)" opacity="0.4">
              <animate
                attributeName="d"
                dur="10s"
                repeatCount="indefinite"
                keyTimes="0;0.333;0.667;1"
                calcMode="spline"
                keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1"
                begin="-8s"
                values="M0 0L 0 340.0583481900363Q 39.1 282.44221984661795  78.2 249.90889806226627T 156.4 196.5020391024322T 234.6 123.30670982608905T 312.8 81.96600460171123T 391 14.672888704409559L 391 0 Z;M0 0L 0 347.4777852450436Q 39.1 284.85194948518415  78.2 255.51401043508412T 156.4 196.30348901813156T 234.6 149.8818519194863T 312.8 66.52238576593203T 391 1.0096363695607238L 391 0 Z;M0 0L 0 314.2921754814829Q 39.1 296.6486198443872  78.2 252.43477116566743T 156.4 207.56093869048098T 234.6 128.96012173761332T 312.8 94.8849788155992T 391 29.985633909065314L 391 0 Z;M0 0L 0 340.0583481900363Q 39.1 282.44221984661795  78.2 249.90889806226627T 156.4 196.5020391024322T 234.6 123.30670982608905T 312.8 81.96600460171123T 391 14.672888704409559L 391 0 Z"
              ></animate>
            </path>
          </g>
        </svg>
      </div>
      <div className="login">
        <main className="login">
          <section>
            <div>
              <div>
                <p> MetaSchool </p>
                <form>
                  <div>
                    <label htmlFor="email-address">Email address</label>
                    <input
                      type="email"
                      label="Email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="Email address"
                    />
                  </div>

                  <div>
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      label="Create password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      placeholder="Password"
                    />
                  </div>
                  <button className="bg-" type="submit" onClick={onSubmit}>
                    Sign up
                  </button>
                </form>
                <p>
                  Already have an account? <a href="/">Sign in</a>
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Signup;

export function Model(props) {
  const { nodes, materials } = useGLTF("/avaturn_demo_avatar.glb");
  return (
    <group {...props} dispose={null}>
      <primitive object={nodes.Hips} />
      <skinnedMesh
        geometry={nodes.avaturn_body.geometry}
        material={materials.avaturn_body_material}
        skeleton={nodes.avaturn_body.skeleton}
      />
      <skinnedMesh
        geometry={nodes.avaturn_hair_0.geometry}
        material={materials.avaturn_hair_0_material}
        skeleton={nodes.avaturn_hair_0.skeleton}
      />
      <skinnedMesh
        geometry={nodes.avaturn_hair_1.geometry}
        material={materials.avaturn_hair_1_material}
        skeleton={nodes.avaturn_hair_1.skeleton}
      />
      <skinnedMesh
        geometry={nodes.avaturn_shoes_0.geometry}
        material={materials.avaturn_shoes_0_material}
        skeleton={nodes.avaturn_shoes_0.skeleton}
      />
      <skinnedMesh
        geometry={nodes.avaturn_look_0.geometry}
        material={materials.avaturn_look_0_material}
        skeleton={nodes.avaturn_look_0.skeleton}
      />
    </group>
  );
}

useGLTF.preload("/avaturn_demo_avatar.glb");
