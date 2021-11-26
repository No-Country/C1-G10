import styles from "../../styles//Home/Cover.module.scss";

export const Cover = () => {
  return (
    <div className={styles.cover}>
      <video autoPlay loop muted>
        <source src="/videos/coverVideo.mp4" type="video/mp4" />
      </video>
      <h1>Titulo Interesante</h1>
    </div>
  );
};
