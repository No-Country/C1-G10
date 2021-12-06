import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllCategories } from "../../../store/actions/Category/categoryAction";
import styles from "../../../styles/Admin/Input.module.scss";
import { useState } from "react";

export const CategoryDropdown = ({ category, setCategory }) => {
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    const response = await dispatch(getAllCategories());
    setCategories(response.payload);
  };

  const getCategoryId = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div className={styles.dropdown}>
      <label htmlFor="">Category</label>
      <select value={category} onChange={getCategoryId}>
        <option value="" disabled>
          Select Category
        </option>
        {categories &&
          categories.map((category, index) => {
            const { categoryName, _id } = category;
            return (
              <option value={_id} key={index}>
                {categoryName}
              </option>
            );
          })}
      </select>
    </div>
  );
};
