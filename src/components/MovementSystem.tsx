import { useEntities } from "miniplex-react";
import { useFrame } from "@react-three/fiber";
import { ECS } from "../state";

const movingEntities = ECS.world.with("position", "velocity");

const MovementSystem = () => {
  useFrame((_, dt) => {
    for (const entity of movingEntities) {
      entity.position.x += entity.velocity.x * dt;
      entity.position.y += entity.velocity.y * dt;
      entity.position.z += entity.velocity.z * dt;
    }
  });

  return null;
};

export { MovementSystem };
