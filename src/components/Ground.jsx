import { useControls } from "leva";
// import { Wireframe } from "@react-three/drei";
import React from "react";
import { NodeToyMaterial, NodeToyTick } from "@nodetoy/react-nodetoy";
import { CuboidCollider } from "@react-three/rapier";
import { useEntities } from "miniplex-react";

import { ECS } from "../state";
import { data } from "../shader/waterData";

const movingEntities = ECS.world.with("position", "rigid");

function Ground({ onClick }) {
  const [player] = useEntities(movingEntities);
  const { scale, color, position, rotation, size, radius, maxAge } =
    useControls("waves", {
      color: "#00A5A8",
      scale: 1,
      position: {
        value: {
          x: 0,
          y: -5,
          z: 0,
        },
        step: 0.05,
      },
      rotation: {
        value: {
          x: -Math.PI * 0.5,
          y: 0,
          z: Math.PI * 0.5,
        },
        step: 0.05,
      },
    });

  return (
    <>
      <mesh
        scale={scale}
        onClick={onClick}
        position={[position.x, position.y, position.z]}
        rotation={[rotation.x, rotation.y, rotation.z]}
      >
        <planeGeometry args={[3000, 2000, 1, 1]} />
        <CuboidCollider
          args={[3000, 2000, 1, 1]}
          position={[0, 0, 0]}
          friction={0.05}
          // onContactForce={(payload) => {
          //   const { totalForceMagnitude } = payload;
          //   if (totalForceMagnitude < 300) {
          //     // Get boat and apply upward force
          //     player.current?.applyImpulse({ x: 0, y: 10, z: 0 }, true);
          //   }
          //   onContactForce?.(payload);
          // }}
        />
        <NodeToyMaterial data={data} />
        {/* <meshBasicMaterial color={color} /> */}
        {/* <Wireframe stroke="white" squeeze dash /> */}
      </mesh>
      <NodeToyTick />
    </>
  );
}

export { Ground };
