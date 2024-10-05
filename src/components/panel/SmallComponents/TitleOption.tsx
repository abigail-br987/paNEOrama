import { HTMLProps } from "react";
import classNames from "classnames";

export interface Props extends HTMLProps<HTMLDivElement> { }

const TitleOptions = ({ children, className, ...props }: Props) => (
    <div
        className={classNames(
            "py-1 text-center font-extrabold tracking-wider",
            className,
        )}
        {...props}
    >
        {children}
    </div>
);

export default TitleOptions;
