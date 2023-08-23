import * as React from "react";
import { useControls } from "leva";
import { ECS } from "../state";

const FishingSpots = () => {
  const ref = React.useRef<THREE.Object3D>();
  const { color, position } = useControls("fish", {
    color: "blue",
    position: {
      value: {
        x: 25,
        y: -4.5,
        z: 25,
      },
    },
  });
  return (
    <ECS.Entity>
      <ECS.Component name="active" data={true} />
      <ECS.Component name="trigger" data={true} />
      <ECS.Component name="sceneObject" data={ref}>
        <mesh
          ref={ref}
          position={[position.x, position.y, position.z]}
          rotation={[-1.57, 0, 0]}
          onIntersectionEnter={() => {
            console.log("aaa");
          }}
        >
          <circleGeometry args={[5, 16, 5, 10]} />
          <meshStandardMaterial color={color} />
        </mesh>
      </ECS.Component>
    </ECS.Entity>
  );
};

export { FishingSpots };
