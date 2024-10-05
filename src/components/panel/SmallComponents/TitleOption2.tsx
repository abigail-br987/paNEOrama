import classNames from 'classnames';
import { HTMLProps } from 'react';

export interface Props extends HTMLProps<HTMLDivElement> {}

const TitleOption2 = ({ children, className = '', ...props }: Props) => (
  <div className={classNames('font-bold text-sm py-1', className)} {...props}>
    {children}
  </div>
);
export default TitleOption2;
