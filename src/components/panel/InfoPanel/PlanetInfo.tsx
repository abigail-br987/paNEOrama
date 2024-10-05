import { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { planetIds } from '@/lib/utils/constants';
import GlobalStore from '@/lib/context/GlobalStore';
import LargePanel from '../SmallComponents/LargePanel';
import CloseButton from '../SmallComponents/CloseButton';
import PanelThing from '../SmallComponents/PanelThing';
import TitleOptions from '../SmallComponents/TitleOption';
import { PLANET_DATA } from '@/data/planet-data';
import Dropdown from '../SmallComponents/Dropdown';
import { BsListUl } from 'react-icons/bs';
import { trueAnom } from '@/lib/utils/math';
type PlanetName =
  | 'Sun'
  | 'Mercury'
  | 'Venus'
  | 'Earth'
  | 'Mars'
  | 'Jupiter'
  | 'Saturn'
  | 'Uranus'
  | 'Neptune';

interface TouristAttraction {
  name: string;
  link: string;
}
interface PlanetData {
  name: string;
  mass: number;
  diameter: number;
  density: number;
  gravity: number;
  escapeVelocity: number;
  rotationPeriod: number;
  lengthOfDay: number;
  distanceFromSun: number;
  perihelion: number;
  aphelion: number;
  orbitalPeriod: number;
  orbitalVelocity: number;
  orbitalInclination: number;
  orbitalEccentricity: number;
  obliquityToOrbit: number;
  meanTemperature: number;
  longitudeAscendingNode: number;
  longitudePerihelion: number;
  meanLongitude: number;
  numberOfMoons: number;
  color: string;
  forTourists: TouristAttraction[];
  index: number;
}

const PlanetInfo = () => {
  const [{ selectedPlanet }, updateStore] = useContext(GlobalStore);
  const [data, setData] = useState(null);

  const [dataOfJson, setDataOfJson] = useState<PlanetData | null>(null);

  const [showData, setShowData] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (selectedPlanet && planetIds[selectedPlanet as PlanetName]) {
        try {
          const proxyUrl = 'https://api.allorigins.win/get?url=';
          const apiUrl = encodeURIComponent(
            `https://ssd.jpl.nasa.gov/api/horizons.api?format=text&COMMAND='${planetIds[selectedPlanet as PlanetName]}'&OBJ_DATA='YES'&MAKE_EPHEM='NO'&EPHEM_TYPE='OBSERVER'&QUANTITIES='1,2,3'`
          );
          const response = await axios.get(`${proxyUrl}${apiUrl}`);
          setData(response.data.contents);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    };
    if (showData) {
      fetchData();
    }
  }, [selectedPlanet, showData]);

  useEffect(() => {
    const fetchData = async () => {
      if (selectedPlanet !== null) {
        try {
          const planet = PLANET_DATA.find(p => p.name === selectedPlanet);
          setDataOfJson(planet ?? null);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    };
    fetchData();
  }, [selectedPlanet]);

  if (selectedPlanet === null) return null;

  const dataLabels: Record<string, string> = {
    mass: 'Mass',
    diameter: 'Diameter',
    density: 'Density',
    gravity: 'Gravity',
    escapeVelocity: 'Escape Velocity',
    rotationPeriod: 'Rotation Period',
    lengthOfDay: 'Length of Day',
    distanceFromSun: 'Distance from Sun',
    perihelion: 'Closest to Sun (Perihelion)',
    aphelion: 'Farthest from Sun (Aphelion)',
    orbitalPeriod: 'Orbital Period',
    orbitalVelocity: 'Orbital Velocity',
    orbitalInclination: 'Orbital Inclination',
    orbitalEccentricity: 'Orbital Eccentricity',
    obliquityToOrbit: 'Obliquity to Orbit',
    meanTemperature: 'Mean Temperature',
    numberOfMoons: 'Number of Moons',
    longitudeAscendingNode: 'Longitude of Ascending Node',
    longitudePerihelion: 'Longitude of Perihelion',
    meanLongitude: 'Mean Longitude',
    color: 'Color',
    index: 'Index',
  };

  const physicalParameters = [
    'mass',
    'diameter',
    'density',
    'gravity',
    'escapeVelocity',
    'rotationPeriod',
    'lengthOfDay',
    'meanTemperature',
    'numberOfMoons',
    'color',
  ];

  const orbitalParameters = [
    'distanceFromSun',
    'perihelion',
    'aphelion',
    'orbitalPeriod',
    'orbitalVelocity',
    'orbitalInclination',
    'orbitalEccentricity',
    'obliquityToOrbit',
    'longitudeAscendingNode',
    'longitudePerihelion',
    'meanLongitude',
  ];

  const handleReset = () => {
    setShowData(false);
    updateStore({
      selectedPlanet: null,
      showLabels: true,
      showOrbits: true,
      radialLines: true,
    });
  };

  const getUnit = (key: string) => {
    switch (key) {
      case 'mass':
        return '× 10¹² kg';
      case 'diameter':
        return 'km';
      case 'density':
        return 'kg/m³';
      case 'gravity':
        return 'm/s²';
      case 'escapeVelocity':
        return 'km/s';
      case 'rotationPeriod':
      case 'lengthOfDay':
        return 'hours';
      case 'meanTemperature':
        return '°C';
      case 'numberOfMoons':
      case 'color':
        return '';
      default:
        return '';
    }
  };

  return (
    <>
      <PanelThing className="mt-5">
        <div className="p-5">
          <h2 className="text-2xl font-extrabold uppercase text-center">
            {selectedPlanet}

            <CloseButton onClick={handleReset} />
          </h2>
          <p
            className="text-xs opacity-50 cursor-pointer"
            onClick={handleReset}
          >
            Click to reset Camera Position
          </p>
          {dataOfJson && (
            <>
              <Dropdown
                name={
                  <TitleOptions>
                    <span className="inline-flex items-center">
                      <BsListUl className="mr-2" /> Tourist Attractions
                    </span>
                  </TitleOptions>
                }
                options={
                  <>
                    <>
                      {dataOfJson.forTourists.map((attraction, index) => (
                        <p key={index}>
                          <a
                            href={attraction.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-orange-600 hover:underline"
                          >
                            {attraction.name}
                          </a>
                        </p>
                      ))}
                    </>
                  </>
                }
              />

              <Dropdown
                name={
                  <TitleOptions>
                    <span className="inline-flex items-center">
                      <BsListUl className="mr-2" /> Physical Properties
                    </span>
                  </TitleOptions>
                }
                options={
                  <>
                    {physicalParameters.map(key => {
                      const value = (dataOfJson as any)[key];
                      return (
                        <p key={key} className="mb-2 text-xs">
                          <strong>{dataLabels[key]}</strong>: {value}{' '}
                          {getUnit(key)}
                        </p>
                      );
                    })}
                  </>
                }
              />
              <Dropdown
                name={
                  <TitleOptions>
                    <span className="inline-flex items-center">
                      <BsListUl className="mr-2" /> Orbital Properties
                    </span>
                  </TitleOptions>
                }
                options={
                  <>
                    {orbitalParameters.map(key => (
                      <p key={key} className="mb-2 text-xs">
                        <strong>{dataLabels[key]}:</strong>{' '}
                        {(dataOfJson as any)[key]}
                        {key === 'distanceFromSun'
                          ? 'km'
                          : key === 'perihelion'
                            ? 'km'
                            : key === 'aphelion'
                              ? 'km'
                              : key === 'orbitalPeriod'
                                ? 'days'
                                : key === 'orbitalVelocity'
                                  ? 'km/s'
                                  : key === 'orbitalInclination'
                                    ? 'degrees'
                                    : key === 'orbitalEccentricity'
                                      ? ''
                                      : key === 'obliquityToOrbit'
                                        ? 'degrees'
                                        : key === 'longitudeAscendingNode'
                                          ? '°'
                                          : key === 'longitudePerihelion'
                                            ? '°'
                                            : key === 'meanLongitude'
                                              ? ''
                                              : ''}
                      </p>
                    ))}
                  </>
                }
              />

              <button
                onClick={() => setShowData(true)}
                className="px-4 py-2 bg-black font-extrabold float-right text-white rounded border"
              >
                HORIZONS API
              </button>
            </>
          )}
        </div>
      </PanelThing>

      {showData && (
        <LargePanel>
          <div className="flex flex-col items-center justify-center h-full p-4">
            <CloseButton onClick={handleReset} />
            <pre className="whitespace-pre-wrap mt-4">
              {data ? data : 'Loading...'}
            </pre>
          </div>
        </LargePanel>
      )}
    </>
  );
};

export default PlanetInfo;
