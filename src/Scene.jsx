import { useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useEntities } from "miniplex-react";
import { Physics } from "@react-three/rapier";
import { useControls } from "leva";

import { Player } from "./components/Player";
import { Ground } from "./components/Ground";
import { MovementSystem } from "./components/MovementSystem";
import { MoveToTarget } from "./components/MoveToTarget";
import { ECS, position, moveTo } from "./state";
import { FishingSpots } from "./components/FishingSpots";

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
  });

  function onSetPosition(event) {
    event.stopPropagation();

    setTargetPosition(event.intersections[0].point);
    if (player?.sceneObject?.current && moveToTarget.sceneObject.current) {
      moveTo(player, moveToTarget.sceneObject.current);
    }
  }

  return [onSetPosition];
}

function Scene() {
  const [onSetPosition] = useSetBoatTarget();
  const { physicsDebug } = useControls({
    physicsDebug: true,
  });

  return (
    <Physics debug={physicsDebug}>
      <Player />
      <MoveToTarget />
      <MovementSystem />
      <FishingSpots />
      <Ground onClick={onSetPosition} />
    </Physics>
  );
}

export { Scene };
