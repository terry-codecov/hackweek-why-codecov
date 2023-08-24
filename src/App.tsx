import * as React from "react";
import { useControls } from "leva";
import { Perf } from "r3f-perf";
import { Canvas } from "@react-three/fiber";
import { KeyboardControls, Loader } from "@react-three/drei";

import { Scene } from "./Scene";

function Lights() {
  return (
    <>
      <color attach="background" args={["skyblue"]} />
      <fog attach="fog" args={["skyblue", 0.002, 300]} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <directionalLight position={[3, 2, 3]} intensity={1.5} />
    </>
  );
}

function App() {
  const { perfVisible } = useControls({
    perfVisible: false,
  });

  return (
    <KeyboardControls
      map={[
        { name: "forward", keys: ["ArrowUp", "KeyW"] },
        { name: "backward", keys: ["ArrowDown", "KeyS"] },
        { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
        { name: "rightward", keys: ["ArrowRight", "KeyD"] },
      ]}
    >
      <Canvas
        shadows
        camera={{
          fov: 45,
          near: 0.1,
          far: 500,
          position: [2.5, 4, 6],
        }}
      >
        {perfVisible && <Perf position="top-left" />}
        <Lights />
        <Scene />
      </Canvas>
      <Loader />
    </KeyboardControls>
  );
}

export default App;
