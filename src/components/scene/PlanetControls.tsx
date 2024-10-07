import { useContext } from "react";
import { useRef } from "react";
import { useThree } from "@react-three/fiber";
import { Vector3 } from "three";
import { useState } from "react";
import { useEffect } from "react";
import GlobalStore from "@/lib/context/GlobalStore";
import { useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const CAMERA_DISTANCES: Record<string, number> = {
  Mercury: 45,
  Venus: 75,
  Earth: 75,
  Mars: 85,
  Jupiter: 800,
  Saturn: 800,
  Uranus: 300,
  Neptune: 300,
};

const getCameraDistance = (planetName: string): number => {
  if (planetName in CAMERA_DISTANCES) return CAMERA_DISTANCES[planetName];

  return 100;
};

export interface Props {
  positionOfClickedPlanet: Vector3 | null;
}

const PlanetControls = ({ positionOfClickedPlanet }: Props) => {
  const controlsRef = useRef<any>(null);
  const { camera } = useThree();
  const [{ selectedPlanet }, updateStore] = useContext(GlobalStore);
  const defaultOrbitTarget = new Vector3(0, 0, 0);
  const initialCameraDistance = 80000;
  const targetPosition =
    selectedPlanet &&
    positionOfClickedPlanet &&
    positionOfClickedPlanet.x !== 0 &&
    positionOfClickedPlanet.y !== 0 &&
    positionOfClickedPlanet.z !== 0
      ? positionOfClickedPlanet.clone()
      : defaultOrbitTarget;

  const cameraDistance = selectedPlanet
    ? getCameraDistance(selectedPlanet)
    : initialCameraDistance;

  const [rotationAngle, setRotationAngle] = useState(0);

  useEffect(() => {
    if (selectedPlanet) {
      updateStore({
        radialLines: false,
        showOrbits: false,
        showLabels: false,
      });
    } else {
      updateStore({
        radialLines: true,
        showOrbits: true,
        showLabels: true,
      });
    }
  }, [selectedPlanet, updateStore]);

  useEffect(() => {
    const controls = controlsRef.current;
    if (controls === null) return;

    controls.target.copy(targetPosition);
    controls.update();

    const direction = targetPosition.clone().sub(camera.position).normalize();
    const newCameraPosition = targetPosition
      .clone()
      .add(direction.multiplyScalar(cameraDistance));

    camera.position.set(
      newCameraPosition.x,
      newCameraPosition.y,
      newCameraPosition.z,
    );

    camera.lookAt(targetPosition);
  }, [targetPosition, camera, cameraDistance, positionOfClickedPlanet]);

  useFrame(({ camera }, delta) => {
    controlsRef.current?.update();

    if (selectedPlanet) {
      setRotationAngle((prevAngle) => prevAngle + delta * 0.2);
      const x = targetPosition.x + cameraDistance * Math.cos(rotationAngle);
      const z = targetPosition.z + cameraDistance * Math.sin(rotationAngle);
      camera.position.set(x, targetPosition.y + 100, z);
      camera.lookAt(targetPosition);
    }
  });

  return (
    <OrbitControls ref={controlsRef} args={[camera]} minDistance={0.0001} />
  );
};

export default PlanetControls;
