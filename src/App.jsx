import { useRef, useState, Suspense } from "react";
import { useControls, folder } from "leva";
import { Perf } from "r3f-perf";

import { Canvas, useFrame } from "@react-three/fiber";
import { MapControls } from "@react-three/drei";

import { Model as Umbrella } from "./components/Umbrella";
import { Ground } from "./components/Ground";

function Box({ name = "box", ...props }) {
  // This reference will give us direct access to the mesh
  const meshRef = useRef();
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (meshRef.current.rotation.x += delta));
  // Return view, these are regular three.js elements expressed in JSX

  // Examples beyond the basic leva doc's can be found here:
  // https://leva.pmnd.rs/?path=/story/inputs-string--simple and then search the github for the story name, seems to be the best way.
  // https://github.com/pmndrs/leva/blob/b333a284f71ef9b581cdc2f6db046eab845f9ccd/packages/leva/stories/inputs/Number.stories.tsx#L37
  // Paid course examples
  // https://threejs-journey.com/lessons/debug-a-r3f-application#debug-ui-with-leva
  const { activeColor, color, position, min, max, args } = useControls(name, {
    color: folder({ activeColor: "hotpink", color: "blue" }),
    scale: folder({
      min: { value: 1, min: 0, max: 10 },
      max: { value: 1.5, min: 0, max: 10 },
    }),
    position: {
      value: {
        x: props?.position[0] ?? 0,
        y: props?.position[1] ?? 0,
        z: props?.position[2] ?? 0,
      },
      step: 0.05,
    },
    args: {
      value: {
        x: 1,
        y: 1,
        z: 1,
      },
      step: 0.05,
    },
  });

  return (
    <mesh
      {...props}
      position={[position.x, position.y, position.z]}
      ref={meshRef}
      scale={active ? max : min}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[args.x, args.y, args.z]} />
      <meshStandardMaterial color={hovered ? activeColor : color} />
    </mesh>
  );
}

function Lights() {
  return (
    <>
      <MapControls />
      <color attach="background" args={["skyblue"]} />
      <fog attach="fog" args={["skyblue", 0.002, 1000]} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <directionalLight position={[3, 2, 3]} intensity={1.5} />
    </>
  );
}

function App() {
  const { perfVisible, position } = useControls({
    perfVisible: false,
    umbrella: folder({
      position: {
        value: {
          x: -2.2,
          y: -4,
          z: 0,
        },
        step: 0.05,
      },
    }),
  });

  return (
    <Canvas camera={{ position: [50, 25, 0] }}>
      {perfVisible && <Perf position="top-left" />}
      <Lights />
      <Suspense fallback={null}>
        <Umbrella
          scale="5"
          rotation={[0, 5.5, 0]}
          position={[position.x, position.y, position.z]}
        />
      </Suspense>
      <Box name="box1" position={[10, 0, 0]} />
      <Box name="box2" position={[-10, 0, 0]} />
      <Ground />
    </Canvas>
  );
}

export default App;
