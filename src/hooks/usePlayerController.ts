import { useEntities } from "miniplex-react";
import { GameEntity, EntityManager, SeekBehavior } from "yuka";
import { subscribe, proxy } from "valtio";

import { ECS } from "../state";
import { useEffect } from "react";
import { useFrame } from "@react-three/fiber";

const playerEntities = ECS.world.with("position", "velocity", "active");
const moveToTargetEntities = ECS.world.with("position", "moveToTarget");

const manager = new EntityManager();

function usePlayerController() {
  const [player] = useEntities(playerEntities);
  const [target] = useEntities(moveToTargetEntities);

  useEffect(() => {
    if (player && target) {
      const vehicle = new GameEntity();
      vehicle.name = "Vehicle";
      vehicle.position.set(
        player.position.x,
        player.position.y,
        player.position.z
      );
      // vehicle.setRenderComponent(player.sceneObject?.current);
      const targetGameEntity = new GameEntity();
      targetGameEntity.name = "Target";
      targetGameEntity.position.set(
        target?.position.x,
        target?.position.y,
        target?.position.z
      );
      // target.setRenderComponent(target.sceneObject?.current);
      if (manager.entities.length === 0 && player && targetGameEntity) {
        manager.add(vehicle);
        manager.add(targetGameEntity);
      }
    }
  }, [player, target]);

  useFrame((state, delta) => {
    if (manager.entities.length < 2) return;
    const vehicle = manager.entities.find((item) => item.name === "Vehicle");
    const targetGameEntity = manager.entities.find(
      (item) => item.name === "Target"
    );

    targetGameEntity?.position.set(
      target.position.x,
      target.position.y,
      target.position.z
    );

    if (targetGameEntity?.position && vehicle) {
      const seekBehavior = new SeekBehavior(targetGameEntity.position);

      // console.log(vehicle);

      // if (vehicle && target) {
      //   vehicle.steering.add(seekBehavior);
      // }
    }

    manager.update(delta);
  });

  return null;
}

export { usePlayerController };
