import { ReactNode } from 'react';
interface LargePanelProps {
  children: ReactNode;
  medium?: boolean;
}

const LargePanel: React.FC<LargePanelProps> = ({ children, medium }) => {
  return (
    <div className="absolute top-0 left-0 w-screen h-screen flex justify-center items-center z-50 backdrop-blur-sm">
      <div
        className={`relative max-sm:w-full ${medium ? 'w-11/12 h-5/6' : ''}
         text-white border rounded-lg text-sm
          backdrop-blur-3xl bg-black bg-opacity-60`}
      >
        {children}
      </div>
    </div>
  );
};

export default LargePanel;