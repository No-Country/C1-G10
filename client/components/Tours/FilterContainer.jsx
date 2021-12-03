import styles from "../../styles/tours/ToursFilter.module.scss";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { Destination } from "./Destination";
import { Type } from "./Type";
import { Category } from "./Category";
import { Day } from "./Day";
import { useDispatch } from "react-redux";
import { getAllPackages } from "../../store/actions/Packages/packagesActions";

export const FilterContainer = ({ setPackages }) => {
  const dispatch = useDispatch();

  const reset = async () => {
    const data = await dispatch(getAllPackages());
    setPackages(data.payload);
  };

  return (
    <div className={styles.container}>
      <h2>Filter Destinations</h2>
      <p onClick={reset} className={styles.reset}>
        Reset
      </p>
      <hr />
      <div className={styles.filters}>
        <Destination setPackages={setPackages} />
      </div>
      <hr />
      <div className={styles.filters}>
        <Type setPackages={setPackages} />
      </div>
      <hr />
      <div className={styles.filters}>
        <Category setPackages={setPackages} />
      </div>
      <hr />
      <div className={styles.filters}>
        <Day setPackages={setPackages} />
      </div>
      {/* {filters.map((filter, index) => {
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
      })} */}
    </div>
  );
};
