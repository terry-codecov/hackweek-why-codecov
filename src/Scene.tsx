import * as React from "react";
import { Physics, CuboidCollider } from "@react-three/rapier";
import { useControls } from "leva";

import { Player } from "./components/Player";
import { Ground } from "./components/Ground";
import { Rock } from "./components/Rock";
import { Island1 } from "./components/Island1";
import { Island2 } from "./components/Island2";
import { Island3 } from "./components/Island3";
import { Island4 } from "./components/Island4";
import { Island5 } from "./components/Island5";
import { Island6 } from "./components/Island6";
import { Island7 } from "./components/Island7";
import { FishingSpots } from "./components/FishingSpots";

function Scene() {
  const { physicsDebug } = useControls({
    physicsDebug: false,
  });

  return (
    <Physics debug={physicsDebug}>
      <CuboidCollider args={[150, 5, 5]} position={[0, 0, 40]} />
      <CuboidCollider args={[150, 5, 5]} position={[0, 0, -260]} />
      <CuboidCollider args={[5, 5, 200]} position={[150, 0, -140]} />
      <CuboidCollider args={[5, 5, 200]} position={[-150, 0, -140]} />
      <Player />
      <Ground />
      {/* <FishingSpots /> */}
      <Island1 />
      <Island2 />
      <Island3 />
      <Island4 />
      <Island5 />
      <Island6 />
      <Island7 />
      {/* <Rock position={[5, 0, 5]} /> */}
    </Physics>
  );
}

export { Scene };
