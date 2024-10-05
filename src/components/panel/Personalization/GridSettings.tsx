import React from 'react';

interface GridSettingsProps {
  gridLength: number;
  gridSpacing: number;
  onGridLengthChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onGridSpacingChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const GridSettings: React.FC<GridSettingsProps> = ({
  gridLength,
  gridSpacing,
  onGridLengthChange,
  onGridSpacingChange,
}) => (
  <div className="flex flex-col items-center space-y-2 mt-2 max-w-full">
    <div className="flex flex-col items-center space-y-1">
      <label htmlFor="gridLength" className="text-sm">
        Grid Length (AU):
      </label>
      <input
        id="gridLength"
        type="range"
        min="1"
        max="20"
        step="1"
        value={gridLength}
        onChange={onGridLengthChange}
      />
      <span>{gridLength} AU</span>
    </div>
    <div className="flex flex-col items-center space-y-1">
      <label htmlFor="gridSpacing" className="text-sm">
        Grid Spacing (AU):
      </label>
      <input
        id="gridSpacing"
        type="range"
        min="0.5"
        max="3"
        step="0.1"
        value={gridSpacing}
        onChange={onGridSpacingChange}
      />
      <span>{gridSpacing} AU</span>
    </div>
  </div>
);

export default GridSettings;
