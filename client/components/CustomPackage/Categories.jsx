import { useState, useEffect } from "react";
import { Cards } from "./Cards";

export const Categories = ({ setCategory }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(["Standard", "Confort", "Deluxe"]);
  }, []);

  const getCategory = (e) => {
    setCategory(e.target.id);
  };

  return (
    <div>
      {categories.map((category, i) => {
        return <Cards key={i} text={category} click={getCategory} />;
      })}
    </div>
  );
};
