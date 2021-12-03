import { useState, useEffect } from "react";
import { Cards } from "./Cards";
import styles from "../../styles/CustomPackage/CardContainer.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { getAllTypes } from "../../store/actions/Types/typesAction";

export const Types = ({ setType }) => {
  const dispatch = useDispatch();
  const [types, setTypes] = useState([]);

  const [typesStore] = useSelector((state) => state.types);

  // GET FROM API
  useEffect(() => {
    dispatch(getAllTypes());
  }, []);

  useEffect(() => {
    setTypes(typesStore);
  }, [typesStore]);

  const getType = (e) => {
    setType(e.target.id);
  };

  return (
    <div>
      <h3>What kind of travel do you enjoy ?</h3>
      <div className={styles.container}>
        {types &&
          types.map((type, i) => {
            const { typeName, image } = type;
            return (
              <Cards key={i} text={typeName} click={getType} bgImg={image} />
            );
          })}
      </div>
    </div>
  );
};
