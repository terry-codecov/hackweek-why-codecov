import * as React from "react";
import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import { RigidBody, MeshCollider, BallCollider } from "@react-three/rapier";
import { ECS } from "../state";
import {
  Billboard,
  Text,
  KeyboardControls,
  useKeyboardControls,
} from "@react-three/drei";

const FishingSpots = () => {
  const ref = React.useRef(null);
  const [isIntersected, setIsIntersected] = React.useState(false);
  const [sub, get] = useKeyboardControls();

  useFrame(() => {
    const { fish } = get();

    if (fish && isIntersected) {
      console.log("asdf");
    }
  });

  const { color, position, rotation } = useControls("fish", {
    color: "#64c75b",
    position: {
      value: {
        x: -35,
        y: -4.5,
        z: -35,
      },
    },
    rotation: {
      value: {
        x: 0,
        y: 1.5,
        z: 0,
      },
      step: 0.05,
    },
  });
  return (
    <ECS.Entity>
      <ECS.Component name="active" data={true} />
      <ECS.Component name="trigger" data={true} />
      <ECS.Component name="sceneObject" data={ref}>
        <group>
          <mesh
            ref={ref}
            position={[position.x, position.y, position.z]}
            rotation={[-1.57, 0, 0]}
          >
            <circleGeometry args={[5, 16, 5, 10]} />
            <meshStandardMaterial color={color} />
          </mesh>
          <BallCollider
            sensor
            position={[position.x, position.y, position.z]}
            args={[5]}
            onIntersectionEnter={() => {
              setIsIntersected(true);
            }}
            onIntersectionExit={() => {
              setIsIntersected(false);
            }}
          />
          {isIntersected && (
            <Billboard
              follow={true}
              lockX={false}
              lockY={false}
              lockZ={false}
              position={[0, 12, 0]}
            >
              <Text fontSize={5}>Press space bar to fish</Text>
            </Billboard>
          )}
        </group>
      </ECS.Component>
    </ECS.Entity>
  );
};

export { FishingSpots };
