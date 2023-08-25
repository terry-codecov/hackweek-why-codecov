import * as React from "react";
import { useState } from "react";
import { useControls } from "leva";
import { BallCollider } from "@react-three/rapier";
import { Html } from "@react-three/drei";

import { Model as IslandModel } from "./generated/Island4";
import { Modal } from "./modals/Modal";

export function Island4() {
  const [showButton, setShowButton] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const { position } = useControls("island 4", {
    position: [-65, 0, -115],
  });

  return (
    <group position={position}>
      <BallCollider args={[15]}></BallCollider>{" "}
      <BallCollider position={[15, 0, -15]} args={[15]}></BallCollider>
      <BallCollider position={[-17, 0, -14]} args={[5]}></BallCollider>
      <IslandModel scale={2} />
      <BallCollider
        onIntersectionEnter={() => setShowButton(true)}
        onIntersectionExit={() => {
          setShowButton(false);
          setModalOpen(false);
        }}
        sensor
        args={[26]}
      ></BallCollider>
      {modalOpen && (
        <Modal
          title="How Does Code Coverage Work?"
          order={2}
          setOpenModal={setModalOpen}
        >
          To calculate code coverage, counters are added to the code before
          running it in a test suite. These counters keep track of executed
          lines, branches, and functions, storing this information in a global
          object called coverage.
          <br></br>This process, known as instrumentation, helps monitor which
          lines of code are executed during tests. The provided Python program
          demonstrates this with counters added to the coverage object for each
          line, branch, and function.
          <br></br>This approach applies to larger projects as well, where
          additional meta information may be included in the format, while still
          following the same underlying methodology.
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
