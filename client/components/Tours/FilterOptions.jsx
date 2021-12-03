import styles from "../../styles/tours/FilterOptions.module.scss";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterPackages } from "../../store/actions/Packages/packagesActions";
import { getAllDestinations } from "../../store/actions/Packages/packagesActions";
import { getAllCategories } from "../../store/actions/Category/categoryAction";
import { getAllTypes } from "../../store/actions/Types/typesAction";

export const FilterOptions = ({ filterBy }) => {
  const dispatch = useDispatch();
  const [filtered, setFiltered] = useState([]);
  const [destinations, setDestinations] = useState();
  const [categories, setCategories] = useState();
  const [types, setTypes] = useState();

  const [destinationsStore] = useSelector((state) => state.destinations);
  const [typesStore] = useSelector((state) => state.types);
  const [categoriesStore] = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getAllDestinations());
    dispatch(getAllCategories());
    dispatch(getAllTypes());
  }, []);

  useEffect(() => {
    setDestinations(destinationsStore);
    setTypes(typesStore);
    setCategories(categoriesStore);
    console.log(destinations);
  }, [dispatch]);

  // FILTER BY SPECIFIED VALUE AS FILTERBY
  const filterArray = (value) => {
    const arr = [];
    packages.map((elem) => {
      switch (value) {
        case "destination":
          arr.push({
            destinationName: elem[value].destinationName,
            id: elem[value]._id,
          });
          break;
        case "type":
          arr.push({
            destinationName: elem[value].typeName,
            id: elem[value]._id,
          });
          break;
        case "category":
          arr.push({
            destinationName: elem[value].categoryName,
            id: elem[value]._id,
          });
          break;
      }
    });
    const filtered = Array.from(new Set(arr));
    setFiltered(filtered);
  };

  // FILTER BY DAYS RANGE
  const filterDays = () => {
    setFiltered(["1-5", "6-10", "11-15", "15+"]);
  };

  const getToursBy = (key, value) => {
    dispatch(filterPackages([key, value]));
  };

  useEffect(() => {
    /*  if (packages) {
      if (filterBy === "Days") {
        filterDays();
        return;
      }
      filterArray(filterBy.toLowerCase());
    } */
  }, []);

  /* CREATE A COMPONENT FOR EACH FILTER OPTION, DEST, CAT, ETC */
  return (
    <div>
      {filtered &&
        filtered.map((elem, index) => {
          return (
            <div key={index} className={styles.container}>
              <p
                id={elem.id}
                onClick={() => getToursBy(filterBy.toLowerCase(), elem.id)}
              >
                {elem.destinationName}
              </p>
            </div>
          );
        })}
    </div>
  );
};
