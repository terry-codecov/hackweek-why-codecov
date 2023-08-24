import * as React from "react";
import { Physics } from "@react-three/rapier";
import { useControls } from "leva";

import { Player } from "./components/Player";
import { Ground } from "./components/Ground";
import { Island1 } from "./components/Island1";

import { Island2 } from "./components/Island2"; // Model doesnt work
import { Island3 } from "./components/Island3";
import { Island4 } from "./components/Island4";
import { Island5 } from "./components/Island5";

import { FishingSpots } from "./components/FishingSpots";

function Scene() {
  const { physicsDebug } = useControls({
    physicsDebug: false,
  });

  return (
    <Physics debug={physicsDebug}>
      <Player />
      <Ground />
      <FishingSpots />
      <Island1 />
      <Island2 />
      <Island3 />
      <Island4 />
      <Island5 />
    </Physics>
  );
}

export { Scene };
