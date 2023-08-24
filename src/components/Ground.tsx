import * as React from "react";
import { NodeToyMaterial, NodeToyTick } from "@nodetoy/react-nodetoy";
import { CuboidCollider } from "@react-three/rapier";

import { data } from "../shader/waterData";

function Ground() {
  return (
    <>
      <mesh rotation={[-Math.PI * 0.5, 0, Math.PI * 0.5]}>
        <planeGeometry args={[3000 / 2, 2000 / 2, 1, 1]} />
        <CuboidCollider args={[3000, 2000, 1]} position={[0, 0, 0]} />
        <NodeToyMaterial front data={data} />
      </mesh>
      <NodeToyTick />
    </>
  );
}

export { Ground };
