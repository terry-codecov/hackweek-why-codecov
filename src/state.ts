import { World } from "miniplex";
import createReactAPI from "miniplex-react";
import { Object3D } from "three";
import { Ref } from "react";

type Entity = {
  sceneObject?: Ref<Object3D>;
  rigid?: Ref<Object3D>;
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
  targetRef: With<Entity, "position">,
  force = 5000
) {
  const newX =
    lerp(entity.sceneObject.current.position.x, targetRef.position.x, 0.05) *
    force;
  const newY =
    lerp(entity.sceneObject.current.position.y, targetRef.position.y, 0.05) *
    force;
  const newZ =
    lerp(entity.sceneObject.current.position.z, targetRef.position.z, 0.05) *
    force;

  entity.rigid.current?.applyImpulse({ x: newX, y: newY, z: newZ }, true);
}

export const ECS = createReactAPI(world);
