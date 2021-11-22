import { useState, useEffect } from "react";
import { Cards } from "./Cards";
import styles from "../../styles/CustomPackage/CardContainer.module.scss";

export const Categories = ({ setCategory }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(["Standard", "Confort", "Deluxe"]);
  }, []);

  const getCategory = (e) => {
    setCategory(e.target.id);
  };

  return (
    <div className={styles.container}>
      {categories.map((category, i) => {
        return <Cards key={i} text={category} click={getCategory} />;
      })}
    </div>
  );
};
