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

export const ECS = createReactAPI(world);
