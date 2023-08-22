import * as React from "react";
import { useControls, folder } from "leva";
import { Suspense } from "react";

import { ECS } from "../state";
import { Model as Umbrella } from "./Umbrella";

import { useEntities } from "miniplex-react";
import { usePlayerController } from "../hooks/usePlayerController";

const Player = () => {
  const ref = React.useRef(89);
  const { rotation } = useControls({
    umbrella: folder({
      rotation: {
        value: {
          x: 0,
          y: 5.5,
          z: 0,
        },
        step: 0.05,
      },
    }),
  });

  usePlayerController();

  return (
    <Suspense fallback={null}>
      <ECS.Entity>
        <ECS.Component name="position" data={{ x: 0, y: -4, z: 0 }} />
        <ECS.Component name="velocity" data={{ x: 0, y: 0, z: 0 }} />
        <ECS.Component name="active" data={true} />
        <ECS.Component name="sceneObject" data={ref}>
          <group ref={ref}>
            <Umbrella
              scale="5"
              rotation={[rotation.x, rotation.y, rotation.z]}
            />
          </group>
        </ECS.Component>
      </ECS.Entity>
    </Suspense>
  );
};

export { Player };
