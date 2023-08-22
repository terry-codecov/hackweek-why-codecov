import { Suspense, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useEntities } from "miniplex-react";

import { Player } from "./components/Player";
import { Ground } from "./components/Ground";
import { MovementSystem } from "./components/MovementSystem";
import { MoveToTarget } from "./components/MoveToTarget";
import { ECS, position } from "./state";

const moveToTargetEntities = ECS.world.with("position", "moveToTarget");

function useSetBoatTarget() {
  const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0, z: 0 });
  const [moveToTarget] = useEntities(moveToTargetEntities);

  useFrame((state, delta) => {
    if (moveToTarget.sceneObject.current) {
      moveToTarget.sceneObject.current.position.x = targetPosition.x;
      moveToTarget.sceneObject.current.position.y =
        targetPosition.y + moveToTarget.sceneObject.current.scale.y;
      moveToTarget.sceneObject.current.position.z = targetPosition.z;

      position(moveToTarget, targetPosition);
    }
  });

  function onSetPosition(event) {
    event.stopPropagation();

    setTargetPosition(event.intersections[0].point);
  }

  return [onSetPosition];
}

function Scene() {
  const [onSetPosition] = useSetBoatTarget();

  return (
    <>
      <Player />
      <MoveToTarget />
      <MovementSystem />
      <Ground onClick={onSetPosition} />
    </>
  );
}

export { Scene };
