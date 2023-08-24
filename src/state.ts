import { World } from "miniplex";
import createReactAPI from "miniplex-react";
import { Object3D } from "three";
import { Ref } from "react";
import type { RapierRigidBody, RapierCollider } from "@react-three/rapier";

type Entity = {
  sceneObject?: Ref<Object3D>;
  rigid?: Ref<RapierRigidBody>;
  collider?: Ref<RapierCollider>;
  paused?: boolean;
  active?: boolean;
};

const world = new World<Entity>();

export const ECS = createReactAPI(world);
