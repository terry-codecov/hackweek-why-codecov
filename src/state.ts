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
  entity.position.y = position.y;
  entity.position.z = position.z;
}

export const ECS = createReactAPI(world);
