import { useSelector, useDispatch } from "react-redux";
import { getAllDestinations } from "../../../store/actions/Destiantions/destinationsActions";
import { useEffect } from "react";

export const DestinationDropdown = ({ destination, setDestination }) => {
  const [destinations] = useSelector((state) => state.destinations);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllDestinations());
  }, []);

  const getDestinationId = (e) => {
    setDestination(e.target.value);
  };

  return (
    <div>
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
