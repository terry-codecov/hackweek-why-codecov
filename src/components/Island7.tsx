import * as React from "react";
import { useState } from "react";
import { useControls } from "leva";
import { BallCollider } from "@react-three/rapier";
import { Html } from "@react-three/drei";

import { Model as IslandModel } from "./generated/Island7";
// import Modal from "./modals/Island5/island7";

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
        onIntersectionExit={() => setShowButton(false)}
        sensor
        args={[17]}
      ></BallCollider>
      {/* {showButton && (
        <Html>
          <Modal setOpenModal={setShowButton} />
        </Html>
      )} */}
    </group>
  );
}