import { useContext } from "react";
import { Html } from "@react-three/drei";
import classNames from "classnames";
import { useState } from "react";
import GlobalStore from "@/lib/context/GlobalStore";
import { AU_TO_KM } from "@/data/planet-data";
import { computeOrbitPoints } from "@/lib/utils/compute-orbit-points";
import { Orbit } from "./Orbit";
import { HelpfulLines } from "./HelpfulLines";
import { SCALE_FACTOR_ORBIT } from "@/lib/utils/constants";
import { useMemo } from "react";
import EarthModel from "./planets/Earth";
import MarsModel from "./planets/Mars";
import JupiterModel from "./planets/Jupiter";
import MercuryModel from "./planets/Mercury";
import NeptuneModel from "./planets/Neptune";
import SaturnModel from "./planets/Saturn";
import UranusModel from "./planets/Uranus";
import VenusModel from "./planets/Venus";
import { Vector3 } from "three";
import { keplerSolve, trueAnom } from "@/lib/utils/math";
import { degToRad } from "three/src/math/MathUtils.js";
import { orbitEquationForOnePoint } from "@/lib/utils/orbit-equation-for-one-point";

const planetModels = {
    EarthModel,
    JupiterModel,
    MarsModel,
    MercuryModel,
    NeptuneModel,
    SaturnModel,
    UranusModel,
    VenusModel,
};

export interface Props {
    distance: number;
    radius: number;
    ringColor: string;
    name:
    | "Earth"
    | "Jupiter"
    | "Mars"
    | "Mercury"
    | "Neptune"
    | "Saturn"
    | "Uranus"
    | "Venus";
    eccentricity: number;
    inclination: number;
    argumentPeriapsis: number;
    start: boolean;
    meanAnomaly: number;
    orbitalPeriod: number;
    ascendingNode: number;
    epoch: number;
    onPlanetClick: (position: Vector3, name: string) => void;
}

const ModelPlanet = ({
    radius,
    ringColor,
    name,
    distance,
    eccentricity,
    inclination,
    argumentPeriapsis,
    ascendingNode,
    start,
    orbitalPeriod,
    epoch,
    meanAnomaly,
    onPlanetClick,
}: Props) => {
    const [
        { currentDate, selectedPlanet, showLabels, view, showOrbits, radialLines },
        updateStore,
    ] = useContext(GlobalStore);

    const [isHovered, setIsHovered] = useState(false);

    const inclinationRad = degToRad(inclination);
    const argumentPeriapsisRad = degToRad(argumentPeriapsis);
    const ascendingNodeRad = degToRad(ascendingNode);
    const effectiveMeanMotion = 360 / orbitalPeriod;

    const objectPosition = useMemo(() => {
        const targetDate = currentDate.getTime() / 86400000 + 2440587.5;
        const daysSinceEpoch = targetDate - epoch;
        const meanAnomalyAtTargetDate =
            meanAnomaly + effectiveMeanMotion * daysSinceEpoch;
        const E = -keplerSolve(eccentricity, meanAnomalyAtTargetDate, 4);
        const theta = degToRad(trueAnom(eccentricity, E, 5));

        const [x, y, z] = orbitEquationForOnePoint(
            distance / AU_TO_KM,
            eccentricity,
            theta,
            inclinationRad,
            argumentPeriapsisRad,
            ascendingNodeRad,
        );

        return new Vector3(x, y, z);
    }, [currentDate]);

    const orbitPoints = useMemo(
        () =>
            computeOrbitPoints(
                distance / AU_TO_KM,
                eccentricity,
                inclination,
                argumentPeriapsis,
                ascendingNode,
            ),
        [distance, eccentricity, inclination, argumentPeriapsis, ascendingNode],
    );

    const handleClick = () => {
        onPlanetClick(objectPosition, name);
        updateStore({
            selectedPlanet: name,
            controls: { isPaused: true },
            showLabels: false,
            showOrbits: false,
            radialLines: false,
        });
    };

    // @ts-ignore
    const PlanetModel = planetModels[name + "Model"];

    console.log(view);

    return (
        <>
            {showOrbits && (
                <Orbit
                    points={orbitPoints}
                    colored={isHovered}
                    color={isHovered ? ringColor : undefined}
                    transparent={true}
                    opacity={view === "Planets" ? 1 : 0.1}
                    width={view === "Planets" ? 2 : 1}
                />
            )}
            {view === "Planets" && radialLines && (
                <HelpfulLines
                    points={orbitPoints}
                    colored={isHovered}
                    color={isHovered ? ringColor : undefined}
                />
            )}

            <group position={objectPosition}>
                {(!start || selectedPlanet !== null) && (
                    <PlanetModel
                        scale={[
                            radius * SCALE_FACTOR_ORBIT,
                            radius * SCALE_FACTOR_ORBIT,
                            radius * SCALE_FACTOR_ORBIT,
                        ]}
                    />
                )}

                <Html
                    center
                    zIndexRange={[0, 0]}
                    className={classNames("group relative transition-all select-none", {
                        "cursor-pointer": view === "Planets",
                    })}
                >
                    {showLabels && (
                        <>
                            <p
                                className={classNames(
                                    "absolute text-white text-xs rounded-md backdrop-blur-3xl border border-white text-center -translate-x-1/2 py-0.5 px-1 drop-shadow-[0_0_4px_black] transition-all",
                                    {
                                        "bottom-3 group-hover:text-sm group-hover:drop-shadow-[0_0_4px_white]":
                                            view === "Planets",
                                        "bottom-0 group-hover:bottom-2": view !== "Planets",
                                    },
                                )}
                                onClick={() => {
                                    setIsHovered(false);
                                    if (view === "Planets") {
                                        handleClick();
                                    }
                                }}
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            >
                                {isHovered
                                    ? name
                                    : view === "Planets"
                                        ? name === "Earth" ||
                                            name === "Mercury" ||
                                            name === "Mars" ||
                                            name === "Venus"
                                            ? ""
                                            : name
                                        : ""}
                            </p>
                            <span
                                onClick={() => {
                                    setIsHovered(false);
                                    if (view === "Planets") {
                                        handleClick();
                                    }
                                }}
                                className={classNames(
                                    "absolute border-2 border-white rounded-full -translate-x-1/2 -translate-y-1/2 transition-all",
                                    {
                                        "w-4 h-4 group-hover:w-6 group-hover:h-6":
                                            view === "Planets",
                                        "w-3 h-3 group-hover:w-4 group-hover:h-4":
                                            view !== "Planets",
                                    },
                                )}
                                style={{ backgroundColor: ringColor }}
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            ></span>
                        </>
                    )}
                </Html>
            </group>
        </>
    );
};

export default ModelPlanet;
