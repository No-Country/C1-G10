import styles from "../../styles/Admin/Input.module.scss";

export const Type = () => {
  return (
    <div className={styles.form}>
      <div className={styles["input-container"]}>
        <input type="text" name="" id="" required />
        <label htmlFor="">Create a new Type</label>
      </div>
    </div>
  );
};
