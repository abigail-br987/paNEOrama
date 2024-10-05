import GlobalStore from '@/lib/context/GlobalStore';
import { useState, useEffect, useContext } from 'react';
import accessibleNeas from '../../../data/accessibleneas.json';
import axios from 'axios';
import PanelThing from '../SmallComponents/PanelThing';
import TitleOptions from '../SmallComponents/TitleOption';
import Dropdown from '../SmallComponents/Dropdown';
import { BsListUl } from 'react-icons/bs';

function ObjectInfo() {
  const [{ selectedObjectData, neoSelected }] = useContext(GlobalStore);
  const [discovery, setDiscovery] = useState<any>(null);

  useEffect(() => {
    if (!selectedObjectData || !selectedObjectData['spkid']) {
      return;
    }
    const fetchData = async () => {
      try {
        const proxyUrl = 'https://corsproxy.io/?';
        const apiUrl = encodeURIComponent(
          `https://ssd-api.jpl.nasa.gov/sbdb.api?sstr=${selectedObjectData['spkid']}&ca-data=true&ca-time=cd&no-orbit=true&discovery=true`
        );
        const response = await axios.get(`${proxyUrl}${apiUrl}`);
        setDiscovery(response.data.discovery.discovery);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchData();
  }, [neoSelected]);

  if (!selectedObjectData || !neoSelected) {
    return null;
  }

  interface PhysicalProperty {
    label: string;
    value: string | number | null;
    [key: string]: any;
  }

  interface OrbitalProperty {
    label: string;
    value: string | number;
  }

  const neoData: any = accessibleNeas;
  const accessibilityData = neoData[neoSelected];

  const physicalProperties: PhysicalProperty[] = [
    {
      label: 'Diameter',
      value: selectedObjectData.diameter
        ? `${selectedObjectData.diameter} km`
        : null,
    },
    {
      label: 'Absolute Magnitude (H)',
      value: selectedObjectData.H !== undefined ? selectedObjectData.H : null,
    },
    {
      label: 'Albedo',
      value:
        selectedObjectData.albedo !== undefined
          ? selectedObjectData.albedo
          : null,
    },
    {
      label: 'Rotation Period',
      value: selectedObjectData.rot_per
        ? `${selectedObjectData.rot_per} hours`
        : null,
    },
  ].filter(item => item.value !== null);

  const targetMissionInfo = [
    {
      label: 'Mission Type',
      value: (selectedObjectData as any)['Mission Type'] ?? null,
    },
    {
      label: 'Mission Arrival',
      value: (selectedObjectData as any)['Mission Arrival'] ?? null,
    },
    {
      label: 'Mission Name',
      value: (selectedObjectData as any)['Mission Name'] ?? null,
    },
    {
      label: 'Mission Launch',
      value: (selectedObjectData as any)['Mission Launch'] ?? null,
    },
    { label: 'Status', value: (selectedObjectData as any)['Status'] ?? null },
  ].filter(item => item.value !== null);

  const shouldShowDropdown = targetMissionInfo.length > 0;

  let accessibilityInfo: PhysicalProperty[] = [];

  if (accessibilityData) {
    accessibilityInfo = [
      {
        label:
          'Min. Change in Velocity & Duration (for future human spaceflight)',
        value: accessibilityData.minDeltaV,
      },
      {
        label:
          'Min. Duration & Change in Velocity (for future human spaceflight)',
        value: accessibilityData.minDuration,
      },
      {
        label: 'Number of Viable Trajectories',
        value: accessibilityData.viableTrajectories,
      },
      {
        label: 'Orbit Condition Code',
        value: accessibilityData.orbitConditionCode,
      },
      {
        label: 'Next Optical Opportunity',
        value: accessibilityData.nextOpticalOpportunity,
      },
      {
        label: 'Next Goldstone Radar Opportunity',
        value: accessibilityData.nextGoldstoneRadarOpportunity,
      },
    ];
  }

  const orbitalProperties: OrbitalProperty[] = [
    { label: 'Semi-Major Axis', value: `${selectedObjectData.a} AU` },
    { label: 'Eccentricity', value: selectedObjectData.e },
    { label: 'Inclination', value: `${selectedObjectData.i}°` },
    {
      label: 'Longitude of Ascending Node',
      value: `${selectedObjectData.om}°`,
    },
    { label: 'Argument of Perihelion', value: `${selectedObjectData.w}°` },
    { label: 'Perihelion Distance', value: `${selectedObjectData.q} AU` },
    { label: 'Aphelion Distance', value: `${selectedObjectData.ad} AU` },
    { label: 'Orbital Period', value: `${selectedObjectData.per_y} years` },
    { label: 'Data Arc', value: `${selectedObjectData.data_arc} days` },
    { label: 'Number of Observations', value: selectedObjectData.n_obs_used },
    { label: 'Epoch MJD', value: selectedObjectData.epoch_mjd },
    { label: 'Mean Anomaly', value: `${selectedObjectData.ma}°` },
  ];

  return (
    <PanelThing className="mt-5">
      <div className="p-5">
        <h2 className="text-2xl font-extrabold uppercase text-center">
          {neoSelected}
        </h2>
        {discovery && <p className="text-xs text-center pb-2">{discovery}</p>}
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
              {physicalProperties
                .filter(item => item.value != null)
                .map((item, index) => (
                  <p key={index} className="mb-2 text-xs">
                    <strong>{item.label}:</strong> {item.value}
                  </p>
                ))}
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
              {orbitalProperties
                .filter(item => item.value != null)
                .map((item, index) => (
                  <p key={index} className="mb-2 text-xs">
                    <strong>{item.label}:</strong> {item.value}
                  </p>
                ))}{' '}
            </>
          }
        />
        <div>
          {accessibilityData && (
            <>
              <Dropdown
                name={
                  <TitleOptions>
                    <span className="inline-flex items-center">
                      <BsListUl className="mr-2" /> Accessibility
                    </span>
                  </TitleOptions>
                }
                options={
                  <ul>
                    {accessibilityInfo.map((info, index) => (
                      <li key={index} className="mb-2 text-xs">
                        <strong>{info.label}:</strong> {info.value}
                      </li>
                    ))}
                  </ul>
                }
              />
            </>
          )}

          {shouldShowDropdown && (
            <Dropdown
              name={
                <TitleOptions>
                  <span className="inline-flex items-center">
                    <BsListUl className="mr-2" /> Target of Space Mission
                  </span>
                </TitleOptions>
              }
              options={
                <ul>
                  {targetMissionInfo.map((info, index) => (
                    <li key={index} className="mb-2 text-xs">
                      <strong>{info.label}:</strong> {info.value}
                    </li>
                  ))}
                </ul>
              }
            />
          )}
        </div>
      </div>
    </PanelThing>
  );
}

export default ObjectInfo;
