import * as React from "react";
import { NodeToyMaterial, NodeToyTick } from "@nodetoy/react-nodetoy";
import { CuboidCollider } from "@react-three/rapier";

import { data } from "../shader/waterData";

function Ground() {
  return (
    <>
      <mesh rotation={[-Math.PI * 0.5, 0, Math.PI * 0.5]}>
        <planeGeometry args={[3000, 3000, 1, 1]} />
        <CuboidCollider args={[3000, 2000, 1]} position={[0, 0, 0]} />
        {/* <meshBasicMaterial color="#00A5A8" /> */}
        <NodeToyMaterial data={data} />
      </mesh>
      <NodeToyTick />
    </>
  );
}

export { Ground };
