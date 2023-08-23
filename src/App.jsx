import { useControls } from "leva";
import { Perf } from "r3f-perf";
import { Canvas } from "@react-three/fiber";
import { MapControls } from "@react-three/drei";

import { Scene } from "./Scene";

function Lights() {
  return (
    <>
      <MapControls maxDistance={150} maxZoom={150} />
      <color attach="background" args={["skyblue"]} />
      <fog attach="fog" args={["skyblue", 0.002, 400]} />
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
    <Canvas camera={{ position: [50, 25, 0] }}>
      {perfVisible && <Perf position="top-left" />}
      <Lights />
      <Scene />
    </Canvas>
  );
}

export default App;
