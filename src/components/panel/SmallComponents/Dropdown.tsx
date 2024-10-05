import { useState } from 'react';
import { ReactNode } from 'react';

interface DropdownProps {
  name: ReactNode;
  options: ReactNode;
  class?: 'xs' | 'sm';
  center?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({
  name,
  options,
  class: size = 'sm',
  center,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsOpen(prev => !prev);
  };

  const textSizeClass = size === 'xs' ? 'text-xs' : 'text-sm';

  return (
    <div className="relative w-full">
      <button
        onClick={toggleDropdown}
        className={`cursor-pointer w-full text-left ${center ? 'text-center' : ''}`}
      >
        {name}
      </button>
      {isOpen && <ul className={`pb-3  ${textSizeClass}`}>{options}</ul>}
    </div>
  );
};

export default Dropdown;
