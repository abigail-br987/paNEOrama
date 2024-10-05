import { useState } from "react";
import TitleOptions from "../panel/SmallComponents/TitleOption";
import PanelThing from "../panel/SmallComponents/PanelThing";
import LargePanel from "../panel/SmallComponents/LargePanel";
import ss from "/assets/img/ss.jpg";
import CloseButton from "../panel/SmallComponents/CloseButton";

const Share = () => {
    const link = "https:";
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
            <div className="absolute bottom-0  text-white break-words px-6 py-4 rounded-md">
                <PanelThing
                    className="cursor-pointer px-3"
                    onClick={() => setShowPanel(true)}
                >
                    <TitleOptions>Share!</TitleOptions>
                </PanelThing>
            </div>
            {showPanel && (
                <LargePanel medium={true}>
                    <div
                        className="flex flex-col relative h-full w-full bg-black
           rounded-lg text-white "
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
                        <img
                            src={ss}
                            className="absolute rounded-lg object-cover w-full h-full"
                            alt="Orrery"
                        />
                    </div>
                </LargePanel>
            )}
        </>
    );
};

export default Share;
