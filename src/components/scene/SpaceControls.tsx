import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { useThree } from "@react-three/fiber";
import { useEffect } from "react";

const SpaceControls = () => {
    const controlsRef2 = useRef<any>(null);
    const { camera } = useThree();

    useEffect(() => {
        if (controlsRef2.current) {
            const controls = controlsRef2.current;
            camera.position.set(2800, 1300, 0);
            camera.lookAt(0, 0, 0);
            controls.target.set(0, 0, 0);
            controls.update();
        }
    }, []);

    const isMobile = window.innerWidth <= 768;

    return (
        <>
            <OrbitControls
                ref={controlsRef2}
                enableZoom={!isMobile}
                minDistance={1000}
                maxDistance={60000}
                zoomSpeed={3}
                enablePan={!isMobile}
                minPolarAngle={0}
                maxPolarAngle={Math.PI}
                minAzimuthAngle={-Infinity}
                maxAzimuthAngle={Infinity}
            />
        </>
    );
};

export default SpaceControls;
