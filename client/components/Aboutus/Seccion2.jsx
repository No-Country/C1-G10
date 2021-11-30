import styles from "../../styles/aboutus/Seccion2.module.scss";

const Seccion2 = () => (
  <div className={styles.hola}>
    <h1>FRONT END</h1>
    <p>Responsables de diseñar y programar la interfaz de usuario</p>
    <div className={styles.container}>
      <a href="https://www.linkedin.com/in/andreasolariroa/">
        <img src="/images/andrea.jpg" />
        <div className={styles.capa}>
          <p>Andrea</p>
        </div>
      </a>
      <a href="https://www.linkedin.com/in/maximiliano-ruano/">
        <img src="/images/Maxi.jpg " />
        <p>Maximiliano Ruano</p>
      </a>
      <a href="https://www.linkedin.com/in/spardutti/">
        <img src="/images/Luis.jpg" />
        <p>Damian Spagnuolo</p>
      </a>
    </div>
  </div>
);

export default Seccion2;
