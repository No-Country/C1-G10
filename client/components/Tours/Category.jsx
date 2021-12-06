import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getAllCategories } from "../../store/actions/Category/categoryAction";
import styles from "../../styles/tours/FilterOptions.module.scss";
import { filterPackages } from "../../store/actions/Packages/packagesActions";

export const Category = ({ setPackages }) => {
  const dispatch = useDispatch();
  const [categories] = useSelector((state) => state.categories);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    dispatch(getAllCategories());
  }, []);

  const onClick = async (value) => {
    const packages = await dispatch(filterPackages(["category", value]));
     packages.payload.length === 0
       ? setPackages(null)
       : setPackages(packages.payload);
  };

  return (
    <div onClick={() => setIsExpanded(!isExpanded)}>
      <h4>Category</h4>
      {isExpanded
        ? categories.map((category, index) => {
            return (
              <div className={styles.container} key={index}>
                <p onClick={() => onClick(category._id)}>
                  {category.categoryName}
                </p>
              </div>
            );
          })
        : null}
    </div>
  );
};
