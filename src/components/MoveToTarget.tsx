import * as React from "react";
import { ECS } from "../state";

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
          <sphereGeometry />
          <meshStandardMaterial color="hotpink" />
        </mesh>
      </ECS.Component>
    </ECS.Entity>
  );
};

export { MoveToTarget };
