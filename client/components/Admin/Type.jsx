import styles from "../../styles/Admin/Input.module.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { newType } from "../../store/actions/Types/typesAction";
import Spinner from "../Styled/Spinner";

export const Type = () => {
  const dispatch = useDispatch();
  const [type, setType] = useState("");
  const [image, setImage] = useState();
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  const typeName = (e) => {
    setType(e.target.value);
  };

  const typeImg = (e) => {
    setImage(e.target.files[0]);
  };

  const createType = async () => {
    if (!type || !image) return alert("Please fill all the fields");
    setLoading(true);
    const response = await dispatch(newType([type, image]));
    if (response.payload === 500) {
      setLoading(false);
      return alert("Somethign went wrong");
    }
    alert("Type created succesfully");
    setLoading(false);
    setShow(false);
  };

  return !show ? (
    <div>
      <h1 onClick={() => setShow(!show)} className={styles.drop}>
        Create Type
      </h1>
    </div>
  ) : (
    <div className={styles.form}>
      <h3 onClick={() => setShow(!show)} className={styles.drop}>
        New Type
      </h3>
      <div className={styles["input-container"]}>
        <input type="text" required value={type} onChange={typeName} />
        <label htmlFor="">Create a new Type</label>
      </div>
      <input type="file" name="image" onChange={typeImg} />
      {loading ? (
        <Spinner style={{ margin: "auto" }} />
      ) : (
        <button onClick={createType}>Create</button>
      )}
    </div>
  );
};
