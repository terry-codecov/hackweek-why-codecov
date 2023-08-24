import * as React from "react";
import { useState } from "react";
import { Physics, BallCollider } from "@react-three/rapier";
import { useControls, folder } from "leva";
import { Html } from "@react-three/drei";

import { Player } from "./components/Player";
import { Ground } from "./components/Ground";
import { Model as Island1Beach } from "./components/Island1Beach";
import Modal from "./components/modals/Island1/island1";
import { FishingSpots } from "./components/FishingSpots";

function Scene() {
  const { physicsDebug, position } = useControls({
    physicsDebug: false,
    island1: folder({
      position: [-72, 0, -40],
    }),
  });

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Physics debug={physicsDebug}>
      <Player />
      <Ground />
      <FishingSpots />
      {/* <group position={position}>
        <BallCollider args={[15]}></BallCollider>
        <Island1Beach scale={2} />
        <BallCollider
          onIntersectionEnter={() => setModalOpen(true)}
          onIntersectionExit={() => setModalOpen(false)}
          sensor
          args={[35]}
        ></BallCollider>
        {modalOpen && (
          <Html fullscreen visible={modalOpen}>
            <Modal setOpenModal={setModalOpen} />
          </Html>
        )}
      </group> */}
    </Physics>
  );
}

export { Scene };
