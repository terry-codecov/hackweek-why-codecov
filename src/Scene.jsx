import { Suspense, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useEntities } from "miniplex-react";

import { Player } from "./components/Player";
import { Ground } from "./components/Ground";
import { MovementSystem } from "./components/MovementSystem";
import { MoveToTarget } from "./components/MoveToTarget";
import { ECS, position, moveTo } from "./state";

const moveToTargetEntities = ECS.world.with("position", "moveToTarget");
const playerEntities = ECS.world.with("position", "velocity");

function useSetBoatTarget() {
  const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0, z: 0 });
  const [moveToTarget] = useEntities(moveToTargetEntities);
  const [player] = useEntities(playerEntities);

  useFrame((state, delta) => {
    if (moveToTarget.sceneObject.current) {
      position(moveToTarget.sceneObject.current, targetPosition);
    }
    if (player?.sceneObject?.current) {
      moveTo(player.sceneObject.current, moveToTarget.sceneObject.current);
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
