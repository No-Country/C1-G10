import { useState, useEffect } from "react";
import { Cards } from "./Cards";
import styles from "../../styles/CustomPackage/CardContainer.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { getAllCategories } from "../../store/actions/Category/categoryAction";

export const Categories = ({ setCategory }) => {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);
  const [categoriesStore] = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getAllCategories());
  }, []);

  useEffect(() => {
    setCategories(categoriesStore);
  }, [categoriesStore]);

  const getCategory = (e) => {
    setCategory(e.target.id);
  };

  return (
    <div>
      <h3>What kind of hotel would you like ?</h3>
      <div className={styles.container}>
        {categories &&
          categories.map((category, i) => {
            const { categoryName } = category;
            return <Cards key={i} text={categoryName} click={getCategory} />;
          })}
      </div>
    </div>
  );
};
