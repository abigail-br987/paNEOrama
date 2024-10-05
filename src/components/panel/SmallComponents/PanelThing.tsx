import classNames from "classnames";
import { HTMLProps } from "react";

export interface Props extends HTMLProps<HTMLDivElement> { }

const PanelThing = ({ children, className, ...props }: Props) => (
    <div
        {...props}
        className={classNames(
            "rounded-md transition-all backdrop-blur-2xl bg-black bg-opacity-50 border-white border",
            className,
        )}
    >
        {children}
    </div>
);
export default PanelThing;
