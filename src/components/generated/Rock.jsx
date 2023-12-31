/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.12 --draco --dracoOptions.decodeSpeed=THREE.DRACOLoader.DECODE -o src/components/Rock.jsx ./public/rock.glb 
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/rock.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.menhir_mini014.geometry}
        material={materials["color_main.001"]}
        position={[0, 0, 0]}
        rotation={[-1.049, -1.178, -2.781]}
        scale={0.923}
      />
    </group>
  );
}

useGLTF.preload("/rock.glb");
