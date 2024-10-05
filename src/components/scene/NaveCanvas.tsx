import { ScrollControls } from "@react-three/drei";
import { Overlay } from "./Overlay";
import Windows from "./Windows";

const NaveCanvas = () => (
    <>
        <ScrollControls pages={2.2} damping={0.1}>
            <Overlay />
            <Windows scale={60} position={[9900, 0, 0]} />
        </ScrollControls>
    </>
);

export default NaveCanvas;
