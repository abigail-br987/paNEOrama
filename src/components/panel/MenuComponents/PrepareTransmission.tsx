import { useState } from "react";
import PanelThing from "../SmallComponents/PanelThing";
import CloseButton from "../SmallComponents/CloseButton";
import TitleOptions from "../SmallComponents/TitleOption";
import { useContext } from "react";
import GlobalStore from "@/lib/context/GlobalStore";
import classNames from "classnames";
import { BsXCircleFill } from "react-icons/bs";

function PrepareTransmission() {
  const [{ favoriteData }] = useContext(GlobalStore);
  const [showPanel, setShowPanel] = useState(false);

  return (
    <>
      <PanelThing
        className="cursor-pointer px-3"
        onClick={() => setShowPanel(true)}
      >
        <TitleOptions>
          Objects for transmission {favoriteData.length}
        </TitleOptions>
      </PanelThing>

      <div
        className={classNames(
          "w-screen h-screen fixed top-0 left-0 bg-black transition-all",
          showPanel ? "bg-opacity-40" : "bg-opacity-0 pointer-events-none",
        )}
      >
        <div
          className={classNames(
            "absolute top-1/2 -translate-y-1/2 z-50 border rounded-lg text-sm backdrop-blur-3xl bg-black bg-opacity-60 transition-all py-2 px-4 w-[36rem] max-w-4xl",
            showPanel
              ? "-translate-x-1/2 left-1/2"
              : "left-0 -translate-x-full",
          )}
        >
          <div className="flex justify-between">
            <TitleOptions>Your favorite objects</TitleOptions>
            <button
              className="cursor-pointer text-xl text-white bg-orange-600 p-2 rounded-full"
              onClick={() => setShowPanel(false)}
            >
              <BsXCircleFill />
            </button>
          </div>

          <div className="flex flex-col">
            {favoriteData.map((item) => (
              <div key={item.spkid} className="py-1">
                {item.full_name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default PrepareTransmission;
