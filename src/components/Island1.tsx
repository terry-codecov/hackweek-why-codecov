import * as React from "react";
import { useState } from "react";
import { useControls } from "../useLeva";
import { BallCollider } from "@react-three/rapier";
import { Html } from "@react-three/drei";

import { Model as IslandModel } from "./generated/Island1";
import Modal from "./modals/Island1/island1";

export function Island1() {
  const [showButton, setShowButton] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const { position } = useControls("island 1", {
    position: [-82, 0, -60],
  });

  return (
    <group position={position}>
      <BallCollider args={[15]}></BallCollider>
      <IslandModel scale={2} />
      <BallCollider
        onIntersectionEnter={() => setShowButton(true)}
        onIntersectionExit={() => setShowButton(false)}
        sensor
        args={[25]}
      ></BallCollider>
      {showButton && (
        <Html>
          <Modal setOpenModal={setShowButton} />
        </Html>
      )}
    </group>
  );
}
