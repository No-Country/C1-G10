import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Cards } from "./Cards";
import styles from "../../styles/CustomPackage/CardContainer.module.scss";

export const Duration = ({ setDuration }) => {
  const [tripLength, setTripLength] = useState([]);

  useEffect(() => {
    // GET DESTINATIONS FROM API
    setTripLength(["3", "5", "7", "9", "11", "15"]);
  }, []);

  const getDuration = (e) => {
    setDuration(e.target.id);
  };

  return (
    <div>
      <h3>How many days ?</h3>
      <div className={styles.container}>
        {tripLength.map((length, i) => {
          return <Cards key={i} text={length} click={getDuration} />;
        })}
      </div>
    </div>
  );
};
