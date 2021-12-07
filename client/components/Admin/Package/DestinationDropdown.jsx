import { useDispatch } from "react-redux";
import { getAllDestinations } from "../../../store/actions/Destiantions/destinationsActions";
import { useEffect } from "react";
import styles from "../../../styles/Admin/Input.module.scss";
import { useState } from "react";

export const DestinationDropdown = ({ destination, setDestination }) => {
  const [destinations, setDestinations] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getDest();
  }, []);

  const getDest = async () => {
    const resp = await dispatch(getAllDestinations());
    setDestinations(resp.payload);
  };

  const getDestinationId = (e) => {
    setDestination(e.target.value);
  };

  return (
    <div className={styles.dropdown}>
      <label htmlFor="">Destination</label>
      <select value={destination} onChange={getDestinationId}>
        <option value="" disabled>
          Select Destination
        </option>
        {destinations &&
          destinations.map((destination, index) => {
            const { destinationName, _id } = destination;
            return (
              <option value={_id} key={index}>
                {destinationName}
              </option>
            );
          })}
      </select>
    </div>
  );
};
