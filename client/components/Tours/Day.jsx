import { useEffect, useState } from "react";
import styles from "../../styles/tours/FilterOptions.module.scss";

export const Day = ({ setPackages }) => {
  const [days] = useState(["1-5", "6-10", "11-15", "15+"]);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {}, []);

  const onClick = () => {
    alert("JORGE NO HA TERMINADO ESTO");
  };

  return (
    <div onClick={() => setIsExpanded(!isExpanded)}>
      <h4>Day</h4>
      {isExpanded
        ? days.map((type, index) => {
            return (
              <div className={styles.container} key={index}>
                <p onClick={onClick}>{type}</p>
              </div>
            );
          })
        : null}
    </div>
  );
};
