import { MapContainer, MarkerProps } from "react-leaflet";
import LocationMarker from "./LocationMarker";
import { Marker } from "react-leaflet";
import { TileLayer } from "react-leaflet";
import { Popup } from "react-leaflet";

export interface Props
    extends Pick<MarkerProps, "position" | "draggable" | "eventHandlers"> {
    setPosition: (position: { lat: number; lng: number }) => void;
    markerRef: React.RefObject<any>;
}

const ObservableNEASMap = ({
    setPosition,
    position,
    draggable,
    eventHandlers,
    markerRef,
}: Props) => {
    return (
        <MapContainer
            center={{ lat: -12.0683, lng: -77.0414 }}
            zoom={13}
            scrollWheelZoom={true}
        >
            <TileLayer
                noWrap={true}
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LocationMarker setPosition={setPosition} />
            {position && (
                <Marker
                    draggable={draggable}
                    eventHandlers={eventHandlers}
                    position={position}
                    ref={markerRef}
                >
                    <Popup minWidth={90}></Popup>
                </Marker>
            )}
        </MapContainer>
    );
};

export default ObservableNEASMap;
