import styles from "../../styles/Admin/Input.module.scss";
import { useState } from "react";
import { newCategory } from "../../store/actions/Category/categoryAction";
import { useDispatch } from "react-redux";

export const Category = () => {
  const dispatch = useDispatch();
  const [categoryName, setCategoryName] = useState("");

  const catName = (e) => {
    setCategoryName(e.target.value);
  };

  const createCategory = () => {
    dispatch(newCategory([categoryName]));
  };

  return (
    <div className={styles.form}>
      <div className={styles["input-container"]}>
        <input type="text" value={categoryName} onChange={catName} required />
        <label htmlFor="">Create a new Category</label>
      </div>
      <button onClick={createCategory}>Create</button>
    </div>
  );
};
