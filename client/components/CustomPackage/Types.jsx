import { useState, useEffect } from "react";
import { Cards } from "./Cards";
import styles from "../../styles/CustomPackage/CardContainer.module.scss";

export const Types = ({ setType }) => {
  const [types, setTypes] = useState([]);

  // GET FROM API
  useEffect(() => {
    setTypes(["Family", "Relax", "Active", "Nature", "Highlights"]);
  }, []);

  const getType = (e) => {
    setType(e.target.id);
  };

  return (
    <div>
      <h3>What kind of travel do you enjoy ?</h3>
      <div className={styles.container}>
        {types.map((type, i) => {
          return <Cards key={i} text={type} click={getType} />;
        })}
      </div>
    </div>
  );
};
