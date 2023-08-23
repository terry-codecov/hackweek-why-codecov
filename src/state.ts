import { World } from "miniplex";
import createReactAPI from "miniplex-react";
import { Object3D } from "three";
import { Ref } from "react";

type Entity = {
  sceneObject?: Ref<Object3D>;
  position: { x: number; y: number; z: number };
  velocity?: { x: number; y: number; z: number };
  paused?: boolean;
  active?: boolean;
  trigger?: boolean;
  moveToTarget?: boolean;
};

const world = new World<Entity>();

/* Create functions that perform actions on entities: */
export function position(
  entity: With<Entity, "position">,
  position: { x: number; y: number; z: number }
) {
  entity.position.x = position.x;
  entity.position.y = position.y + entity.scale.y;
  entity.position.z = position.z;
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

export function moveTo(
  entity: With<Entity, "position", "velocity">,
  target: With<Entity, "position">
) {
  const newX = lerp(entity.position.x, target.position.x, 0.05);
  const newY = lerp(entity.position.y, target.position.y, 0.05);
  const newZ = lerp(entity.position.z, target.position.z, 0.05);
  entity.position.x = newX;
  entity.position.y = newY;
  entity.position.z = newZ;
}

export const ECS = createReactAPI(world);
