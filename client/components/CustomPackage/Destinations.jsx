import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Cards } from "./Cards";
import styles from "../../styles/CustomPackage/CardContainer.module.scss";
import { getAllDestinations } from "../../store/actions/Packages/packagesActions";

export const Destinations = ({ setDestination, setPrice }) => {
  const [destinations, setDestinations] = useState([]);
  const [destinationsStore] = useSelector((state) => state.destinations);
  const dispatch = useDispatch();

  useEffect(() => {
    // GET DESTINATIONS FROM API
    dispatch(getAllDestinations());
  }, []);

  useEffect(() => {
    setDestinations(destinationsStore);
  }, [destinationsStore]);

  const getDestination = (e) => {
    setDestination(e.target.id);
    setPrice(e.target.getAttribute("data--price"));
  };

  return (
    <div>
      <h3>Where do you want to go ?</h3>
      <div className={styles.container}>
        {destinations &&
          destinations.map((destination, i) => {
            const { destinationName, images } = destination;
            return (
              <Cards
                key={i}
                price={destination.price}
                text={destinationName}
                click={getDestination}
                bgImg={images[0]}
              />
            );
          })}
      </div>
    </div>
  );
};
