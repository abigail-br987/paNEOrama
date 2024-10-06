import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Fragment, useState } from "react";
import { Line } from "@react-three/drei";
import Stars from "../scene/object/Stars";
import GlobalStore from "@/lib/context/GlobalStore";
import { useContext } from "react";
import CloseButton from "./SmallComponents/CloseButton";
import { Vector3 } from "three";
import LargePanel from "./SmallComponents/LargePanel";
import { useMemo } from "react";
import { PlaneGeometry } from "three";
import Dropdown from "./SmallComponents/Dropdown";
import TitleOptions from "./SmallComponents/TitleOption";
import { computeOrbitPoints } from "@/lib/utils/compute-orbit-points";
import { Orbit } from "../scene/object/Orbit";
import PanelThing from "./SmallComponents/PanelThing";
import { BsPencilSquare } from "react-icons/bs";
const orbitalParameters = [
  {
    label: "Semi-Major Axis (a)",
    value: 1,
    min: 0.5,
    max: 4,
    step: 0.1,
    description:
      "Longest radius of an elliptical orbit around a celestial body.",
  },
  {
    label: "Eccentricity (e)",
    value: 0.1,
    min: 0,
    max: 0.9,
    step: 0.01,
    description: "Measure of the deviation of the orbit from a perfect circle.",
  },
  {
    label: "Inclination (i)",
    value: 45,
    min: 0,
    max: 90,
    step: 1,
    description: "Angle between the orbit plane and the reference plane.",
  },
  {
    label: "Argument of Periapsis (om)",
    value: 0,
    min: 0,
    max: 360,
    step: 1,
    description:
      "Angle between the direction of periapsis and the ascending node.",
  },
  {
    label: "Longitude of Ascending Node (w)",
    value: 0,
    min: 0,
    max: 360,
    step: 1,
    description:
      "Angle between the reference direction and the ascending node.",
  },
];

function CustomAxes({ length = 15 }) {
  const axisData = [
    {
      axis: "x",
      color: "blue",
      rotation: [0, Math.PI / 2, 0],
      linePoints: [new Vector3(-length, 0, 0), new Vector3(length, 0, 0)],
    },
    {
      axis: "y",
      color: "purple",
      rotation: [Math.PI / 2, 0, 0],
      linePoints: [new Vector3(0, -length, 0), new Vector3(0, length, 0)],
    },
    {
      axis: "z",
      color: "red",
      rotation: [0, 0, 0],
      linePoints: [new Vector3(0, 0, -length), new Vector3(0, 0, length)],
    },
  ];
  const axisPlane = useMemo(() => new PlaneGeometry(length, length), [length]);
  return (
    <>
      {axisData.map(({ axis, color, rotation, linePoints }, i) => (
        <Fragment key={axis}>
          {/* @ts-ignore */}
          <mesh geometry={axisPlane} position={[0, 0, 0]} rotation={rotation}>
            <meshBasicMaterial
              color={color}
              transparent
              opacity={0.2}
              side={2}
            />
          </mesh>
          <Line
            points={linePoints}
            color={color}
            lineWidth={2}
            dashed={false}
          />
        </Fragment>
      ))}
    </>
  );
}

function OrbitSimulator({ scale = 0.001 }) {
  const [showPanel, setShowPanel] = useState(false);
  const [parameters, setParameters] = useState(
    orbitalParameters.map((param) => param.value)
  );
  const orbitPoints = useMemo(() => {
    return computeOrbitPoints(
      parameters[0] * scale,
      parameters[1],
      parameters[2],
      parameters[3],
      parameters[4]
    );
  }, [parameters]);

  const handleChange = (index: number, value: string) => {
    const newParams = [...parameters];
    newParams[index] = parseFloat(value);
    setParameters(newParams);
  };

  return (
    <>
      <PanelThing
        className="cursor-pointer px-3"
        onClick={() => setShowPanel(true)}
      >
        <TitleOptions><BsPencilSquare className="inline-block" /> Orbit Creator</TitleOptions>
      </PanelThing>

      {showPanel && (

      <LargePanel medium>
            <CloseButton onClick={() => setShowPanel(false)} />
            <div className="absolute backdrop-blur-sm z-10 rounded-md m-10  p-6 border max-w-lg">
          <TitleOptions>Create your own orbit!</TitleOptions>
          <p>Orbital Parameters are fun!</p>
          {orbitalParameters.map((param, index) => (
            <div key={param.label}>
              <Dropdown
                name={
                  <>
                    <label className="font-medium cursor-pointer">
                      {`${param.label} = ${parameters[index]}`}
                    </label>
                  </>
                }
                options={<p>{param.description}</p>}
              />
              <input
                type="range"
                min={param.min}
                max={param.max}
                step={param.step}
                value={parameters[index]}
                onChange={(e) => handleChange(index, e.target.value)}
                className="w-full"
              />
            </div>
          ))}
          <p className="opacity-50">
            Hint: Click on the orbital parameters for more info!
          </p>

          <a
            href="https://science.nasa.gov/learn/basics-of-space-flight/chapter5-1/"
            target="_blank"
          >
            Chapter 5: Planetary Orbits (NASA)
          </a>
        </div>

        <div className="top-0 z-0 w-full h-full bg-black ">
          <Canvas>
            <Stars number={700} size={0.2}></Stars>
            <OrbitControls
              enablePan={true}
              enableZoom={false}
              enableRotate={true}
            />

            <Orbit points={orbitPoints} transparent={false} />

            <ambientLight intensity={10} />

            <CustomAxes length={15} />
            <mesh position={[0, 0, 0]}>
              <sphereGeometry args={[80 * scale, 32, 32]} />
              <meshStandardMaterial color="white" />
            </mesh>
          </Canvas>
        </div>
      </LargePanel>)}
    </>
  );
}

export default OrbitSimulator;
