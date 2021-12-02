import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import styles from "../../styles/tours/FilterOptions.module.scss";
import {
  filterPackages,
  getAllDestinations,
} from "../../store/actions/Packages/packagesActions";

export const Destination = ({ setPackages }) => {
  const dispatch = useDispatch();
  const [destinations] = useSelector((state) => state.destinations);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    dispatch(getAllDestinations());
  }, []);

  const onClick = async (value) => {
    const packages = await dispatch(filterPackages(["destination", value]));
    setPackages(packages.payload);
  };

  return (
    <div onClick={() => setIsExpanded(!isExpanded)}>
      <h4>Destination</h4>
      {isExpanded
        ? destinations.map((destination, index) => {
            return (
              <div className={styles.container} key={index}>
                <p onClick={() => onClick(destination._id)}>
                  {destination.destinationName}
                </p>
              </div>
            );
          })
        : null}
    </div>
  );
};
