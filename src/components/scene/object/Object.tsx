import { useState } from "react";
import { Html } from "@react-three/drei";

export interface Props {
  objectPosition: any;
  name: string;
  onPointerOver?: () => void;
  onPointerOut?: () => void;
  labels?: boolean;
}

export const Object = ({
  objectPosition,
  name,
  onPointerOver,
  onPointerOut,
  labels = false,
}: Props) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleMouseEnter = () => {
    if (!isClicked) onPointerOver?.();
  };

  const handleMouseLeave = () => {
    if (!isClicked) onPointerOut?.();
  };

  const handleClick = () => {
    setIsClicked((prev) => !prev);
  };

  return (
    <mesh position={objectPosition} onClick={handleClick}>
      <Html
        center
        zIndexRange={[0, 0]}
        className="group relative cursor-pointer select-none"
      >
        <span
          onPointerOver={handleMouseEnter}
          onPointerOut={handleMouseLeave}
          onClick={handleClick}
        >
          {labels && (
            <p
              className={`absolute bottom-5 text-white text-sm rounded-md min-w-24 leading-4 bg-black bg-opacity-60 backdrop-blur-lg border border-white text-center -translate-x-1/2 p-2 drop-shadow-md group-hover:drop-shadow-lg transition-all`}
            >
              {name}
            </p>
          )}
          <span
            className={`absolute -translate-x-1/2 transition-all -translate-y-1/2 border-2 border-white rounded-full bg-gray-600 w-5 h-5 group-hover:bg-orange-600`}
          ></span>
        </span>
      </Html>
    </mesh>
  );
};
