import * as React from "react";
import { useState } from "react";
import { useControls } from "leva";
import { BallCollider } from "@react-three/rapier";
import { Html } from "@react-three/drei";

import { Model as IslandModel } from "./generated/Island2";
// import Modal from "./modals/Island2/island2";

export function Island2() {
  const [showButton, setShowButton] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const { position } = useControls("island 2", {
    position: [90, 1.5, -60],
  });

  return (
    <group position={position} rotation={[0, 5, 0]}>
      <BallCollider args={[12]} position={[-4, 0, 0]}></BallCollider>
      <IslandModel scale={1} />
      <BallCollider
        position={[-4, 0, 0]}
        onIntersectionEnter={() => setShowButton(true)}
        onIntersectionExit={() => setShowButton(false)}
        sensor
        args={[16]}
      ></BallCollider>
      {/* {showButton && (
        <Html>
          <Modal setOpenModal={setShowButton} />
        </Html>
      )} */}
    </group>
  );
}
