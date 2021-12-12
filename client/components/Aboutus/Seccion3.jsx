import styles from "../../styles/aboutus/Seccion3.module.scss";

const Seccion3 = () => (
  <div className={styles.hola}>
    <h1>BACK END</h1>
    <p>
      Responsible for implementing the interaction between the user and the
      website
    </p>
    <div className={styles.container}>
      <a href="http://linkedin.com/in/">
        <img src="/images/Jorge.jpg" />

        <p>Jorge Barreto</p>
      </a>
      <a href="http://linkedin.com/in/alexmarinmendez">
        <img src="/images/Alex.png" />
        <p>Alex Mendez</p>
      </a>
    </div>
  </div>
);

export default Seccion3;
