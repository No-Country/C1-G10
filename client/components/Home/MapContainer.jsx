import { Trips } from "./Trips";
import styles from "../../styles/Home/Map.module.scss";
import dynamic from "next/dynamic";
import React from "react";
import { useState } from "react";

export const MapContainer = () => {
  const [position, setPosition] = useState(null);
  const [map, setMap] = useState(null);

  const Map = React.useMemo(
    () => dynamic(() => import("./Map"), { ssr: false }),
    []
  );

  return (
    <div>
      <div className={styles.container}>
        <h2 className={styles.titleB}>Discover the soul of</h2>
        <button className={styles.btn}>Select your Trip</button>
      </div>
      <div className={styles.grid}>
        <div className={styles.map}>
          <Map pos={position} setMap={setMap} />
        </div>
        <div className={styles.trips}>
          <Trips setPosition={setPosition} map={map} />
        </div>
      </div>
    </div>
  );
};
