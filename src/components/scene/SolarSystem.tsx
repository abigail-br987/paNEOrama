import { useContext } from "react";
import { Canvas } from "@react-three/fiber";
import GlobalStore from "@/lib/context/GlobalStore";
import NaveCanvas from "./NaveCanvas";
import Sun from "./object/Sun";
import IntroControls from "./Controls";
import SpaceControls from "./SpaceControls";
import Light from "./object/Light";
import Stars from "./object/Stars";
import Planets from "./object/Planets";
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
                    <Light />
                    <Stars number={80000} size={3} />
                    <Planets />


                </Canvas>
            </div>
        </div>
    );
};

export default SolarSystem;
