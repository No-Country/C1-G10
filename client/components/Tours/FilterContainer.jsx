import styles from "../../styles/tours/ToursFilter.module.scss";
import { useState } from "react";
import { FilterOptions } from "./FilterOptions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

export const FilterContainer = () => {
  const [isExpanded, setIsExpanded] = useState();
  const [filters] = useState(["Destination", "Days", "Type", "Category"]);

  const toggleDropdown = (index) => {
    setIsExpanded(index + 1);
    if (isExpanded) {
      setIsExpanded();
    }
  };

  return (
    <div className={styles.container}>
      <h2>Filter Destinations</h2>
      <hr />
      {filters.map((filter, index) => {
        return (
          <div key={index}>
            <div
              className={styles.filters}
              id={index}
              onClick={() => toggleDropdown(index)}
            >
              <h4>{filter} </h4>
              <i>
                {isExpanded == index + 1 ? (
                  <FontAwesomeIcon icon={faChevronUp} />
                ) : (
                  <FontAwesomeIcon icon={faChevronDown} />
                )}
              </i>
            </div>
            {isExpanded === index + 1 ? (
              <FilterOptions filterBy={filter} />
            ) : null}
            {filters.length - 1 !== index ? <hr /> : null}
          </div>
        );
      })}
    </div>
  );
};
