/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.11 --draco --dracoOptions.decodeSpeed=THREE.DRACOLoader.DECODE -o src/components/Umbrella.jsx ./public/umbrella.glb 
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/umbrella.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={
          nodes[
            "CuteUmbrella_CrossPink_CuteUmbrella_Log556-GRP-378912-CrossPink"
          ].geometry
        }
        material={materials.CrossPink_001}
        position={[0, 0.781, 0]}
        rotation={[0.824, 0, 0]}
      >
        <mesh
          geometry={
            nodes["CuteUmbrella_001_CuteUmbrella_Log556-GRP-378912-2"].geometry
          }
          material={materials["2.001"]}
        />
        <mesh
          geometry={
            nodes["CuteUmbrella_002_CuteUmbrella_Log556-GRP-378912-__"].geometry
          }
          material={materials.__}
        />
        <mesh
          geometry={
            nodes[
              "CuteUmbrella_Material_CuteUmbrella_Log556-GRP-378912-Default_Ma"
            ].geometry
          }
          material={materials.Default_Material}
        />
        <mesh
          geometry={
            nodes["CuteUmbrella_White_CuteUmbrella_Log556-GRP-378912-White"]
              .geometry
          }
          material={materials.White}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("/umbrella.glb");
