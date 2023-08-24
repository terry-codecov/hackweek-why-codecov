// Reference https://codesandbox.io/s/rapier-character-controller-0b5o7u

import * as React from "react";
import { Quaternion, Euler, Vector3, Object3D } from "three";
import { useState, useRef } from "react";
import { useControls, folder } from "leva";
import { Suspense } from "react";
import { RigidBody } from "@react-three/rapier";
import type { RapierRigidBody } from "@react-three/rapier";
import {
  useKeyboardControls,
  Trail,
  Float,
  RoundedBox,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import { ECS } from "../state";
import { Model as Boat } from "./generated/Boat";

const Player = () => {
  const rigidRef = useRef<RapierRigidBody>(null);
  const [orientation, setOrientation] = useState(Math.PI);
  const [subscribeKeys, getKeys] = useKeyboardControls();

  const { speed } = useControls({
    player: folder({
      speed: { value: 1390, min: 500, max: 2000, step: 10 },
    }),
  });

  useFrame((state, delta) => {
    if (rigidRef?.current === null) return;
    // retrieve keys
    const keys = getKeys();

    let { forward, backward, leftward, rightward } = keys;

    // Keys pressed counter
    const nbOfKeysPressed = Object.values(keys).filter((key) => key).length;

    if (forward && backward && nbOfKeysPressed === 2) forward = false;

    if (leftward && rightward && nbOfKeysPressed === 2) leftward = false;

    /**
     * Model movement
     */

    const linvelY = rigidRef?.current?.linvel()?.y;

    // Reduce speed value if it's diagonal movement to always keep the same speed
    const normalizedSpeed =
      nbOfKeysPressed == 1 ? speed * delta : Math.sqrt(2) * (speed / 2) * delta;

    const impulse = {
      x: leftward ? -normalizedSpeed : rightward ? normalizedSpeed : 0,
      y: linvelY,
      z: forward ? -normalizedSpeed : backward ? normalizedSpeed : 0,
    };

    // Set model current linear velocity
    rigidRef?.current?.setLinvel(impulse, true);

    /**
     * Model orientation
     */

    const angle = Math.PI / 4 / 7; // rotation normalizedSpeed (more divided => more smooth)

    const topLeftAngle = 3.927; // (225 * Math.PI / 180).toFixed(3)

    const bottomLeftAngle = 5.498; // (315 * Math.PI / 180).toFixed(3)

    const topRightAngle = 2.356; // (135 * Math.PI / 180).toFixed(3)

    const bottomRightAngle = 0.785; // (45 * Math.PI / 180).toFixed(3)

    let aTanAngle = Math.atan2(Math.sin(orientation), Math.cos(orientation));
    aTanAngle = aTanAngle < 0 ? aTanAngle + Math.PI * 2 : aTanAngle;
    aTanAngle = Number(aTanAngle.toFixed(3));
    aTanAngle = aTanAngle == 0 ? Number((Math.PI * 2).toFixed(3)) : aTanAngle;

    const keysCombinations = {
      forwardRight: forward && !backward && !leftward && rightward,
      forwardLeft: forward && !backward && leftward && !rightward,
      backwardRight: !forward && backward && !leftward && rightward,
      backwardLeft: !forward && backward && leftward && !rightward,
      forward: forward && !backward && !leftward && !rightward,
      right: !forward && !backward && !leftward && rightward,
      backward: !forward && backward && !leftward && !rightward,
      left: !forward && !backward && leftward && !rightward,
    };

    // Forward-Rightward
    if (keysCombinations.forwardRight && aTanAngle != topRightAngle) {
      setOrientation(
        (prevState) => prevState + angle * (aTanAngle > topRightAngle ? -1 : 1)
      );
    }

    // Forward-Leftward
    if (keysCombinations.forwardLeft && aTanAngle != topLeftAngle) {
      setOrientation(
        (prevState) => prevState + angle * (aTanAngle > topLeftAngle ? -1 : 1)
      );
    }

    // Backward-Rightward
    if (keysCombinations.backwardRight && aTanAngle != bottomRightAngle) {
      setOrientation(
        (prevState) =>
          prevState +
          angle *
            (aTanAngle > bottomRightAngle && aTanAngle < topLeftAngle ? -1 : 1)
      );
    }

    // Backward-Leftward
    if (keysCombinations.backwardLeft && aTanAngle != bottomLeftAngle) {
      setOrientation(
        (prevState) =>
          prevState +
          angle *
            (aTanAngle < topRightAngle || aTanAngle > bottomLeftAngle ? -1 : 1)
      );
    }

    // Rightward
    if (keysCombinations.right && Math.sin(orientation) != 1) {
      setOrientation(
        (prevState) => prevState + angle * (Math.cos(orientation) > 0 ? 1 : -1)
      );
    }

    // Leftward
    if (keysCombinations.left && Math.sin(orientation) != -1) {
      setOrientation(
        (prevState) => prevState + angle * (Math.cos(orientation) > 0 ? -1 : 1)
      );
    }

    // Forward
    if (keysCombinations.forward && Math.cos(orientation) != -1) {
      setOrientation(
        (prevState) => prevState + angle * (Math.sin(orientation) > 0 ? 1 : -1)
      );
    }

    // Backward
    if (keysCombinations.backward && Math.cos(orientation) != 1) {
      setOrientation(
        (prevState) => prevState + angle * (Math.sin(orientation) > 0 ? -1 : 1)
      );
    }

    // Lock X and Z model rotations and update rotation Y
    const quaternionRotation = new Quaternion();
    quaternionRotation.setFromEuler(new Euler(0, orientation, 0));
    rigidRef.current.setRotation(quaternionRotation, true);

    /**
     * Camera Movement
     */
    const playerPosition = rigidRef.current.translation();

    const cameraPosition = new Vector3();
    cameraPosition.copy(
      new Vector3(playerPosition.x, playerPosition.y, playerPosition.z)
    );
    cameraPosition.z += 50;
    cameraPosition.y += 25;

    const cameraTarget = new Vector3();
    cameraTarget.copy(
      new Vector3(playerPosition.x, playerPosition.y, playerPosition.z)
    );
    cameraTarget.y += 2.5;

    state.camera.position.copy(cameraPosition);
    state.camera.lookAt(cameraTarget);
  });

  return (
    <Suspense fallback={null}>
      <ECS.Entity>
        <ECS.Component name="active" data={true} />
        <ECS.Component name="rigid" data={rigidRef}>
          <RigidBody
            scale={0.8}
            lockRotations={true}
            ref={rigidRef}
            mass={1}
            type="dynamic"
          >
            <Float
              speed={5}
              floatIntensity={1}
              floatingRange={[0, 0.5]}
              rotationIntensity={0}
            >
              <Boat
                rotation={[0, (Math.PI / 180) * 180, 0]}
                position={[0, 0, 0.6]}
              />
              <Trail
                width={14}
                length={25}
                color="white"
                attenuation={(t: number) => {
                  return t * t;
                }}
              >
                <RoundedBox
                  visible={false}
                  args={[0.25, 2]}
                  position={[0, 0.05, -1.7]}
                ></RoundedBox>
              </Trail>
              <Trail
                width={0.5}
                length={4}
                color="white"
                attenuation={(t: number) => {
                  return t * t;
                }}
              >
                <RoundedBox
                  visible={false}
                  args={[0.25, 0.25]}
                  position={[0, 5.7, 0.7]}
                ></RoundedBox>
              </Trail>
              <Trail
                width={0.5}
                length={3}
                color="white"
                attenuation={(t: number) => {
                  return t * t;
                }}
              >
                <RoundedBox
                  visible={false}
                  args={[0.25, 0.25]}
                  position={[0, 1.6, -2]}
                ></RoundedBox>
              </Trail>
            </Float>
          </RigidBody>
        </ECS.Component>
      </ECS.Entity>
    </Suspense>
  );
};

export { Player };
