import styles from "../../styles/Admin/Input.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { newDestination } from "../../store/actions/Destiantions/destinationsActions";
import { useState } from "react";

export const Destination = () => {
  const dispatch = useDispatch();

  const [destination, setDestination] = useState("");
  const [images, setImages] = useState([]);
  const [coordinates, setCoordinates] = useState();

  const destName = (e) => {
    setDestination(e.target.value);
  };

  const destImg = (e) => {
    setImages(e.target.files[0]);
  };

  const coor = (e) => {
    setCoordinates(e.target.value);
  };

  return (
    <div className={styles.form}>
      <h3>New Destination</h3>
      <div className={styles["input-container"]}>
        <input type="text" value={destination} onChange={destName} required />
        <label htmlFor="">Destination Name</label>
      </div>
      <div className={styles["input-container"]}>
        <input type="text" value={coordinates} onChange={coor} required />
        <label htmlFor="">Destination coordiantes</label>
      </div>
      <input type="file" name="image" onChange={destImg} />
      <button
        onClick={() => {
          dispatch(newDestination([destination, images, coordinates]));
        }}
      >
        Create
      </button>
    </div>
  );
};
