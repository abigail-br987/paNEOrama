import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useState } from "react";
import PanelThing from "../SmallComponents/PanelThing";
import LargePanel from "../SmallComponents/LargePanel";
import CloseButton from "../SmallComponents/CloseButton";
import TitleOptions from "../SmallComponents/TitleOption";
import { useContext } from "react";
import GlobalStore from "@/lib/context/GlobalStore";

function PrepareTransmission() {
  const [{ favoriteData }, updateStore] = useContext(GlobalStore);
  const [showPanel, setShowPanel] = useState(false);

  return (
    <>
      <PanelThing
        className="cursor-pointer px-3"
        onClick={() => setShowPanel(true)}
      >
        <TitleOptions>Objects for transmission {favoriteData.length}</TitleOptions>
      </PanelThing>

      {showPanel && (
        <div className="w-screen h-screen fixed top-0 left-0 flex justify-center items-center">
          <LargePanel>
            <CloseButton onClick={() => setShowPanel(false)} />
            <div className="flex flex-col relative h-full w-full bg-black rounded-lg text-white p-3">
              <TitleOptions>Your Favorite Objects:</TitleOptions>
              <div className="flex flex-col">
                {favoriteData.map((item: { spkid: Key | null | undefined; full_name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) => (
                  <div key={item.spkid} className="py-1">
                    {item.full_name}
                  </div>
                ))}
              </div>
            </div>
          </LargePanel>
        </div>
      )}
    </>
  );
}

export default PrepareTransmission;
