import styles from "../../styles/Admin/Input.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { newDestination } from "../../store/actions/Destiantions/destinationsActions";
import { useState } from "react";
import Spinner from "../Styled/Spinner";

export const Destination = () => {
  const dispatch = useDispatch();

  const [destination, setDestination] = useState("");
  const [images, setImages] = useState();
  const [coordinates, setCoordinates] = useState("");
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  const destName = (e) => {
    setDestination(e.target.value);
  };

  const destImg = (e) => {
    setImages(e.target.files[0]);
  };

  const coor = (e) => {
    setCoordinates(e.target.value);
  };

  const createDestination = async () => {
    if (!destination || !images || !coordinates)
      return alert("Please fill all the fields");
    setLoading(true);
    const response = await dispatch(
      newDestination([destination, images, coordinates])
    );
    if (response.payload === 500) {
      setLoading(false);
      return alert("Something went wrong");
    }
    alert("Destination Created!");
    setDestination("");
    setImages("");
    setCoordinates("");
    setLoading(false);
    setShow(false);
  };

  return !show ? (
    <div onClick={() => setShow(!show)}>
      <h1 className={styles.drop}> Create Destination</h1>
    </div>
  ) : (
    <div className={styles.form}>
      <h3 className={styles.drop} onClick={() => setShow(!show)}>
        New Destination
      </h3>
      <div className={styles["input-container"]}>
        <input type="text" value={destination} onChange={destName} required />
        <label htmlFor="">Destination Name</label>
      </div>
      <div className={styles["input-container"]}>
        <input type="text" value={coordinates} onChange={coor} required />
        <label htmlFor="">Destination coordiantes (Ex: 50.10, -15.88)</label>
      </div>
      <input type="file" name="image" onChange={destImg} />
      {loading ? (
        <Spinner style={{ margin: "auto" }} />
      ) : (
        <button onClick={createDestination}>Create</button>
      )}
    </div>
  );
};
