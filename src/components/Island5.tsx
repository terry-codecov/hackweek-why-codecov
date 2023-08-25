import * as React from "react";
import { useState } from "react";
import { useControls } from "leva";
import { BallCollider } from "@react-three/rapier";
import { Html } from "@react-three/drei";

import { Model as IslandModel } from "./generated/Island5";
import {Modal} from "./modals/Island5/island5";

export function Island5() {
  const [showButton, setShowButton] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const { position } = useControls("island 5", {
    position: [-12, 0, -60 * 2.25],
  });

  return (
    <group position={position} rotation={[0, 4.55, 0]}>
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
