import * as React from "react";
import { useState } from "react";
import { useControls } from "leva";
import { BallCollider } from "@react-three/rapier";
import { Html } from "@react-three/drei";

import { Model as IslandModel } from "./generated/Island5";
import { Modal } from "./modals/Modal";

export function Island5() {
  const [showButton, setShowButton] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const { position } = useControls("island 5", {
    position: [-18, 0, -160],
  });

  return (
    <group position={position} rotation={[0, 4.55, 0]}>
      <BallCollider args={[15]}></BallCollider>
      <BallCollider args={[15]} position={[-10, 0, 5]}></BallCollider>
      <IslandModel scale={1.25} />
      <BallCollider
        onIntersectionEnter={() => setShowButton(true)}
        onIntersectionExit={() => {
          setShowButton(false);
          setModalOpen(false);
        }}
        sensor
        args={[23]}
      ></BallCollider>
      {modalOpen && (
        <Modal
          title="Getting Started with Code Coverage"
          setOpenModal={setModalOpen}
          order={3}
        >
          Getting started with code coverage usually requires your codebase to
          have tests. If you don’t have any tests, then you will have 0% code
          coverage. Most languages have their own tools to calculate coverage
          when a test suite is run. After you have added tests and decided on
          what tool to use, you can begin to collect coverage metrics.
          <br></br>Using a code coverage as a service tool, like Codecov, can
          help get that data back in front of your developers.
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
