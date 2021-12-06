import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import styles from "../../styles/tours/FilterOptions.module.scss";
import { getAllTypes } from "../../store/actions/Types/typesAction";
import { filterPackages } from "../../store/actions/Packages/packagesActions";

export const Type = ({ setPackages }) => {
  const dispatch = useDispatch();
  const [types] = useSelector((state) => state.types);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    dispatch(getAllTypes());
  }, []);

  const onClick = async (value) => {
    const packages = await dispatch(filterPackages(["type", value]));
    packages.payload.length === 0
      ? setPackages(null)
      : setPackages(packages.payload);
  };

  return (
    <div onClick={() => setIsExpanded(!isExpanded)}>
      <h4>Type</h4>
      {isExpanded
        ? types.map((type, index) => {
            return (
              <div className={styles.container} key={index}>
                <p onClick={() => onClick(type._id)}>{type.typeName}</p>
              </div>
            );
          })
        : null}
    </div>
  );
};
