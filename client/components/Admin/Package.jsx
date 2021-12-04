import styles from "../../styles/Admin/Input.module.scss";

export const Package = () => {
  return (
    <div className={styles.form}>
      <div className={styles["input-container"]}>
        <input type="text" name="" id="" required />
        <label htmlFor="">Destination</label>
      </div>
      <div className={styles["input-container"]}>
        <input type="text" name="" id="" required />
        <label htmlFor="">Category</label>
      </div>
      <div className={styles["input-container"]}>
        <input type="text" name="" id="" required />
        <label htmlFor="">Type</label>
      </div>
      <div className={styles["input-container"]}>
        <input type="text" name="" id="" required />
        <label htmlFor="">Package Name</label>
      </div>
      <div className={styles["input-container"]}>
        <input type="text" name="" id="" required />
        <label htmlFor="">description</label>
      </div>
      <div className={styles["input-container"]}>
        <input type="text" name="" id="" required />
        <label htmlFor="">Type of currency</label>
      </div>
      <div className={styles["input-container"]}>
        <input type="text" name="" id="" required />
        <label htmlFor="">Total cost</label>
      </div>
      <div className={styles["input-container"]}>
        <input type="text" name="" id="" required />
        <label htmlFor=""> Total days</label>
      </div>
      <div className={styles["input-container"]}>
        <input type="text" name="" id="" required />
        <label htmlFor="">Remaining spots</label>
      </div>
    </div>
  );
};
