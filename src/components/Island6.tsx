import * as React from "react";
import { useState } from "react";
import { useControls } from "leva";
import { BallCollider } from "@react-three/rapier";
import { Html } from "@react-three/drei";

import { Model as IslandModel } from "./generated/Island6";
import { Modal } from "./modals/Island6/island6";

export function Island6() {
  const [showButton, setShowButton] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const { position } = useControls("island 6", {
    position: [60, 0, -140],
  });

  return (
    <group position={position} rotation={[0, 4.55, 0]}>
      <BallCollider args={[15]} position={[-2, 0, -5]}></BallCollider>
      <IslandModel scale={1} />
      <BallCollider
        onIntersectionEnter={() => setShowButton(true)}
        onIntersectionExit={() => {
          setModalOpen(false);
          setShowButton(false);
        }}
        sensor
        args={[23]}
        position={[-2, 0, -5]}
      ></BallCollider>
      {modalOpen && (
        <Html>
          <Modal setOpenModal={setModalOpen} />
        </Html>
      )}
      {showButton && (
        <Html>
          <button
            onClick={() => {
              setModalOpen(true);
              setShowButton(false);
            }}
          >
            Learn more
          </button>
        </Html>
      )}
    </group>
  );
}
