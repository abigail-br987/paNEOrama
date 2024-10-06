import PanelThing from "../SmallComponents/PanelThing";
import TitleOptions from "../SmallComponents/TitleOption";
import { IoMdAddCircle } from "react-icons/io";
import GlobalStore from "@/lib/context/GlobalStore";
import { useContext } from "react";
import { useState } from "react";
import React from "react";

const AddToTransmission = React.memo(() => {
  const [{ selectedObjectData, favoriteData }, updateStore] =
    useContext(GlobalStore);
  const [list, setList] = useState<[]>([]);

  function addThings() {
    console.log("addThings called");
    console.log(selectedObjectData, "before addThings");
    console.log(list, "current list"); 
    const updatedList = [...list, selectedObjectData];
    console.log(selectedObjectData, "selected");
    console.log(updatedList, "updatedList");
    //@ts-ignore
    setList(updatedList);
    updateStore({ favoriteData: updatedList });
  }
    //@ts-ignore
  const isInList = list.some((item) => item.spkid === selectedObjectData.spkid);

  return (
    <PanelThing className="cursor-pointer px-3 self-end">
      <TitleOptions>
        <button
          className={`${isInList ? "opacity-50 cursor-not-allowed" : ""}`}
          onClick={addThings}
          disabled={isInList}
        >
          <IoMdAddCircle className="text-md inline-block" /> {" "}
          Add To Transmission
        </button>
      </TitleOptions>
    </PanelThing>
  );
});

export default AddToTransmission;
