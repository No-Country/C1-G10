import styles from "../../styles/Admin/Input.module.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { newType } from "../../store/actions/Types/typesAction";

export const Type = () => {
  const dispatch = useDispatch();
  const [type, setType] = useState("");
  const [image, setImage] = useState();

  const typeName = (e) => {
    setType(e.target.value);
  };

  const typeImg = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div className={styles.form}>
      <h3>New Type</h3>
      <div className={styles["input-container"]}>
        <input type="text" required value={type} onChange={typeName} />
        <label htmlFor="">Create a new Type</label>
      </div>
      <input type="file" name="image" onChange={typeImg} />
      <button onClick={() => dispatch(newType([type, image]))}>Create</button>
    </div>
  );
};
