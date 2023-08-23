import * as React from "react";
import { ECS } from "../state";
import { CuboidCollider } from "@react-three/rapier";

const MoveToTarget = () => {
  const ref = React.useRef<THREE.Object3D>();
  return (
    <ECS.Entity>
      <ECS.Component name="position" data={{ x: 0, y: 0, z: 0 }} />
      <ECS.Component name="active" data={true} />
      <ECS.Component name="trigger" data={true} />
      <ECS.Component name="moveToTarget" data={true} />
      <ECS.Component name="sceneObject" data={ref}>
        <mesh ref={ref}>
          <CuboidCollider
            sensor
            position={[10, 0, 35]}
            args={[10, 5, 20]}
            onIntersectionEnter={() => {
              console.log("destination reached");
            }}
          />
        </mesh>
      </ECS.Component>
    </ECS.Entity>
  );
};

export { MoveToTarget };
