import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllCategories } from "../../../store/actions/Category/categoryAction";

export const CategoryDropdown = ({ category, setCategory }) => {
  const [categories] = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategories());
  }, []);

  const getCategoryId = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div>
      <label htmlFor="">Category</label>
      <select value={category} onChange={getCategoryId}>
        <option value="" disabled>
          Select Category
        </option>
        {categories &&
          categories.map((category, index) => {
            const { categoryName, _id } = category;
            return (
              <option value={_id} key={index}>
                {categoryName}
              </option>
            );
          })}
      </select>
    </div>
  );
};
