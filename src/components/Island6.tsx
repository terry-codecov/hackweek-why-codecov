import * as React from "react";
import { useState } from "react";
import { useControls } from "leva";
import { BallCollider } from "@react-three/rapier";
import { Html } from "@react-three/drei";

import { Model as IslandModel } from "./generated/Island6";
import { Modal } from "./modals/Modal";

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
        <Modal
          title="Setting a Coverage Goal"
          setOpenModal={setModalOpen}
          order={5}
        >
          Striving for 100% code coverage is debated among developers. While it
          ensures every line of code has associated tests, achieving it can be
          exhaustive and doesn’t guarantee bug-free code. Instead, focus on
          building a testing culture: start by setting up coverage tools, share
          coverage data with commits, gradually raise coverage standards per
          commit, targeting 30% and later 80% overall coverage. Hitting 100% is
          optional but not necessary; emphasis should be on test quality over
          sheer coverage. This approach balances meaningful testing and code
          quality.{" "}
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
