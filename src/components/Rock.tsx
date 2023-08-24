import * as React from "react";
import { Model as RockModel } from "./generated/Rock";
import { CuboidCollider } from "@react-three/rapier";

export function Rock({ args = [2, 2, 2], ...props }) {
  return (
    <group {...props}>
      <RockModel />
      <CuboidCollider args={args}></CuboidCollider>
    </group>
  );
}
