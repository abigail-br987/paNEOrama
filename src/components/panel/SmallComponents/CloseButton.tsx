import classNames from 'classnames';
import { HTMLProps } from 'react';
import { BsXCircleFill } from 'react-icons/bs';

export interface Props extends HTMLProps<HTMLButtonElement> {}

const CloseButton = ({ className, ...props }: Props) => (
  <button
    {...props}
    className={classNames(
      'absolute z-20 cursor-pointer top-2 right-2 text-xl text-white bg-orange-600 p-2 rounded-full',
      className
    )}
    type="button"
  >
    <BsXCircleFill />
  </button>
);

export default CloseButton;
