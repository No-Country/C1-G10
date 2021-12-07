import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllTypes } from "../../../store/actions/Types/typesAction";
import styles from "../../../styles/Admin/Input.module.scss";
import { useState } from "react";

export const TypeDropdown = ({ type, setType }) => {
  const [types, setTypes] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getTypes();
  }, []);

  const getTypes = async () => {
    const response = await dispatch(getAllTypes());
    setTypes(response.payload);
  };

  const getTypeId = (e) => {
    setType(e.target.value);
  };

  return (
    <div className={styles.dropdown}>
      <label htmlFor="">Type</label>
      <select value={type} onChange={getTypeId}>
        <option value="" disabled>
          Select Type
        </option>
        {types &&
          types.map((type, index) => {
            const { typeName, _id } = type;
            return (
              <option value={_id} key={index}>
                {typeName}
              </option>
            );
          })}
      </select>
    </div>
  );
};
