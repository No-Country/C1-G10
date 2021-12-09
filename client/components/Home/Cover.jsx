import styles from "../../styles//Home/Cover.module.scss";

export const Cover = () => {
  return (
    <div className={styles.cover}>
      <video autoPlay loop muted>
        <source src="/videos/paisaje.mp4" type="video/mp4" />
      </video>
      <h1>Around the world</h1>
    </div>
  );
};
