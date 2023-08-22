import { useControls } from "leva";
// import { Wireframe } from "@react-three/drei";
import React from "react";

function Ground({ onClick }) {
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
    <mesh
      scale={scale}
      onClick={onClick}
      position={[position.x, position.y, position.z]}
      rotation={[rotation.x, rotation.y, rotation.z]}
    >
      <planeGeometry args={[500, 500, 1, 1]} />
      <meshBasicMaterial color={color} />
      {/* <Wireframe stroke="white" squeeze dash /> */}
    </mesh>
  );
}

export { Ground };
