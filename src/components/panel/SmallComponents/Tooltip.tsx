import React, { ReactNode, useState } from 'react';

interface TooltipProps {
  children: ReactNode;
  tooltipText: string;
}

const Tooltip: React.FC<TooltipProps> = ({ children, tooltipText }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div
          className="absolute border 
        bottom-full left-1/2 transform -translate-x-1/2 
        mb-0 px-2 py-1 bg-black text-white text-xs rounded"
        >
          {tooltipText}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
