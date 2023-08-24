import * as React from "react";
import { useControls } from "leva";
import { NodeToyMaterial, NodeToyTick } from "@nodetoy/react-nodetoy";
import { CuboidCollider } from "@react-three/rapier";

import { data } from "../shader/waterData";

function Ground() {
  // const { color } = useControls("waves", {
  //   color: "#00A5A8",
  // });

  return (
    <>
      <mesh rotation={[-Math.PI * 0.5, 0, Math.PI * 0.5]}>
        <planeGeometry args={[2000, 2000, 1, 1]} />
        <CuboidCollider args={[3000, 2000, 1]} position={[0, 0, 0]} />
        <NodeToyMaterial data={data} />
      </mesh>
      <NodeToyTick />
    </>
  );
}

export { Ground };
