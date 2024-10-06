import PanelThing from "../SmallComponents/PanelThing";
import TitleOptions from "../SmallComponents/TitleOption";
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
        <PanelThing className="cursor-pointer px-3 self-end">
            <TitleOptions>
                <button
                    className={classNames(isInList && "opacity-50 cursor-not-allowed")}
                    onClick={addThings}
                    disabled={isInList}
                >
                    <IoMdAddCircle className="text-md inline-block" /> Add To Transmission
                </button>
            </TitleOptions>
        </PanelThing>
    );
};

export default AddToTransmission;
