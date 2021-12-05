import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllTypes } from "../../../store/actions/Types/typesAction";

export const TypeDropdown = ({ type, setType }) => {
  const [types] = useSelector((state) => state.types);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTypes());
  }, []);

  const getTypeId = (e) => {
    setType(e.target.value);
  };

  return (
    <div>
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
