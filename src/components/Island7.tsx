import * as React from "react";
import { useState } from "react";
import { useControls } from "leva";
import { BallCollider } from "@react-three/rapier";
import { Html } from "@react-three/drei";

import { Model as IslandModel } from "./generated/Island7";
import { Modal } from "./modals/Modal";

export function Island7() {
  const [showButton, setShowButton] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const { position } = useControls("island 7", {
    position: [20, 0, -150],
  });

  return (
    <group position={position} rotation={[0, 4.55, 0]}>
      <BallCollider args={[12]} position={[-12, 0, -5]}></BallCollider>
      <IslandModel scale={1} />
      <BallCollider
        position={[-12, 0, -5]}
        onIntersectionEnter={() => setShowButton(true)}
        onIntersectionExit={() => {
          setModalOpen(false);
          setShowButton(false);
        }}
        sensor
        args={[22]}
      ></BallCollider>
      {modalOpen && (
        <Modal
          title="Path Coverage - is often considered a part of branch coverage
            calculations."
          setOpenModal={setModalOpen}
          order={4}
        >
          {" "}
          So which one is better? If you are limited to only calculating one, we
          recommend line coverage. Line coverage will at least cover the entire
          codebase. At Codecov, we aggregate both sets of data. If both line and
          branch coverage are provided, we will use the branch information and
          fill in unknown lines with the line coverage information to provide a
          more holistic view of your coverage.
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
