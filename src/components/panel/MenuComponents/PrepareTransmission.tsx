import { useState } from "react";
import PanelThing from "../SmallComponents/PanelThing";
import CloseButton from "../SmallComponents/CloseButton";
import TitleOptions from "../SmallComponents/TitleOption";
import { useContext } from "react";
import GlobalStore from "@/lib/context/GlobalStore";
import classNames from "classnames";
import Dropdown from "../SmallComponents/Dropdown";
function PrepareTransmission() {
  const [{ favoriteData }] = useContext(GlobalStore);
  const [showPanel, setShowPanel] = useState(false);
  console.log(favoriteData);

  return (
    <>
      <PanelThing
        className="cursor-pointer px-3"
        onClick={() => setShowPanel(true)}
      >
        <TitleOptions>
          Objects for transmission: {favoriteData.length}
        </TitleOptions>
      </PanelThing>

      <div
        className={classNames(
          "w-screen h-screen fixed top-0 left-0 bg-black transition-all",
          showPanel ? "bg-opacity-40" : "bg-opacity-0 pointer-events-none"
        )}
      >
        <div
          className={classNames(
            "absolute top-1/2 -translate-y-1/2 z-50 border rounded-lg text-sm backdrop-blur-3xl bg-black bg-opacity-60 transition-all py-2 px-4 max-w-4xl",
            showPanel ? "-translate-x-1/2 left-1/2" : "left-0 -translate-x-full"
          )}
        >
          <div>
            {favoriteData.length === 0 ? (
              <div className="py-2">
                <p className="opacity-50">Draft of my transmission</p>
                <p>Dear X'ÿlK-râ'hn,</p>
                <p>
                  I am learning a lot in my journey through the Solar System.
                </p>
                <p>
                  There are so many fascinating near-Earth objects (NEOs) that
                  can teach us about our cosmic neighborhood!
                </p>
                <p>
                  Unfortunately, I don't have any favorite NEOs to share right
                  now.
                </p>
              </div>
            ) : (
              <>
                <p>Dear X'ÿlK-râ'hn,</p>
                <p>
                  I am learning a lot in my journey through the Solar System.
                </p>
                <p>
                  There are so many fascinating near-Earth objects (NEOs)
                </p>
                <TitleOptions>My favorite Near Earth Objects:</TitleOptions>

                <div className="flex flex-col">
                  {favoriteData.map((item) => (
                    <div key={item.spkid} className="py-1">
                      <Dropdown
                        name={<>- {item.full_name}</>}
                        options={
                          <pre className="text-xs">
                            {JSON.stringify(item, null, 2)}
                          </pre>
                        }
                      />
                    </div>
                  ))}
                </div>
              </>
            )}
            <CloseButton onClick={() => setShowPanel(false)} />
          </div>
        </div>
      </div>
    </>
  );
}

export default PrepareTransmission;
