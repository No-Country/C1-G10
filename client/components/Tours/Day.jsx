import { useEffect, useState } from "react";
import styles from "../../styles/tours/FilterOptions.module.scss";
import { filterPackages } from "../../store/actions/Packages/packagesActions";
import { useDispatch } from "react-redux";

export const Day = ({ setPackages }) => {
  const [days] = useState(["1-5", "6-10", "11-15", "15+"]);
  const [isExpanded, setIsExpanded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  const onClick = async (value) => {
    const packages = await dispatch(filterPackages(["totalDays", value]));
    if (packages.payload.length === 0) {
      setPackages(null);
      return;
    }
    setPackages(packages.payload);
  };

  return (
    <div onClick={() => setIsExpanded(!isExpanded)}>
      <h4>Day</h4>
      {isExpanded
        ? days.map((day, index) => {
            return (
              <div className={styles.container} key={index}>
                <p onClick={() => onClick(day)}>{day}</p>
              </div>
            );
          })
        : null}
    </div>
  );
};
