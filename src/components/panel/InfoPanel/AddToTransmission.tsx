import PanelThing from "../SmallComponents/PanelThing";
import { IoMdAddCircle } from "react-icons/io";
import GlobalStore from "@/lib/context/GlobalStore";
import { useContext } from "react";
import classNames from "classnames";

const AddToTransmission = () => {
    const [{ selectedObjectData, favoriteData }, updateStore] =
        useContext(GlobalStore);

    const addThings = () => {
        updateStore(({ favoriteData }) => ({
            favoriteData: [...favoriteData, selectedObjectData],
        }));
    };

    const isInList = favoriteData.some(
        (item) => item.spkid === selectedObjectData?.spkid,
    );

    return (
        <PanelThing>
            <button
                className={classNames(
                    "cursor-pointer text-center w-full py-2 px-4",
                    isInList && "text-neutral-400",
                )}
                onClick={addThings}
                disabled={isInList}
            >
                <IoMdAddCircle className="text-md inline-block" /> Add To Transmission
            </button>
        </PanelThing>
    );
};

export default AddToTransmission;
