/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/Island2.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    for (let key in actions) {
      actions[key].play();
    }
  }, [actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="Land"
          castShadow
          receiveShadow
          geometry={nodes.Land.geometry}
          material={materials.Stone}
          position={[-8.539, -0.5, 6.113]}
          rotation={[Math.PI / 2, 0, 0.897]}
          scale={[18.62, 16.979, 16.979]}
        />
        <mesh
          name="Grass"
          castShadow
          receiveShadow
          geometry={nodes.Grass.geometry}
          material={materials.Grass}
          position={[-7.573, -0.764, 4.07]}
          rotation={[Math.PI / 2, 0, 0.893]}
          scale={[18.312, 18.312, 20.711]}
        />
        <mesh
          name="Windmill"
          castShadow
          receiveShadow
          geometry={nodes.Windmill.geometry}
          material={materials.Pink}
          position={[-4.812, 6.325, -7.685]}
          rotation={[0, 1.166, 0]}
          scale={0.332}
        >
          <mesh
            name="Circle008"
            castShadow
            receiveShadow
            geometry={nodes.Circle008.geometry}
            material={materials.White}
          >
            <mesh
              name="Circle009"
              castShadow
              receiveShadow
              geometry={nodes.Circle009.geometry}
              material={materials.White}
              position={[0, 7.857, 0]}
            >
              <mesh
                name="Circle010"
                castShadow
                receiveShadow
                geometry={nodes.Circle010.geometry}
                material={materials.Pink}
                position={[0, 0, 0.711]}
              >
                <group name="Plane003" position={[0, 0, 0.074]}>
                  <mesh
                    name="Plane003_1"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane003_1.geometry}
                    material={materials.White}
                  />
                  <mesh
                    name="Plane003_2"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane003_2.geometry}
                    material={materials.Pink}
                  />
                </group>
              </mesh>
            </mesh>
          </mesh>
        </mesh>
        <mesh
          name="Windmill001"
          castShadow
          receiveShadow
          geometry={nodes.Windmill001.geometry}
          material={materials.Pink}
          position={[-8.702, 2.157, 5.654]}
          rotation={[0, 1.184, 0]}
          scale={0.526}
        >
          <mesh
            name="Circle012"
            castShadow
            receiveShadow
            geometry={nodes.Circle012.geometry}
            material={materials.White}
          >
            <mesh
              name="Circle013"
              castShadow
              receiveShadow
              geometry={nodes.Circle013.geometry}
              material={materials.White}
              position={[0, 7.857, 0]}
            >
              <mesh
                name="Circle014"
                castShadow
                receiveShadow
                geometry={nodes.Circle014.geometry}
                material={materials.Pink}
                position={[0, 0, 0.711]}
              >
                <group name="Plane004" position={[0, 0, 0.074]}>
                  <mesh
                    name="Plane004_1"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane004_1.geometry}
                    material={materials.White}
                  />
                  <mesh
                    name="Plane004_2"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane004_2.geometry}
                    material={materials.Pink}
                  />
                </group>
              </mesh>
            </mesh>
          </mesh>
        </mesh>
        <mesh
          name="Windmill002"
          castShadow
          receiveShadow
          geometry={nodes.Windmill002.geometry}
          material={materials.Pink}
          position={[-4.574, 6.061, -3.813]}
          rotation={[0, 0.578, 0]}
          scale={0.718}
        >
          <mesh
            name="Circle"
            castShadow
            receiveShadow
            geometry={nodes.Circle.geometry}
            material={materials.White}
          >
            <mesh
              name="Circle001"
              castShadow
              receiveShadow
              geometry={nodes.Circle001.geometry}
              material={materials.White}
              position={[0, 7.857, 0]}
            >
              <mesh
                name="Circle002"
                castShadow
                receiveShadow
                geometry={nodes.Circle002.geometry}
                material={materials.Pink}
                position={[0, 0, 0.711]}
              >
                <group name="Plane" position={[0, 0, 0.074]}>
                  <mesh
                    name="Plane_1"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane_1.geometry}
                    material={materials.White}
                  />
                  <mesh
                    name="Plane_2"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane_2.geometry}
                    material={materials.Pink}
                  />
                </group>
              </mesh>
            </mesh>
          </mesh>
        </mesh>
        <mesh
          name="Windmill003"
          castShadow
          receiveShadow
          geometry={nodes.Windmill003.geometry}
          material={materials.Pink}
          position={[-10.759, 5.578, -3.219]}
          rotation={[0, 0.578, 0]}
          scale={0.526}
        >
          <mesh
            name="Circle004"
            castShadow
            receiveShadow
            geometry={nodes.Circle004.geometry}
            material={materials.White}
          >
            <mesh
              name="Circle005"
              castShadow
              receiveShadow
              geometry={nodes.Circle005.geometry}
              material={materials.White}
              position={[0, 7.857, 0]}
            >
              <mesh
                name="Circle006"
                castShadow
                receiveShadow
                geometry={nodes.Circle006.geometry}
                material={materials.Pink}
                position={[0, 0, 0.711]}
              >
                <group name="Plane002" position={[0, 0, 0.074]}>
                  <mesh
                    name="Plane002_1"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane002_1.geometry}
                    material={materials.White}
                  />
                  <mesh
                    name="Plane002_2"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane002_2.geometry}
                    material={materials.Pink}
                  />
                </group>
              </mesh>
            </mesh>
          </mesh>
        </mesh>
        <mesh
          name="menhir_mini"
          castShadow
          receiveShadow
          geometry={nodes.menhir_mini.geometry}
          material={materials["Rocks.001"]}
          position={[-0.583, -0.307, -6.314]}
          rotation={[Math.PI, -0.989, Math.PI]}
          scale={1.245}
        />
        <mesh
          name="menhir_mini001"
          castShadow
          receiveShadow
          geometry={nodes.menhir_mini001.geometry}
          material={materials["color_main.002"]}
          position={[-4.943, 3.611, -2.848]}
          scale={0.213}
        />
        <mesh
          name="menhir_mini002"
          castShadow
          receiveShadow
          geometry={nodes.menhir_mini002.geometry}
          material={materials.Rocks}
          position={[-2.238, 0.528, 1.476]}
          rotation={[-1.005, 0, 0]}
          scale={0.213}
        />
        <mesh
          name="menhir_mini003"
          castShadow
          receiveShadow
          geometry={nodes.menhir_mini003.geometry}
          material={materials["Rocks.001"]}
          position={[-2.137, 0.744, 1.752]}
          rotation={[-0.709, -0.036, -0.217]}
          scale={0.213}
        />
        <mesh
          name="menhir_mini004"
          castShadow
          receiveShadow
          geometry={nodes.menhir_mini004.geometry}
          material={materials["Rocks.001"]}
          position={[-0.085, -0.651, 3.043]}
          rotation={[0.785, 0.654, 0.795]}
          scale={0.825}
        />
        <mesh
          name="menhir_mini005"
          castShadow
          receiveShadow
          geometry={nodes.menhir_mini005.geometry}
          material={materials["Rocks.001"]}
          position={[-3.483, 0.686, 2.915]}
          rotation={[0, 0, 0.494]}
          scale={0.213}
        />
        <mesh
          name="menhir_mini006"
          castShadow
          receiveShadow
          geometry={nodes.menhir_mini006.geometry}
          material={materials["Rocks.001"]}
          position={[-6.937, 2.188, 5.249]}
          rotation={[-1.005, 0, 0]}
          scale={0.213}
        />
        <mesh
          name="menhir_mini007"
          castShadow
          receiveShadow
          geometry={nodes.menhir_mini007.geometry}
          material={materials["Rocks.001"]}
          position={[1.026, -0.711, -5.03]}
          scale={0.294}
        />
        <mesh
          name="menhir_mini008"
          castShadow
          receiveShadow
          geometry={nodes.menhir_mini008.geometry}
          material={materials["Rocks.001"]}
          position={[0.395, -0.308, -4.302]}
          rotation={[0.893, 0, 0]}
          scale={0.57}
        />
        <mesh
          name="menhir_mini009"
          castShadow
          receiveShadow
          geometry={nodes.menhir_mini009.geometry}
          material={materials["Rocks.001"]}
          position={[-4.946, 2.296, 1.567]}
          rotation={[0.634, 0.617, 0.052]}
          scale={0.431}
        />
        <mesh
          name="menhir_mini010"
          castShadow
          receiveShadow
          geometry={nodes.menhir_mini010.geometry}
          material={materials["Rocks.001"]}
          position={[-4.714, -0.447, 5.706]}
          rotation={[-1.049, -1.178, -2.781]}
          scale={0.729}
        />
        <mesh
          name="menhir_mini011"
          castShadow
          receiveShadow
          geometry={nodes.menhir_mini011.geometry}
          material={materials["Rocks.001"]}
          position={[-4.515, 6.2, -1.922]}
          rotation={[-1.049, -1.178, -2.781]}
          scale={0.213}
        />
        <mesh
          name="menhir_mini012"
          castShadow
          receiveShadow
          geometry={nodes.menhir_mini012.geometry}
          material={materials["Rocks.001"]}
          position={[-5.994, 6.163, -2.727]}
          rotation={[-1.049, -1.178, -2.781]}
          scale={0.402}
        />
        <mesh
          name="menhir_mini013"
          castShadow
          receiveShadow
          geometry={nodes.menhir_mini013.geometry}
          material={materials.Rocks}
          position={[-0.843, 2.342, -3.543]}
          rotation={[-2.166, -0.948, 2.833]}
          scale={0.402}
        />
        <mesh
          name="menhir_mini014"
          castShadow
          receiveShadow
          geometry={nodes.menhir_mini014.geometry}
          material={materials["Rocks.001"]}
          position={[-4.206, 0.381, 4.415]}
          rotation={[0.452, -0.638, -1.995]}
          scale={0.729}
        />
        <group
          name="flower_stonecrop"
          rotation={[-3.134, 0.619, -2.88]}
          scale={2.06}
        >
          <mesh
            name="Circle001_1"
            castShadow
            receiveShadow
            geometry={nodes.Circle001_1.geometry}
            material={materials.stem}
          />
          <mesh
            name="Circle001_2"
            castShadow
            receiveShadow
            geometry={nodes.Circle001_2.geometry}
            material={materials["leaf "]}
          />
          <mesh
            name="Circle001_3"
            castShadow
            receiveShadow
            geometry={nodes.Circle001_3.geometry}
            material={materials.flower}
          />
        </group>
        <group
          name="flower_stonecrop001"
          position={[-0.424, 0.874, 1.539]}
          rotation={[-3.134, 0.619, -2.88]}
          scale={2.494}
        >
          <mesh
            name="Circle006_1"
            castShadow
            receiveShadow
            geometry={nodes.Circle006_1.geometry}
            material={materials.stem}
          />
          <mesh
            name="Circle006_2"
            castShadow
            receiveShadow
            geometry={nodes.Circle006_2.geometry}
            material={materials["leaf "]}
          />
          <mesh
            name="Circle006_3"
            castShadow
            receiveShadow
            geometry={nodes.Circle006_3.geometry}
            material={materials.flower}
          />
        </group>
        <group
          name="flower_stonecrop002"
          position={[-0.409, 0.919, 0.054]}
          rotation={[-0.01, 0.883, 0.274]}
          scale={2.494}
        >
          <mesh
            name="Circle007"
            castShadow
            receiveShadow
            geometry={nodes.Circle007.geometry}
            material={materials.stem}
          />
          <mesh
            name="Circle007_1"
            castShadow
            receiveShadow
            geometry={nodes.Circle007_1.geometry}
            material={materials["leaf "]}
          />
          <mesh
            name="Circle007_2"
            castShadow
            receiveShadow
            geometry={nodes.Circle007_2.geometry}
            material={materials.flower}
          />
        </group>
        <group
          name="flower_stonecrop003"
          position={[-4.515, 3.372, 0.975]}
          rotation={[-2.685, 0.336, -2.689]}
          scale={2.494}
        >
          <mesh
            name="Circle008_1"
            castShadow
            receiveShadow
            geometry={nodes.Circle008_1.geometry}
            material={materials.stem}
          />
          <mesh
            name="Circle008_2"
            castShadow
            receiveShadow
            geometry={nodes.Circle008_2.geometry}
            material={materials["leaf "]}
          />
          <mesh
            name="Circle008_3"
            castShadow
            receiveShadow
            geometry={nodes.Circle008_3.geometry}
            material={materials.flower}
          />
        </group>
        <group
          name="flower_stonecrop004"
          position={[-1.048, 3.385, -6.237]}
          rotation={[-0.01, 0.883, 0.274]}
          scale={2.494}
        >
          <mesh
            name="Circle009_1"
            castShadow
            receiveShadow
            geometry={nodes.Circle009_1.geometry}
            material={materials.stem}
          />
          <mesh
            name="Circle009_2"
            castShadow
            receiveShadow
            geometry={nodes.Circle009_2.geometry}
            material={materials["leaf "]}
          />
          <mesh
            name="Circle009_3"
            castShadow
            receiveShadow
            geometry={nodes.Circle009_3.geometry}
            material={materials.flower}
          />
        </group>
        <group
          name="flower_stonecrop005"
          position={[-0.928, 3.311, -6.721]}
          rotation={[-0.01, 0.883, 0.274]}
          scale={1.759}
        >
          <mesh
            name="Circle010_1"
            castShadow
            receiveShadow
            geometry={nodes.Circle010_1.geometry}
            material={materials.stem}
          />
          <mesh
            name="Circle010_2"
            castShadow
            receiveShadow
            geometry={nodes.Circle010_2.geometry}
            material={materials["leaf "]}
          />
          <mesh
            name="Circle010_3"
            castShadow
            receiveShadow
            geometry={nodes.Circle010_3.geometry}
            material={materials.flower}
          />
        </group>
        <group
          name="flower_stonecrop006"
          position={[-1.173, 2.925, -7.64]}
          rotation={[-0.01, 0.883, 0.274]}
          scale={1.759}
        >
          <mesh
            name="Circle011"
            castShadow
            receiveShadow
            geometry={nodes.Circle011.geometry}
            material={materials.stem}
          />
          <mesh
            name="Circle011_1"
            castShadow
            receiveShadow
            geometry={nodes.Circle011_1.geometry}
            material={materials["leaf "]}
          />
          <mesh
            name="Circle011_2"
            castShadow
            receiveShadow
            geometry={nodes.Circle011_2.geometry}
            material={materials.flower}
          />
        </group>
        <group
          name="flower_stonecrop007"
          position={[-10.756, 2.585, 2.562]}
          rotation={[-2.685, 0.336, -2.689]}
          scale={2.151}
        >
          <mesh
            name="Circle012_1"
            castShadow
            receiveShadow
            geometry={nodes.Circle012_1.geometry}
            material={materials.stem}
          />
          <mesh
            name="Circle012_2"
            castShadow
            receiveShadow
            geometry={nodes.Circle012_2.geometry}
            material={materials["leaf "]}
          />
          <mesh
            name="Circle012_3"
            castShadow
            receiveShadow
            geometry={nodes.Circle012_3.geometry}
            material={materials.flower}
          />
        </group>
        <mesh
          name="Plank008"
          castShadow
          receiveShadow
          geometry={nodes.Plank008.geometry}
          material={materials.Dock}
          position={[1.088, -0.437, 4.193]}
          rotation={[Math.PI, -1.105, Math.PI]}
          scale={[-0.885, -0.04, -0.236]}
        />
        <mesh
          name="Plank009"
          castShadow
          receiveShadow
          geometry={nodes.Plank009.geometry}
          material={materials.Dock}
          position={[2.024, -0.437, 4.648]}
          rotation={[Math.PI, -1.105, Math.PI]}
          scale={[-0.885, -0.04, -0.236]}
        />
        <mesh
          name="Plank010"
          castShadow
          receiveShadow
          geometry={nodes.Plank010.geometry}
          material={materials.Dock}
          position={[2.487, -0.437, 4.879]}
          rotation={[Math.PI, -1.105, Math.PI]}
          scale={[-0.885, -0.04, -0.236]}
        />
        <mesh
          name="Plank011"
          castShadow
          receiveShadow
          geometry={nodes.Plank011.geometry}
          material={materials.Dock}
          position={[2.955, -0.437, 5.115]}
          rotation={[Math.PI, -1.105, Math.PI]}
          scale={[-0.885, -0.04, -0.236]}
        />
        <mesh
          name="Plank012"
          castShadow
          receiveShadow
          geometry={nodes.Plank012.geometry}
          material={materials.Dock}
          position={[3.44, -0.437, 5.351]}
          rotation={[Math.PI, -1.105, Math.PI]}
          scale={[-0.885, -0.04, -0.236]}
        />
        <mesh
          name="Plank013"
          castShadow
          receiveShadow
          geometry={nodes.Plank013.geometry}
          material={materials.Dock}
          position={[3.913, -0.437, 5.576]}
          rotation={[0, 1.113, 0]}
          scale={[-0.885, -0.04, -0.236]}
        />
        <mesh
          name="Plank014"
          castShadow
          receiveShadow
          geometry={nodes.Plank014.geometry}
          material={materials.Dock}
          position={[4.376, -0.437, 5.807]}
          rotation={[Math.PI, -1.105, Math.PI]}
          scale={[-0.885, -0.04, -0.236]}
        />
        <mesh
          name="Plank015"
          castShadow
          receiveShadow
          geometry={nodes.Plank015.geometry}
          material={materials.Dock}
          position={[1.551, -0.437, 4.423]}
          rotation={[Math.PI, -1.105, Math.PI]}
          scale={[-0.885, -0.04, -0.236]}
        />
        <mesh
          name="Post008"
          castShadow
          receiveShadow
          geometry={nodes.Post008.geometry}
          material={materials.Dock}
          position={[0.504, -0.316, 4.816]}
          rotation={[0, 0.516, 0]}
          scale={[0.175, 0.344, 0.175]}
        />
        <mesh
          name="Post009"
          castShadow
          receiveShadow
          geometry={nodes.Post009.geometry}
          material={materials.Dock}
          position={[1.256, -0.316, 3.367]}
          rotation={[-Math.PI, 1.218, -Math.PI]}
          scale={[0.175, 0.344, 0.175]}
        />
        <mesh
          name="Post010"
          castShadow
          receiveShadow
          geometry={nodes.Post010.geometry}
          material={materials.Dock}
          position={[1.895, -0.316, 5.432]}
          rotation={[0, -0.283, 0]}
          scale={[0.175, 0.344, 0.175]}
        />
        <mesh
          name="Post011"
          castShadow
          receiveShadow
          geometry={nodes.Post011.geometry}
          material={materials.Dock}
          position={[2.62, -0.316, 3.998]}
          rotation={[0, 0.516, 0]}
          scale={[0.175, 0.344, 0.175]}
        />
        <mesh
          name="Post012"
          castShadow
          receiveShadow
          geometry={nodes.Post012.geometry}
          material={materials.Dock}
          position={[2.809, -0.316, 5.98]}
          rotation={[0, 0.516, 0]}
          scale={[0.175, 0.344, 0.175]}
        />
        <mesh
          name="Post013"
          castShadow
          receiveShadow
          geometry={nodes.Post013.geometry}
          material={materials.Dock}
          position={[3.561, -0.314, 4.461]}
          rotation={[-Math.PI, 1.522, -Math.PI]}
          scale={[0.175, 0.344, 0.175]}
        />
        <mesh
          name="Post014"
          castShadow
          receiveShadow
          geometry={nodes.Post014.geometry}
          material={materials.Dock}
          position={[4.234, -0.316, 6.686]}
          rotation={[0, 1.401, 0]}
          scale={[0.175, 0.344, 0.175]}
        />
        <mesh
          name="Post015"
          castShadow
          receiveShadow
          geometry={nodes.Post015.geometry}
          material={materials.Dock}
          position={[5.004, -0.316, 5.172]}
          rotation={[0, 0.516, 0]}
          scale={[0.175, 0.344, 0.175]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/Island2.glb");
