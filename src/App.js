import "./App.css";
import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

export const Cube = (props) => {
  const mesh = useRef();
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);
  useFrame(() => (mesh.current.rotation.x += 0.01));
  return (
    <mesh
      ref={mesh}
      onPointerOver={(event) => setHovered(true)}
      onPointerOut={(event) => setHovered(false)}
      onClick={(event) => setActive(!active)}
      scale={active ? 1.5 : 1}
      {...props}
    >
      <boxBufferGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={hovered ? "red" : "yellow"} />
    </mesh>
  );
};

function App() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Cube position={[-1.2, 0, 0]} />
      <Cube position={[1.2, 0, 0]} />
    </Canvas>
  );
}

export default App;
