import { useContext } from "react";
import { Canvas } from "@react-three/fiber";
import GlobalStore from "@/lib/context/GlobalStore";
import NaveCanvas from "./NaveCanvas";
import Sun from "./object/Sun";
import IntroControls from "./Controls";
import SpaceControls from "./SpaceControls";

// TODO: proper loading screen

const SolarSystem = () => {
    const [{ view, start }] = useContext(GlobalStore);

    return (
        <div className="absolute w-screen h-screen">
            <div className={`w-full h-full absolute`}>
                <Canvas
                    gl={{ antialias: false }}
                    frameloop="demand"
                    camera={{
                        position: [-1000, 500, 1000],
                        near: 100,
                        far: 100_000,
                        fov: 45,
                    }}
                >
                    {!start && <NaveCanvas />}

                    <Sun />

                    {!start ? <IntroControls /> : <SpaceControls />}
                </Canvas>
            </div>
        </div>
    );
};

export default SolarSystem;
