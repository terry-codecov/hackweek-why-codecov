import * as React from "react";
import { useState } from "react";
import { useControls } from "leva";
import { BallCollider } from "@react-three/rapier";
import { Html } from "@react-three/drei";

import { Model as IslandModel } from "./generated/Island3";
import { Modal } from "./modals/Modal";

export function Island3() {
  const [showButton, setShowButton] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const { position } = useControls("island 3", {
    position: [80, 0, -100],
  });

  return (
    <group position={position} rotation={[0, 5.75, 0]}>
      <BallCollider args={[12]}></BallCollider>
      <IslandModel scale={1} />
      <BallCollider
        onIntersectionEnter={() => setShowButton(true)}
        onIntersectionExit={() => {
          setShowButton(false);
          setModalOpen(false);
        }}
        sensor
        args={[18]}
      ></BallCollider>
      {modalOpen && (
        <Modal title="Why test code?" setOpenModal={setModalOpen} order={6}>
          A test runs a piece of code and ensures that the system produces the
          expected behavior given some input. Some tests check to see if a
          database updates properly, others will make sure a UI component is
          available. Why is testing is so important? Because bugs are everywhere
          and testing helps you find and prevent them.
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
