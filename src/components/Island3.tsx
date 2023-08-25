import * as React from "react";
import { useState } from "react";
import { useControls } from "leva";
import { BallCollider } from "@react-three/rapier";
import { Html } from "@react-three/drei";

import { Model as IslandModel } from "./generated/Island3";
import {Modal} from "./modals/Island3/island3";

export function Island3() {
  const [showButton, setShowButton] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const { position } = useControls("island 3", {
    position: [62, 0, -40 * 2],
  });

  return (
    <group position={position} rotation={[0, 5.25, 0]}>
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
