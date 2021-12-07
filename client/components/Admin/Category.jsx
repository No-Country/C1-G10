import styles from "../../styles/Admin/Input.module.scss";
import { useState } from "react";
import { newCategory } from "../../store/actions/Category/categoryAction";
import { useDispatch } from "react-redux";
import Spinner from "../Styled/Spinner";

export const Category = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [show, setShow] = useState(false);

  const catName = (e) => {
    setCategoryName(e.target.value);
  };

  const createCategory = async () => {
    if (!categoryName) return alert("Please fill all the fields");
    setLoading(true);
    const response = await dispatch(newCategory([categoryName]));
    if (response.status === 500) {
      setLoading(false);
      return alert("Something when wrong");
    }
    alert("Category Created");
    setLoading(false);
    setCategoryName("");
    setShow(false);
  };

  return !show ? (
    <div onClick={() => setShow(!show)}>
      <h1 className={styles.drop}>Create Category</h1>
    </div>
  ) : (
    <div className={styles.form}>
      <h3 className={styles.drop} onClick={() => setShow(!show)}>
        New Category
      </h3>
      <div className={styles["input-container"]}>
        <input type="text" value={categoryName} onChange={catName} required />
        <label htmlFor="">Create a new Category</label>
      </div>
      {loading ? (
        <Spinner style={{ margin: "auto" }} />
      ) : (
        <button onClick={createCategory}>Create</button>
      )}
    </div>
  );
};
