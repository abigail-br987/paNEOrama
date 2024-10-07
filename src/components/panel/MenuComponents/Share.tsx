import { useState } from "react";
import PanelThing from "../SmallComponents/PanelThing";
import LargePanel from "../SmallComponents/LargePanel";
import ss from "/assets/img/ss.jpg";
import CloseButton from "../SmallComponents/CloseButton";
import TitleOptions from "../SmallComponents/TitleOption";
const Share = () => {
    const link = "https://paneorama.vercel.app/";
  const [showPanel, setShowPanel] = useState(false);
    const [message, setMessage] = useState("");

  const CopyLink = () => {
    navigator.clipboard.writeText(link);
        setMessage("Link copied to clipboard!");
        setTimeout(() => setMessage(""), 3000);
  };

  const Embed = () => {
    const embedCode = `<iframe src="${link}" frameborder="0" width="600" height="400"></iframe>`;
    navigator.clipboard.writeText(embedCode);
        setMessage("Embed code copied to clipboard!");
        setTimeout(() => setMessage(""), 3000);
  };

  return (
    <>
      <>
        <PanelThing
          className="cursor-pointer px-3 self-end"
          onClick={() => setShowPanel(true)}
        >
          <TitleOptions>Share!</TitleOptions>
        </PanelThing>
      </>
      {showPanel && (
          <div className="w-screen h-screen fixed top-0 left-0 flex justify-center items-center">

        <LargePanel>
          <div
            className="flex flex-col relative h-full w-full
           rounded-lg text-white"
          >
            <div className="z-10 p-8">
              <TitleOptions>Share our Orrery!</TitleOptions>
              <div className="flex items-center space-x-4">
                <div
                  className="border p-2 px-4 hover:bg-orange-700 cursor-pointer flex items-center rounded-md"
                  onClick={CopyLink}
                >
                  <span>Link</span>
                </div>
                <div
                  className="border p-2 px-4 hover:bg-orange-700 cursor-pointer flex items-center rounded-md"
                  onClick={Embed}
                >
                  <span>Embed</span>
                </div>

                <span className="opacity-75">{message || `Link: ${link}`}</span>
              </div>
            </div>
            <CloseButton onClick={() => setShowPanel(false)} />


          </div>
        </LargePanel></div>
      )}
    </>
  );
};

export default Share;
