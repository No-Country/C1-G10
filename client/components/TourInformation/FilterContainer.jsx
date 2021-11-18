import styles from "../../styles/tours-information/ToursFilter.module.scss";
import { useState, useEffect } from "react";
import { FilterOptions } from "./FilterOptions";
import { useSelector } from "react-redux";

export const FilterContainer = () => {
  const [isExpanded, setIsExpanded] = useState();
  const [filters, setFilters] = useState([]);
  const [promos] = useSelector((state) => state.promos);

  const toggleDropdown = (e) => {
    if (isExpanded === e.target.id) {
      setIsExpanded();
      return;
    }
    setIsExpanded(e.target.id);
  };

  const getTourEntries = () => {
    const entries = [];
    for (let key in promos[0]) {
      entries.push(key);
    }
    const entries = entries.filter((elem) => {
      return elem != "image" && elem != "pricePerDay" && elem != "id";
    });

    setFilters(entries);
  };

  useEffect(() => {
    promos && getTourEntries();
  }, [promos]);

  return (
    <div className={styles.container}>
      <h2>Filter Destinations</h2>
      <hr />
      {filters.map((filter, index) => {
        console.log(filter);
        return (
          <FilterOptions
            filter={filter}
            toggleDropdown={toggleDropdown}
            isExpanded={isExpanded}
          />
        );
      })}
    </div>
  );
};
