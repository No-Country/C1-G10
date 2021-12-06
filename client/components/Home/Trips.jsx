import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDestinations } from "../../store/actions/Destiantions/destinationsActions";
import { Cards } from "../CustomPackage/Cards";

export const Trips = ({ setPosition, map, setDestination }) => {
  const dispatch = useDispatch();
  const [destinations] = useSelector((state) => state.destinations);
  const [randomDest, setRandomDest] = useState(0);

  useEffect(() => {
    dispatch(getAllDestinations());
  }, []);

  const goTo = (destination, lat, lng, index) => {
    setRandomDest(index);
    setPosition([lat, lng]);
    map.flyTo([lat, lng], 11);
    setDestination(destination);
  };

  useEffect(() => {
    if (destinations) {
      const destination = destinations[0];
      const { name, coordinates } = destination;
      const lat = coordinates[0].split(",")[0];
      const lng = coordinates[0].split(",")[1];
      goTo(name, lat, lng, randomDest);
    }
  }, [destinations]);

  return destinations ? (
    <div>
      {destinations.map((destination, index) => {
        const { destinationName, coordinates, images } = destination;
        const lat = coordinates[0].split(",")[0];
        const lng = coordinates[0].split(",")[1];

        return (
          <Cards
            key={index}
            text={destinationName}
            id={destinationName}
            active={randomDest === index ? true : false}
            click={() => {
              goTo(destinationName, lat, lng, index);
            }}
            bgImg={images[0]}
          />
        );
      })}
    </div>
  ) : null;
};
