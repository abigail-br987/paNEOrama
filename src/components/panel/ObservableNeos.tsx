import { useEffect } from "react";
import CloseButton from "./SmallComponents/CloseButton";
import "leaflet/dist/leaflet.css";
import { useState } from "react";
import ObservableNEASMap from "./MapComponents/ObservableNEASMap";
import { useRef } from "react";
import axios from "axios";
import { headers } from "./MapComponents/FormatTable";
import ObservableNEASTable from "./MapComponents/ObservableNEASTable";
import { formatDate } from "@/lib/utils/date";
import PanelThing from "./SmallComponents/PanelThing";
import TitleOptions from "./SmallComponents/TitleOption";
import LargePanel from "./SmallComponents/LargePanel";
import { BsFillGeoAltFill } from "react-icons/bs";

interface Position {
  lat: number;
  lng: number;
}

const ObservableNeos = () => {
  const [showPanel, setShowPanel] = useState(false);
  const [position, setPosition] = useState<Position | null>(null);
  const [data, setData] = useState(null);
  const today = new Date();
  const datetoday = formatDate(today);

  useEffect(() => {
    if (position) {
      const fetchData = async () => {
        try {
          const proxyUrl = "https://corsproxy.io/?";
          const apiUrl = encodeURIComponent(
            `https://ssd-api.jpl.nasa.gov/sbwobs.api?lat=${position.lat}&lon=${position.lng}&obs-time=${datetoday}&sb-group=neo&sb-kind=a&maxoutput=10&output-sort=vmag`,
          );
          const response = await axios.get(`${proxyUrl}${apiUrl}`);
          setData(response.data);
        } catch (error) {
          console.error("Error:", error);
        }
      };
      fetchData();
    } else {
      console.error("Error: Position is undefined");
    }
  }, [position]);

  const [draggable] = useState(true);
  const [dragged, setDragged] = useState(false);

  const markerRef = useRef<L.Marker | null>(null);

  const eventHandlers = {
    // dragend: () => {
    //     const marker = markerRef.current;
    //     if (marker != null) {
    //         setPosition(marker.getLatLng());
    //         setDragged(true);
    //     }
    // },
  };

  return (
    <>
      <PanelThing
        className="cursor-pointer px-3 self-end"
        onClick={() => setShowPanel(true)}
      >
        <TitleOptions>
          <BsFillGeoAltFill className="inline-block" /> ObservableNEAS
        </TitleOptions>
      </PanelThing>

      {showPanel && (
        <LargePanel medium>
          <div className="absolute backdrop-blur-3xl z-10 text-xs rounded-md text-black m-10 p-6 border max-w-full overflow-auto">
            <h1 className="text-lg font-extrabold mb-2 uppercase">
              ObservaNEAS{" "}
              <a
                href="https://ssd-api.jpl.nasa.gov/doc/sbwobs.html"
                className="text-xs opacity-50 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                NASA Small-Body Observability API
              </a>
            </h1>
            {position && position.lat != null && position.lng != null ? (
              <>
                {dragged ? (
                  <p>
                    Let's explore the top 10 observable NEAs from{" "}
                    <span className="font-bold">
                      {" "}
                      lat: {position.lat}, lon: {position.lng}{" "}
                    </span>
                    based on their visual magnitude
                  </p>
                ) : (
                  <p>
                    The top 10 observable NEAs from your location based on their
                    visual magnitude{" "}
                    <span className="font-bold">
                      {" "}
                      (lat: {position.lat}, lon: {position.lng})
                    </span>
                  </p>
                )}{" "}
              </>
            ) : (
              <p>
                Let's see the top 10 observable NEAs from your location! ({" "}
                {datetoday} )
              </p>
            )}
            <ObservableNEASTable
              data={data}
              headers={headers}
            ></ObservableNEASTable>
          </div>
          <CloseButton onClick={() => setShowPanel(false)} />
          <ObservableNEASMap
            setPosition={setPosition}
            // @ts-ignore
            position={position}
            draggable={draggable}
            eventHandlers={eventHandlers}
            markerRef={markerRef}
          />
        </LargePanel>
      )}
    </>
  );
};

export default ObservableNeos;
