import classNames from "classnames";
import { ReactNode } from "react";
interface LargePanelProps {
    children: ReactNode;
    medium?: boolean;
}

const LargePanel: React.FC<LargePanelProps> = ({ children, medium }) => {
    return (
        <div className="absolute top-0 left-0 w-screen h-screen flex justify-center items-center z-50 backdrop-blur-sm">
            <div
                className={classNames(
                    "relative max-sm:w-full  text-white border rounded-lg text-sm backdrop-blur-3xl bg-black bg-opacity-60",
                    medium && "w-11/12 h-5/6",
                )}
            >
                {children}
            </div>
        </div>
    );
};

export default LargePanel;

