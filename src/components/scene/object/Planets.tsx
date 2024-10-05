import { PLANET_DATA } from '../../../data/planet-data';
import { useState } from 'react';
import IntroControls from '../Controls';
import SpaceControls from '../SpaceControls';
import PlanetControls from '../PlanetControls';
import { useContext } from 'react';
import GlobalStore from '@/lib/context/GlobalStore';
import { Vector3 } from 'three';
import ModelPlanet from './ModelPlanet';

const Planets = () => {
  const [positionOfClickedPlanet_, setPositionOfClickedPlanet] =
    useState<Vector3 | null>(null);

  const [{ start, selectedPlanet }, updateStore] = useContext(GlobalStore);

  const handlePlanetClick = (position: Vector3, name: string) => {
    setPositionOfClickedPlanet(position);
    updateStore({ selectedPlanet: name });
  };

  return (
    <>
      {PLANET_DATA.map((planet, index) => (
        <ModelPlanet
          key={index}
          distance={planet.distanceFromSun}
          radius={planet.diameter / 2}
          ringColor={planet.color}
          name={planet.name as any}
          eccentricity={planet.orbitalEccentricity}
          inclination={planet.orbitalInclination}
          start={start}
          argumentPeriapsis={
            planet.longitudePerihelion - planet.longitudeAscendingNode
          }
          ascendingNode={planet.longitudeAscendingNode}
          meanAnomaly={planet.meanLongitude - planet.longitudePerihelion}
          orbitalPeriod={planet.orbitalPeriod}
          epoch={planet.epoch}
          onPlanetClick={handlePlanetClick}
        />
      ))}
      {!start ? (
        <IntroControls />
      ) : typeof selectedPlanet === 'string' && selectedPlanet !== '' ? (
        <PlanetControls positionOfClickedPlanet={positionOfClickedPlanet_} />
      ) : (
        <SpaceControls />
      )}
    </>
  );
};

export default Planets;
