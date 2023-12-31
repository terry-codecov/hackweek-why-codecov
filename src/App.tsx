import * as React from "react";
import { useControls } from "leva";
import { Perf } from "r3f-perf";
import { Canvas } from "@react-three/fiber";
import { KeyboardControls, Loader } from "@react-three/drei";
import {
  Bloom,
  EffectComposer,
  Noise,
  Vignette,
} from "@react-three/postprocessing";

import { Scene } from "./Scene";

function Lights() {
  return (
    <>
      <color attach="background" args={["skyblue"]} />
      <fog attach="fog" args={["skyblue", 0.002, 900]} />
      <ambientLight intensity={0.7} />
      <directionalLight position={[1, 2, 3]} intensity={2.5} />
      <directionalLight position={[3, 2, 3]} intensity={0.75} />
      <EffectComposer>
        <Bloom luminanceThreshold={0.5} luminanceSmoothing={0.9} height={300} />
        <Noise opacity={0.02} />
        <Vignette eskil={false} offset={0.1} darkness={0.3} />
      </EffectComposer>
    </>
  );
}

function App() {
  const { perfVisible } = useControls("perf", {
    perfVisible: false,
  });

  return (
    <KeyboardControls
      map={[
        { name: "forward", keys: ["ArrowUp", "KeyW"] },
        { name: "backward", keys: ["ArrowDown", "KeyS"] },
        { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
        { name: "rightward", keys: ["ArrowRight", "KeyD"] },
        { name: "fish", keys: ["Space"] },
      ]}
    >
      <Canvas
        id="Codecove"
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
