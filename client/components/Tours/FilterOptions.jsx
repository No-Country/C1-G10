import styles from "../../styles/tours/FilterOptions.module.scss";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterPackages } from "../../store/actions/Packages/packagesActions";

export const FilterOptions = ({ filterBy }) => {
  const dispatch = useDispatch();
  const [filtered, setFiltered] = useState([]);

  const [packages] = useSelector((state) => state.packages);

  // FILTER BY SPECIFIED VALUE AS FILTERBY
  const filterArray = (value) => {
    const arr = [];
    packages.map((elem) => {
      switch (value) {
        case "destination":
          arr.push(elem[value].destinationName);
          break;
        case "type":
          arr.push(elem[value].typeName);
          break;
        case "category":
          arr.push(elem[value].categoryName);
          break;
      }
    });
    const filtered = Array.from(new Set(arr));
    setFiltered(filtered);
  };

  // FILTER BY DAYS RANGE
  const filterDays = () => {
    setFiltered(["1-5", "5-10", "10-15"]);
  };

  const getToursBy = (key, value) => {
    dispatch(filterPackages(["packageName", "Cancun Paradise"]));
  };

  useEffect(() => {
    if (packages) {
      if (filterBy === "Days") {
        filterDays();
        return;
      }
      filterArray(filterBy.toLowerCase());
    }
  }, []);

  return (
    <div>
      {filtered &&
        filtered.map((elem, index) => {
          return (
            <div key={index} className={styles.container}>
              <p onClick={getToursBy}>{elem}</p>
            </div>
          );
        })}
    </div>
  );
};
