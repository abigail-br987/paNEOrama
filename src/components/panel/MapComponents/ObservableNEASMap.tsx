import { MapContainer } from 'react-leaflet';
import LocationMarker from './LocationMarker';
import { Marker } from 'react-leaflet';
import { TileLayer } from 'react-leaflet';
import { Popup } from 'react-leaflet';

interface ObservableNEASMapProps {
  setPosition: (position: { lat: number; lng: number }) => void;
  position: { lat: number; lng: number } | null;
  draggable: boolean;
  eventHandlers: any;
  markerRef: React.RefObject<any>;
}

const ObservableNEASMap: React.FC<ObservableNEASMapProps> = ({
  setPosition,
  position,
  draggable,
  eventHandlers,
  markerRef,
}) => {
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
