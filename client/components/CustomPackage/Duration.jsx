import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Cards } from "./Cards";
import styles from "../../styles/CustomPackage/CardContainer.module.scss";

export const Duration = ({ setDuration }) => {
  const [tripLength, setTripLength] = useState([]);

  useEffect(() => {
    // GET DESTINATIONS FROM API
    setTripLength(["3", "5", "6", "8", "10"]);
  }, []);

  const getDuration = (e) => {
    setDuration(e.target.id);
  };

  return (
    <div className={styles.container}>
      {tripLength.map((length, i) => {
        return <Cards key={i} text={length} click={getDuration} />;
      })}
    </div>
  );
};
