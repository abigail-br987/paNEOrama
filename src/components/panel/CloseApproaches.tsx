import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import PanelThing from './SmallComponents/PanelThing';
import TitleOptions from './SmallComponents/TitleOption';
import Dropdown from './SmallComponents/Dropdown';
import { useContext } from 'react';
import GlobalStore from '@/lib/context/GlobalStore';

interface CloseApproachData {
  spkid: number;
  cd: string;
  orbit_ref: string;
  dist_max: string;
  body: string;
  sigma_t: string;
  v_rel: string;
  v_inf: string;
  dist: number;
  dist_min: string;
}
function CloseApproaches() {
  const [data, setData] = useState<CloseApproachData[]>([]);
  const [selectedButton, setSelectedButton] = useState<
    'closestToEarth' | 'closestTo2024'
  >('closestToEarth');
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [sortedByYear, setSortedByYear] = useState<CloseApproachData[]>([]);
  const [sortedByDist, setSortedByDist] = useState<CloseApproachData[]>([]);
  const [{ selectedObjectData }, updateStore] = useContext(GlobalStore);

  const selectedData = data.find(item => item.cd === selectedDate);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!selectedObjectData) return;
        const proxyUrl = 'https://corsproxy.io/?';
        const apiUrl = encodeURIComponent(
          `https://ssd-api.jpl.nasa.gov/sbdb.api?sstr=${selectedObjectData.spkid}&ca-data=true&ca-time=cd&no-orbit=true&discovery=true`
        );
        const response = await axios.get(`${proxyUrl}${apiUrl}`);
        const caData = response.data.ca_data as CloseApproachData[];

        if (Array.isArray(caData)) {
          const processedData = caData
            .filter(({ cd, dist }) => cd && dist)
            .map(({ cd, dist, ...rest }) => ({
              ...rest,
              cd,
              year: parseInt(cd.split('-')[0], 10),
              dist: parseFloat(dist.toString()),
            }))
            .filter(item => item.year >= 1900 && item.year <= 2100);
          setSortedByYear(
            processedData
              .sort(
                (a, b) =>
                  Math.abs(a.year - 2024) - Math.abs(b.year - 2024) ||
                  a.year - b.year
              )
              .slice(0, 10)
          );
          setSortedByDist(
            processedData.sort((a, b) => a.dist - b.dist).slice(0, 10)
          );
          setData(
            selectedButton === 'closestTo2024' ? sortedByYear : sortedByDist
          );
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchData();
  }, [selectedObjectData]);

  const handleDateClick = (date: string) =>
    setSelectedDate(prev => (date === prev ? null : date));

  const handleButtonClick = (
    buttonType: 'closestToEarth' | 'closestTo2024'
  ) => {
    setSelectedButton(buttonType);
    setData(buttonType === 'closestTo2024' ? sortedByYear : sortedByDist);
    console.log('clicked');
  };

  return (
    <>
      <PanelThing>
        <Dropdown
          name={
            <TitleOptions>
              <span className="inline-flex items-center">Close Approaches</span>
            </TitleOptions>
          }
          options={
            <div className="flex flex-col border-t">
              <TitleOptions
                className={`cursor-pointer text-xs border-b ${selectedButton === 'closestToEarth' ? 'bg-orange-600' : ''}`}
                onClick={() => handleButtonClick('closestToEarth')}
              >
                CLOSEST TO EARTH
              </TitleOptions>
              <TitleOptions
                className={`cursor-pointer text-xs border-b ${selectedButton === 'closestTo2024' ? 'bg-orange-600' : ''}`}
                onClick={() => handleButtonClick('closestTo2024')}
              >
                CLOSEST TO 2024
              </TitleOptions>
              <div className="pt-3">
                {data.map(item => (
                  <div key={item.cd}>
                    <li
                      onClick={() => handleDateClick(item.cd)}
                      className="cursor-pointer text-center pb-2"
                    >
                      {item.cd}
                    </li>
                    {selectedDate === item.cd && selectedData && (
                      <ul className="text-xs pb-2 pl-3">
                        <li>Distance: {selectedData.dist} au</li>
                        <li>Infinite Velocity: {selectedData.v_inf} km/s</li>
                        <li>Relative Velocity: {selectedData.v_rel} km/s</li>
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          }
        />
      </PanelThing>
    </>
  );
}

export default CloseApproaches;
