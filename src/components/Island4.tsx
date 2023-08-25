import * as React from "react";
import { useState } from "react";
import { useControls } from "leva";
import { BallCollider } from "@react-three/rapier";
import { Html } from "@react-three/drei";

import { Model as IslandModel } from "./generated/Island4";
import {Modal} from "./modals/Island4/island4";

export function Island4() {
  const [showButton, setShowButton] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const { position } = useControls("island 4", {
    position: [-52, 0, -60 * 1.25],
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
        args={[20]}
      ></BallCollider>
      {modalOpen && (
        <Html>
          <Modal setOpenModal={setModalOpen} />
        </Html>
      )}
      {showButton && (
        <Html>
          <button onClick={()=> {
            setModalOpen(true);
            setShowButton(false);
          }}>Learn more</button>
        </Html>
      )}
    </group>
  );
}
