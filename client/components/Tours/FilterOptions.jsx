import styles from "../../styles/tours/FilterOptions.module.scss";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export const FilterOptions = ({ filterBy }) => {
  const [filtered, setFiltered] = useState([]);
  const [valueToSearch, setValueToSearch] = useState("");

  const [packages] = useSelector((state) => state.packages);

  // FILTER BY SPECIFIED VALUE AS FILTERBY
  const filterArray = (value) => {
    const arr = [];
    packages.map((elem) => {
      arr.push(elem[value]);
    });
    const filtered = Array.from(new Set(arr));
    setFiltered(filtered);
  };

  // FILTER BY DAYS RANGE
  const filterDays = () => {
    setFiltered(["1-5", "5-10", "10-15"]);
  };

  const getToursBy = () => {};

  useEffect(() => {
    if (packages) {
      switch (filterBy) {
        case "Destination":
          filterArray("destination");
          break;
        case "Days":
          filterDays();
          break;
        case "Type":
          filterArray("Type");
          break;
        case "Category":
          filterArray("Category");
          break;
      }
    }
  }, [packages]);

  return (
    <div>
      {filtered &&
        filtered.map((elem, index) => {
          return (
            <div key={index} className={styles.container}>
              <p>{elem}</p>
            </div>
          );
        })}
    </div>
  );
};
