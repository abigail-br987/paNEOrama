import React from 'react';
import Tooltip from './Tooltip';

interface CheckboxOptionProps {
  name: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: JSX.Element | string; 
  tooltipText?: string;
}

const CheckboxOption: React.FC<CheckboxOptionProps> = ({
  name,
  checked,
  onChange,
  label,
  tooltipText,
}) => (
  <label className="flex items-center space-x-2">
    <input
      type="checkbox"
      name={name}
      className="form-checkbox h-4 w-4"
      checked={checked}
      onChange={onChange}
    />
    {tooltipText ? (
      <Tooltip tooltipText={tooltipText}>
        <span>{label}</span>
      </Tooltip>
    ) : (
      <span className="text-sm">{label}</span>
    )}
  </label>
);

export default CheckboxOption;
