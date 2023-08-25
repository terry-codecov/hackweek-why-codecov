import * as React from "react";
import { useState } from "react";
import { useControls } from "leva";
import { BallCollider } from "@react-three/rapier";
import { Html } from "@react-three/drei";

import { Model as IslandModel } from "./generated/Island4";
// import Modal from "./modals/Island4/island4";

export function Island4() {
  const [showButton, setShowButton] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const { position } = useControls("island 4", {
    position: [-65, 0, -55],
  });

  return (
    <group position={position}>
      <BallCollider args={[15]}></BallCollider>{" "}
      <BallCollider position={[15, 0, -15]} args={[15]}></BallCollider>
      <BallCollider position={[-17, 0, -14]} args={[5]}></BallCollider>
      <IslandModel scale={2} />
      <BallCollider
        onIntersectionEnter={() => setShowButton(true)}
        onIntersectionExit={() => setShowButton(false)}
        sensor
        args={[20]}
      ></BallCollider>
      {/* {showButton && (
        <Html>
          <Modal setOpenModal={setShowButton} />
        </Html>
      )} */}
    </group>
  );
}
