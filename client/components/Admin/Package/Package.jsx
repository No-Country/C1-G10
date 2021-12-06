import styles from "../../../styles/Admin/Input.module.scss";
import { DestinationDropdown } from "./DestinationDropdown";
import { TypeDropdown } from "./TypeDropdown";
import { CategoryDropdown } from "./CategoryDropdown";
import { useState } from "react";
import { newPackage } from "../../../store/actions/Packages/packagesActions";
import { useDispatch } from "react-redux";
import Spinner from "../../Styled/Spinner";

export const Package = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [destination, setDestination] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [state, setState] = useState({
    packageName: "",
    description: "",
    currency: "",
    totalCost: 0,
    totalDays: 0,
    spots: 0,
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };

  const creaetePackage = async () => {
    setLoading(true);
    const { packageName, description, currency, totalCost, totalDays, spots } =
      state;
    const response = await dispatch(
      newPackage([
        destination,
        category,
        type,
        packageName,
        description,
        currency,
        totalCost,
        totalDays,
        spots,
      ])
    );
    if (response.payload === 500) {
      setLoading(false);
      return alert("Something went wrong");
    }

    alert("Package created");
    setState({
      destination: "",
      category: "",
      type: "",
      packageName: "",
      description: "",
      currency: "",
      totalCost: 0,
      totalDays: 0,
      spots: 0,
    });
    setDestination("");
    setCategory("");
    setType("");
    setLoading(false);
    setShow(false);
  };

  return !show ? (
    <div onClick={() => setShow(true)}>
      <h1 className={styles.drop}>Create Package</h1>
    </div>
  ) : (
    <div className={styles.form}>
      <h2 className={styles.drop} onClick={() => setShow(false)}>
        Create Package
      </h2>
      <div className={styles.dropdown}>
        <DestinationDropdown
          setDestination={setDestination}
          destination={destination}
        />
        <CategoryDropdown setCategory={setCategory} category={category} />
        <TypeDropdown setType={setType} type={type} />
      </div>
      <div className={styles["input-container"]}>
        <input
          type="text"
          name="packageName"
          onChange={handleChange}
          value={state.packageName}
          required
        />
        <label htmlFor="">Package Name</label>
      </div>
      <div className={styles["input-container"]}>
        <input
          type="text"
          name="description"
          value={state.description}
          onChange={handleChange}
          required
        />
        <label htmlFor="">description</label>
      </div>
      <div className={styles["input-container"]}>
        <input
          type="text"
          name="currency"
          value={state.currency}
          onChange={handleChange}
          required
        />
        <label htmlFor="">Type of currency</label>
      </div>
      <div className={styles["input-container"]}>
        <input
          type="number"
          name="totalCost"
          value={state.totalCost}
          onChange={handleChange}
          required
        />
        <label htmlFor="">Total cost</label>
      </div>
      <div className={styles["input-container"]}>
        <input
          type="number"
          name="totalDays"
          value={state.totalDays}
          onChange={handleChange}
          required
        />
        <label htmlFor=""> Total days</label>
      </div>
      <div className={styles["input-container"]}>
        <input
          type="number"
          name="spots"
          value={state.spots}
          onChange={handleChange}
          required
        />
        <label htmlFor="">Remaining spots</label>
      </div>
      {loading ? <Spinner /> : <button onClick={creaetePackage}>Create</button>}
    </div>
  );
};
