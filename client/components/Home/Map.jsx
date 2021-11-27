import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import styles from "../../styles/Home/Map.module.scss";

const Map = ({ setMap, pos, destination }) => {
  // SET THE MARKER ICON
  const icon = L.icon({ iconUrl: "/images/marker-icon.png" });

  const LocationMarker = () => {
    const map = useMapEvents({
      click() {
        map.flyTo(pos, map.getZoom());
      },
    });
    return pos === null ? null : (
      <Marker position={pos} icon={icon}>
        <Popup>
          <div>
            <h1>{destination}</h1>
            <img src="#" alt="" />
          </div>
        </Popup>
      </Marker>
    );
  };

  return (
    <MapContainer
      whenCreated={setMap}
      center={[51.505, -0.09]}
      zoom={10}
      scrollWheelZoom={false}
      className={styles.map}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker />
    </MapContainer>
  );
};

export default Map;
