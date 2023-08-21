import { useControls } from "leva";

function Ground() {
  const { color, position, rotation, args } = useControls("ground", {
    color: "#9999ce",
    position: {
      value: {
        x: 0,
        y: -5,
        z: 0,
      },
      step: 0.05,
    },
    rotation: {
      value: {
        x: 359.7,
        y: 0,
        z: 0,
      },
      step: 0.05,
    },
    args: {
      value: {
        x: 100,
        y: 100,
        z: 0.5,
      },
      step: 0.05,
    },
  });

  return (
    <mesh
      position={[position.x, position.y, position.z]}
      rotation={[rotation.x, rotation.y, rotation.z]}
    >
      <boxGeometry args={[args.x, args.y, args.z]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

export { Ground };
