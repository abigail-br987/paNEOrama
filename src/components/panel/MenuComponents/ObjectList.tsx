import nAsteroidsData from '../../../data/neas_.json';
import pAsteroidsData from '../../../data/phas_.json';
import cometsData from '../../../data/necs_.json';
import accessibleNeas from '../../../data/accessibleneas.json';
import { useState, useEffect, useContext, ChangeEventHandler } from 'react';
import GlobalStore from '@/lib/context/GlobalStore';
import Dropdown from '../SmallComponents/Dropdown';
import CheckboxOption from '../SmallComponents/CheckboxOption';
import { useCallback } from 'react';
import TitleOption2 from '../SmallComponents/TitleOption2';
import RangeSlider from '../SmallComponents/RangeSlider';
import { useMemo } from 'react';
import Select, { SingleValue } from 'react-select';
import { BsChevronDown } from 'react-icons/bs';

const calculateMinMax = (data: Record<string, unknown>[], key: string) => {
  const values = data.map(item => item[key] as number);
  return {
    min: Math.min(...values),
    max: Math.max(...values),
  };
};

const customStyles = {
  option: (provided: any, state: { isSelected: any }) => ({
    ...provided,
    backgroundColor: state.isSelected ? '#edf2f7' : 'white',
    color: 'black',
    outline: 'none',
    boxShadow: 'none',
    '&:hover': {
      backgroundColor: '#edf2f7',
    },
    '&:focus': {
      outline: 'none',
    },
  }),
  control: (provided: any) => ({
    ...provided,
    border: '1px solid #d1d5db',
    boxShadow: 'none',
    '&:hover': {
      border: '1px solid #d1d5db',
    },
    '&:focus': {
      border: '1px solid #d1d5db',
      boxShadow: 'none',
    },
  }),
  menu: (provided: any) => ({
    ...provided,
    boxShadow: 'none',
  }),
};

interface DataProps {
  [key: string]: string | number | null;
}

