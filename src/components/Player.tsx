import * as React from "react";
import { useControls, folder } from "leva";
import { Suspense } from "react";
import { RigidBody, CuboidCollider } from "@react-three/rapier";
import { OrthographicCamera } from "@react-three/drei";

import { ECS } from "../state";
import { Model as Boat } from "./Boat";

const Player = () => {
  const ref = React.useRef(null);
  const rigidRef = React.useRef(null);

  const { rotation, position } = useControls({
    player: folder({
      rotation: {
        value: {
          x: 0,
          y: 1.5,
          z: 0,
        },
        step: 0.05,
      },
    }),
    camera: folder({
      position: {
        value: {
          x: 50,
          y: 25,
          z: 50,
        },
        step: 0.05,
      },
    }),
  });

  return (
    <Suspense fallback={null}>
      <ECS.Entity>
        {/* <OrthographicCamera
          makeDefault={true}
          position={[position.x, position.y, position.z]}
          near={0.1}
          far={500}
        /> */}
        <ECS.Component name="position" data={{ x: 0, y: -4, z: 0 }} />
        <ECS.Component name="velocity" data={{ x: 0, y: 0, z: 0 }} />
        <ECS.Component name="active" data={true} />
        <ECS.Component name="rigid" data={rigidRef}></ECS.Component>
        <ECS.Component name="sceneObject" data={ref}>
          <group ref={ref}>
            <RigidBody
              ref={rigidRef}
              colliders={false}
              // restitution={2}
              mass={1}
              type="dynamic"
            >
              <Boat
                scale="2"
                position={[0, -1, 0]}
                rotation={[rotation.x, rotation.y, rotation.z]}
              />
              <CuboidCollider
                args={[10, 1, 10]}
                position={[0, -1, 0]}
                rotation={[rotation.x, rotation.y, rotation.z]}
                friction={0.5}
              />
            </RigidBody>
          </group>
        </ECS.Component>
      </ECS.Entity>
    </Suspense>
  );
};

export { Player };
