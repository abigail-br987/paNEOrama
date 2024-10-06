import PanelThing from "../panel/SmallComponents/PanelThing";
import TitleOptions from "../panel/SmallComponents/TitleOption";
import LargePanel from "../panel/SmallComponents/LargePanel";
import CloseButton from "../panel/SmallComponents/CloseButton";
import { useState } from "react";
import {
  FaRegClock,
  FaFilter,
  FaRocket,
  FaStar,
  FaCompass,
} from "react-icons/fa";
import { GiJourney } from "react-icons/gi";

const sections = [
  {
        title: "Welcome to paNEOrama!",
    content:
            "This application will allow you to explore the solar system and near-Earth objects.",
  },
  {
        title: "How to Navigate",
    content:
            "Use the mouse to rotate the solar system and zoom in on the planets. You can click on the planets to get detailed information.",
    icon: <GiJourney className="inline-block mr-2" />,
  },
  {
    title: 'Time Travel',
    content:
      "Click the 'Time Travel' button to visualize the solar system in different eras. Adjust the exploration speed according to your preference.",
    icon: <FaRegClock className="inline-block mr-2" />,
  },
  {
        title: "Object Filtering",
    content:
            "Use the filter function to display different celestial bodies based on characteristics such as semi-major axis or eccentricity.",
    icon: <FaFilter className="inline-block mr-2" />,
  },
  {
        title: "Orbit Simulator",
    content:
            "Access the simulator to create orbits using astrophysical formulas. This will help you better understand how celestial bodies move.",
    icon: <FaRocket className="inline-block mr-2" />,
  },
  {
        title: "Close Approaches",
    content:
            "You can visualize the close approaches of near-Earth objects and explore their physical and orbital characteristics.",
    icon: <FaStar className="inline-block mr-2" />,
  },
  {
        title: "Tourist Attractions",
    content:
            "Don’t forget to explore the tourist attractions of each planet; there is much to discover!",
    icon: <FaCompass className="inline-block mr-2" />,
  },
];

const Manual = () => {
  const [showPanel, setShowPanel] = useState(false);

  return (
    <>
      <div>
        <PanelThing
          className="cursor-pointer px-3 self-end"
          onClick={() => setShowPanel(true)}
        >
          <TitleOptions>How to Use</TitleOptions>
        </PanelThing>
      </div>
      {showPanel && (
        
  <div className="w-screen h-screen fixed top-0 left-0 flex justify-center items-center">
    <LargePanel >
      <div className="p-8 space-y-4">
        <TitleOptions>User Manual</TitleOptions>
        {sections.map((section, index) => (
          <div key={index}>
            <h3 className="font-bold text-lg">
              {section.icon}
              {section.title}
            </h3>
            {section.content}
          </div>
        ))}
        <CloseButton onClick={() => setShowPanel(false)} />
      </div>
    </LargePanel>
  </div>
)}

    </>
  );
};

export default Manual;
