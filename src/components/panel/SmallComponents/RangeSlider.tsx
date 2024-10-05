interface RangeSliderProps {
    label: string;
    range: Range;
    minValue: number;
    maxValue: number;
    setMinValue: (value: number) => void;
    setMaxValue: (value: number) => void;
    step?: number;
  }
  
  interface Range {
    min: number;
    max: number;
  }
  
  const RangeSlider: React.FC<RangeSliderProps> = ({
    label,
    range,
    minValue,
    maxValue,
    setMinValue,
    setMaxValue,
    step = 0.01,
  }) => {
    return (
      <div className="mb-4">
        <label className="my-2">{label}</label>
        <div className="flex items-center">
          <input
            type="range"
            min={range.min}
            max={range.max}
            step={step}
            value={minValue}
            onChange={e => setMinValue(Number(e.target.value))}
            className="w-1/2"
          />
          <input
            type="range"
            min={range.min}
            max={range.max}
            step={step}
            value={maxValue}
            onChange={e => setMaxValue(Number(e.target.value))}
            className="w-1/2"
          />
        </div>
        <div className="flex justify-between">
          <span>Min: {minValue.toFixed(2)}</span>
          <span>Max: {maxValue.toFixed(2)}</span>
        </div>
      </div>
    );
  };
  
  export default RangeSlider;
  