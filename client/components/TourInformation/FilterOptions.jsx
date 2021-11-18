import styles from "../../styles/tours-information/ToursFilter.module.scss";

export const FilterOptions = ({ filter, isExpanded, toggleDropdown }) => {
  return (
    <div>
      <div>
        <div className={styles.filters} onClick={toggleDropdown}>
          <h4>{filter} </h4>
        </div>
        {/*     <i id={index}>{isExpanded == index ? "up" : "down"}</i>
        {filters.length - 1 !== index ? <hr /> : null} */}
      </div>
    </div>
  );
};