const ObjectList = () => {
  const [{ view, seeAllObjects, neoSelected }, updateStore] =
    useContext(GlobalStore);
  const [selectedNEATypes, setSelectedNEATypes] = useState<string[]>([
    "Amors",
    "Apollo",
    "Atens",
    "Atiras",
  ]);
  const [accessible, setAccessible] = useState(false);
  const [targetOfMission, setTargetOfMission] = useState(false);
  const [objectFullData, setObjectFullData] = useState<DataProps[]>([]);

  useEffect(() => {
    updateStore({ neoSelected: null });
    const filteredData = () => {
      switch (view) {
        case 'PHAs':
          return Object.values(pAsteroidsData);
        case 'NEAs':
          return Object.values(nAsteroidsData);
        case 'NECs':
          return Object.values(cometsData);
        default:
          return [];
      }
    };
    const fullData: DataProps[] = filteredData();
    setObjectFullData(fullData);
  }, [view]);

  const semiMajorAxisRange = useMemo(
    () => calculateMinMax(objectFullData, 'a'),
    [objectFullData]
  );

  const eccentricityRange = useMemo(
    () => calculateMinMax(objectFullData, 'e'),
    [objectFullData]
  );
  const orbitalPeriodRange = useMemo(
    () => calculateMinMax(objectFullData, 'per'),
    [objectFullData]
  );
  const satellitesRange = useMemo(
    () => calculateMinMax(objectFullData, 'sats'),
    [objectFullData]
  );
  const albedoRange = useMemo(
    () => calculateMinMax(objectFullData, 'albedo'),
    [objectFullData]
  );
  const magnitudeRange = useMemo(
    () => calculateMinMax(objectFullData, 'M1'),
    [objectFullData]
  );
  const moidRange = useMemo(
    () => calculateMinMax(objectFullData, 'moid'),
    [objectFullData]
  );
  const diameterRange = useMemo(
    () => calculateMinMax(objectFullData, 'diameter'),
    [objectFullData]
  );

  const [minA, setMinA] = useState<number>(semiMajorAxisRange.min);
  const [maxA, setMaxA] = useState<number>(semiMajorAxisRange.max);
  const [minE, setMinE] = useState<number>(eccentricityRange.min);
  const [maxE, setMaxE] = useState<number>(eccentricityRange.max);
  const [minPerY, setMinPerY] = useState<number>(orbitalPeriodRange.min);
  const [maxPerY, setMaxPerY] = useState<number>(orbitalPeriodRange.max);
  const [minSat, setMinSat] = useState<number>(satellitesRange.min);
  const [maxSat, setMaxSat] = useState<number>(satellitesRange.max);
  const [minAlb, setMinAlb] = useState<number>(albedoRange.min);
  const [maxAlb, setMaxAlb] = useState<number>(albedoRange.max);
  const [minMag, setMinMag] = useState<number>(magnitudeRange.min);
  const [maxMag, setMaxMag] = useState<number>(magnitudeRange.max);
  const [minMoid, setMinMoid] = useState<number>(moidRange.min);
  const [maxMoid, setMaxMoid] = useState<number>(moidRange.max);
  const [minDiameter, setMinDiameter] = useState<number>(diameterRange.min);
  const [maxDiameter, setMaxDiameter] = useState<number>(diameterRange.max);

  useEffect(() => {
    setMinA(semiMajorAxisRange.min);
    setMaxA(semiMajorAxisRange.max);
    setMinE(eccentricityRange.min);
    setMaxE(eccentricityRange.max);
    setMinPerY(orbitalPeriodRange.min);
    setMaxPerY(orbitalPeriodRange.max);
    setMinSat(satellitesRange.min);
    setMaxSat(satellitesRange.max);
    setMinAlb(albedoRange.min);
    setMaxAlb(albedoRange.max);
    setMinMag(magnitudeRange.min);
    setMaxMag(magnitudeRange.max);
    setMinMoid(moidRange.min);
    setMaxMoid(moidRange.max);
    setMinDiameter(diameterRange.min);
    setMaxDiameter(diameterRange.max);
  }, [objectFullData]);

  const handleNEATypeChange: ChangeEventHandler<HTMLInputElement> = ev => {
    const { name, checked } = ev.target;
    setSelectedNEATypes(prev =>
      checked ? [...prev, name] : prev.filter(type => type !== name)
    );
  };

  const handleIsAccessible: ChangeEventHandler<HTMLInputElement> = ev => {
    setAccessible(ev.target.checked);
  };

  const handleMissionFilterChange: ChangeEventHandler<
    HTMLInputElement
  > = ev => {
    setTargetOfMission(ev.target.checked);
  };

  const applyFilters = useCallback(() => {
    const result = objectFullData
      .filter(object => {
        if (view !== 'NEAs') return true;

        return selectedNEATypes.some(type => {
          switch (type) {
            case 'Atiras':
              return object.class === 'IEO';
            case 'Atens':
              return object.class === 'ATE';
            case 'Apollo':
              return object.class === 'APO';
            case 'Amors':
              return object.class === 'AMO';
            default:
              return false;
          }
        });
      })
      .filter(object => {
        if (!accessible) return true;

        const accessibleNeaKeys = new Set(Object.keys(accessibleNeas));
        return (
          accessibleNeaKeys.size == 0 ||
          Array.from(accessibleNeaKeys).some(
            neaKey =>
              typeof object.full_name === 'string' &&
              object.full_name.includes(neaKey)
          )
        );
      })
      .filter(object => !targetOfMission || object['Mission Arrival'])
      .filter(object => {
        const isInRangeA = Number(object.a) >= minA && Number(object.a) <= maxA;
        const isInRangeE = Number(object.e) >= minE && Number(object.e) <= maxE;
        const isInRangePerY =
          Number(object.per) >= minPerY && Number(object.per) <= maxPerY;
        const isInRangeSat =
          Number(object.sats) >= minSat && Number(object.sats) <= maxSat;
        const isInRangeAlb =
          Number(object.albedo) >= minAlb && Number(object.albedo) <= maxAlb;
        const isInRangeMoid =
          Number(object.moid) >= minMoid && Number(object.moid) <= maxMoid;
        const isInRangeDiameter =
          Number(object.diameter) >= minDiameter &&
          Number(object.diameter) <= maxDiameter;
        const isInRangeMag =
          view === 'NECs'
            ? Number(object['M1']) >= minMag && Number(object['M1']) <= maxMag
            : true;

        return (
          isInRangeA &&
          isInRangeE &&
          isInRangePerY &&
          isInRangeSat &&
          isInRangeAlb &&
          isInRangeMag &&
          isInRangeMoid &&
          isInRangeDiameter
        );
      });

    console.log(result, 'hola');

    return result;
  }, [
    view,
    selectedNEATypes,
    accessibleNeas,
    accessible,
    targetOfMission,
    minA,
    maxA,
    minE,
    maxE,
    minPerY,
    maxPerY,
    minSat,
    maxSat,
    minAlb,
    maxAlb,
    minMoid,
    maxMoid,
    minDiameter,
    maxDiameter,
    minMag,
    maxMag,
  ]);

  const [debouncedFilteredData, setDebouncedFilteredData] = useState<
    DataProps[]
  >([]);

  interface Option {
    value: string | number | null;
    label: string | number | null;
  }

  const [selectedOption, setSelectedOption] =
    useState<SingleValue<Option>>(null);

  const handleChange = (selected: SingleValue<Option>) => {
    setSelectedOption(selected);
    updateStore({
      neoSelected: (selected?.value as string) ?? null,
    });
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedFilteredData(applyFilters());
    }, 300);

    return () => clearTimeout(handler);
  }, [applyFilters, objectFullData]);

  useEffect(() => {
    if (debouncedFilteredData.length > 1) {
      const filteredNames: string[] = debouncedFilteredData
        .map(item => item.full_name)
        .filter((name): name is string => typeof name === 'string');
      updateStore({ allFilteredNames: filteredNames });
    }
  }, [objectFullData, seeAllObjects]);

  const options = debouncedFilteredData.map(obj => ({
    value: obj.full_name,
    label: obj.full_name,
  }));

  return (
    <>
      <>
        <div className="w-full text-black">
          <Select
            value={selectedOption}
            onChange={handleChange}
            options={options}
            styles={customStyles}
            placeholder={`Select ${view}`}
          />
        </div>
        <div className="text-xs opacity-50 p-0.5">
        RESULTS: {debouncedFilteredData.length} {view === "NEAs" ? "(numbered)" : "(numbered & unnumbered)"}
      </div>
      </>

      <div className="max-sm:hidden md:block">
        <Dropdown
          class="xs"
          name={
            <TitleOption2>
              Filters <BsChevronDown className="inline" />
            </TitleOption2>
          }
          options={
            <>
              {' '}
              {view === 'NEAs' && (
                <>
                  <Dropdown
                    name={
                      <>
                        {' '}
                        <TitleOption2> - TYPE OF ORBIT </TitleOption2>
                      </>
                    }
                    options={
                      <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 items-center justify-center gap-2 text-xs pb-1">
                          <CheckboxOption
                            name="Atiras"
                            checked={selectedNEATypes.includes('Atiras')}
                            onChange={handleNEATypeChange}
                            label="Atiras"
                            tooltipText="Orbits within Earth's orbit (Q < 0.983 au, a < 1.0 au)"
                          />
                          <CheckboxOption
                            name="Atens"
                            checked={selectedNEATypes.includes('Atens')}
                            onChange={handleNEATypeChange}
                            label="Atens"
                            tooltipText="Earth-crossing with semi-major axes smaller than Earth's (Q < 0.983 au, a < 1.0 au)"
                          />
                          <CheckboxOption
                            name="Apollo"
                            checked={selectedNEATypes.includes('Apollo')}
                            onChange={handleNEATypeChange}
                            label="Apollo"
                            tooltipText="Earth-crossing with semi-major axes larger than Earth's (a > 1.0 au, q < 1.017 au)"
                          />
                          <CheckboxOption
                            name="Amors"
                            checked={selectedNEATypes.includes('Amors')}
                            onChange={handleNEATypeChange}
                            label="Amors"
                            tooltipText="Earth-approaching with orbits between Earth's and Mars' (a > 1.0 au, 1.017 < q < 1.3 au)"
                          />
                        </div>
                      </>
                    }
                  />

                  <Dropdown
                    class="xs"
                    name={<TitleOption2>- ACCESSIBLE NEAS</TitleOption2>}
                    options={
                      <>
                        <CheckboxOption
                          name="is accessible"
                          checked={accessible}
                          onChange={handleIsAccessible}
                          label="NEAs that might be accessible by future human space flight
                  missions"
                        />
                      </>
                    }
                  />
                </>
              )}
              <Dropdown
                class="xs"
                name={<TitleOption2>- PARAMETERS</TitleOption2>}
                options={
                  <>
                    <RangeSlider
                      label="Semi-major Axis Range (AU)"
                      range={semiMajorAxisRange}
                      minValue={minA}
                      maxValue={maxA}
                      setMinValue={setMinA}
                      setMaxValue={setMaxA}
                    />
                    <RangeSlider
                      label="Eccentricity Range (e)"
                      range={eccentricityRange}
                      minValue={minE}
                      maxValue={maxE}
                      setMinValue={setMinE}
                      setMaxValue={setMaxE}
                    />
                    <RangeSlider
                      label="Orbital Period (years)"
                      range={orbitalPeriodRange}
                      minValue={minPerY}
                      maxValue={maxPerY}
                      setMinValue={setMinPerY}
                      setMaxValue={setMaxPerY}
                    />
                    <RangeSlider
                      label="Albedo Range"
                      range={albedoRange}
                      minValue={minAlb}
                      maxValue={maxAlb}
                      setMinValue={setMinAlb}
                      setMaxValue={setMaxAlb}
                    />

                    {view === 'NECs' && (
                      <RangeSlider
                        label="Magnitude Range"
                        range={magnitudeRange}
                        minValue={minMag}
                        maxValue={maxMag}
                        setMinValue={setMinMag}
                        setMaxValue={setMaxMag}
                      />
                    )}
                    <RangeSlider
                      label="MOID Range"
                      range={moidRange}
                      minValue={minMoid}
                      maxValue={maxMoid}
                      setMinValue={setMinMoid}
                      setMaxValue={setMaxMoid}
                    />
                    <RangeSlider
                      label="Diameter Range"
                      range={diameterRange}
                      minValue={minDiameter}
                      maxValue={maxDiameter}
                      setMinValue={setMinDiameter}
                      setMaxValue={setMaxDiameter}
                    />
                  </>
                }
              />
              {(view === 'NEAs' || view === 'PHAs') && (
                <Dropdown
                  class="xs"
                  name={<TitleOption2>- SATELLITES</TitleOption2>}
                  options={
                    <RangeSlider
                      label="Satellites Range"
                      range={satellitesRange}
                      minValue={minSat}
                      maxValue={maxSat}
                      step={1}
                      setMinValue={setMinSat}
                      setMaxValue={setMaxSat}
                    />
                  }
                />
              )}
              <Dropdown
                class="xs"
                name={<TitleOption2>- TARGET OF SPACE MISSION</TitleOption2>}
                options={
                  <>
                    <CheckboxOption
                      name="targetOfMission"
                      checked={targetOfMission}
                      onChange={handleMissionFilterChange}
                      label="Small-bodies that have been, or will be, the target of selected spacecraft missions"
                    />
                  </>
                }
              />{' '}
            </>
          }
        />
      </div>
    </>
  );
};

export default ObjectList;
