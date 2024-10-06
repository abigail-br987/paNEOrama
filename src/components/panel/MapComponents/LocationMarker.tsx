import { useMapEvents } from 'react-leaflet';

interface LocationMarkerProps {
  setPosition: (position: { lat: number; lng: number }) => void;
}

const LocationMarker: React.FC<LocationMarkerProps> = ({ setPosition }) => {
  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e: { latlng: { lat: number; lng: number } }) {
      setPosition(e.latlng);
      const currentCenter = e.latlng;
      const offsetLng = currentCenter.lng + -0.023;
      const newCenter = { lat: currentCenter.lat, lng: offsetLng };
      map.flyTo(newCenter, map.getZoom(), {
        animate: true,
        duration: 1.5,
      });
    },
  });

  return null;
};

export default LocationMarker;
