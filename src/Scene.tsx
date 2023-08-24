import * as React from "react";
import { Physics } from "@react-three/rapier";
import { useControls } from "leva";

import { Player } from "./components/Player";
import { Ground } from "./components/Ground";
import { Island1 } from "./components/Island1";
// import { Island3 } from "./components/Island3";

import { FishingSpots } from "./components/FishingSpots";

function Scene() {
  const { physicsDebug, position } = useControls({
    physicsDebug: false,
  });

  return (
    <Physics debug={physicsDebug}>
      <Player />
      <Ground />
      <FishingSpots />
      <Island1 />
      {/* <Island3 /> */}
    </Physics>
  );
}

export { Scene };
