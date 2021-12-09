import styles from "../../styles/aboutus/Seccion4.module.scss";

const Seccion4 = () => {
  return (
    <div className={styles.hola}>
      <h1>FOUNDERS NO COUNTRY</h1>
      <div className={styles.container}>
        <a href="http://youtube.com">
          <img src="/images/Leandro.jpg" />
          <p>Leandro Buzeta </p>
        </a>
        <a href="http://youtube.com">
          <img src="/images/Douglas.jpg" />
          <p>Douglas Bianchi</p>
        </a>
      </div>
    </div>
  );
};
export default Seccion4;
