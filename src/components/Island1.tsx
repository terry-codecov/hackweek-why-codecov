import * as React from "react";
import { useState } from "react";
import { useControls } from "leva";
import { BallCollider } from "@react-three/rapier";
import { Html } from "@react-three/drei";

import { Model as IslandModel } from "./generated/Island1";
import { Modal } from "./modals/Modal";

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
        onIntersectionExit={() => {
          setShowButton(false);
          setModalOpen(false);
        }}
        sensor
        args={[25]}
      ></BallCollider>
      {modalOpen && (
        <Modal
          title="What is Code Coverage?"
          setOpenModal={setModalOpen}
          order={1}
        >
          Code coverage is a testing technique that informs what code is tested
          and what is not tested. It is often represented as a percentage of the
          number of lines of code that are tested versus the entire codebase.
        </Modal>
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
