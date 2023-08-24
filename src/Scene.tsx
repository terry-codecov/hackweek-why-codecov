import * as React from "react";
import { Physics } from "@react-three/rapier";
import { useControls, folder } from "leva";
import { CuboidCollider, RigidBody } from "@react-three/rapier";

import { Player } from "./components/Player";
import { Ground } from "./components/Ground";
import { Model as Island1Beach } from "./components/Island1Beach";

function Scene() {
  const { physicsDebug, position } = useControls({
    physicsDebug: false,
    island1: folder({
      position: [-72, 0, -40],
    }),
  });

  return (
    <Physics debug={physicsDebug}>
      <Player />
      <Ground />
      <group position={position}>
        <CuboidCollider args={[10, 10, 10]}></CuboidCollider>
        <Island1Beach scale={2} />
      </group>
    </Physics>
  );
}

export { Scene };
