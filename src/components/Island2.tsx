import * as React from "react";
import { useState } from "react";
import { useControls } from "leva";
import { BallCollider } from "@react-three/rapier";
import { Html } from "@react-three/drei";

import { Model as IslandModel } from "./generated/Island2";
import { Modal } from "./modals/Modal";

export function Island2() {
  const [showButton, setShowButton] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const { position } = useControls("island 2", {
    position: [90, 1.5, -55],
  });

  return (
    <group position={position} rotation={[0, 23.5, 0]}>
      <BallCollider args={[12]} position={[-4, 0, 0]}></BallCollider>
      <IslandModel scale={1} />
      <BallCollider
        position={[-4, 0, 0]}
        onIntersectionEnter={() => setShowButton(true)}
        onIntersectionExit={() => {
          setShowButton(false);
          setModalOpen(false);
        }}
        sensor
        args={[19]}
      ></BallCollider>
      {modalOpen && (
        <Modal
          title="The Main Types of Code Coverage"
          order={7}
          setOpenModal={setModalOpen}
        >
          Line Coverage - we take a look to see whether every line has been run
          in a test. <br></br>Branch Coverage - tests to see if every branch in
          a conditional is tested. Path Coverage - is often considered a part of
          branch coverage calculations.<br></br>So which one is better? If you
          are limited to only calculating one, we recommend line coverage. Line
          coverage will at least cover the entire codebase. At Codecov, we
          aggregate both sets of data.
          <br></br>If both line and branch coverage are provided, we will use
          the branch information and fill in unknown lines with the line
          coverage information to provide a more holistic view of your coverage.
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
