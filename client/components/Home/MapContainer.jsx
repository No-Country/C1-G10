import { Trips } from "./Trips";
import styles from "../../styles/Home/Map.module.scss";
import dynamic from "next/dynamic";
import React from "react";
import { useState } from "react";

export const MapContainer = () => {
  const [position, setPosition] = useState(null);
  const [map, setMap] = useState(null);
  const [destination, setDestination] = useState();

  const Map = React.useMemo(
    () => dynamic(() => import("./Map"), { ssr: false }),
    []
  );

  return (
    <div>
      <div className={styles.container}>
        <h2 className={styles.titleB}>Discover our destinations</h2>
      </div>
      <div className={styles.grid}>
        <Map pos={position} setMap={setMap} destination={destination} />
        <div className={styles.trips}>
          {map && (
            <Trips
              setPosition={setPosition}
              setDestination={setDestination}
              map={map}
            />
          )}
        </div>
      </div>
    </div>
  );
};
