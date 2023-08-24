import * as React from "react";
import { useState } from "react";
import { useControls } from "leva";
import { BallCollider } from "@react-three/rapier";
import { Html } from "@react-three/drei";

import { Model as IslandModel } from "./generated/Island1";
import Modal from "./modals/Island1/island1";

export function Island1() {
  const [modalOpen, setModalOpen] = useState(false);
  const { position } = useControls("island1", {
    position: [-72, 0, -40],
  });

  return (
    <group position={position}>
      <BallCollider args={[15]}></BallCollider>
      <IslandModel scale={2} />
      <BallCollider
        onIntersectionEnter={() => setModalOpen(true)}
        onIntersectionExit={() => setModalOpen(false)}
        sensor
        args={[35]}
      ></BallCollider>
      {modalOpen && (
        <Html>
          <Modal setOpenModal={setModalOpen} />
        </Html>
      )}
    </group>
  );
}
