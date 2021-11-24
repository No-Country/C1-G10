import { useState, useEffect } from "react";
import { Cards } from "./Cards";
import styles from "../../styles/CustomPackage/CardContainer.module.scss";

export const PackageDate = ({ setPackageDate }) => {
  const [date, setDate] = useState([]);

  const getPackageDate = (e) => {
    setDate(e.target.value);
    setPackageDate(e.target.value);
  };

  return (
    <div>
      <h3>Whats your prefered date ? ?</h3>
      <div className={styles.container}>
        <input type="date" value={date} onChange={getPackageDate} />
      </div>
    </div>
  );
};
