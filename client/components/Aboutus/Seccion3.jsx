import styles from "../../styles/aboutus/Seccion3.module.scss";

const Seccion3 = () => (
  <div className={styles.hola}>
    <h1>BACK END</h1>
    <p>
      Encargados de implementar la interacción entre el usuario y el sitio web
    </p>
    <div className={styles.container}>
      <a href="http://linkedin.com/in/">
        <img src="/images/jorge.jpg" />

        <p>Jorge Barreto</p>
      </a>
      <a href="http://linkedin.com/in/alexmarinmendez">
        <img src="/images/Alex.png" />
        <p>Alex Mendez</p>
      </a>
      <a href="http://linkedin.com/in/">
        <img src="/images/jordan.jpg" />
        <p>Jordan Gonzales</p>
      </a>
    </div>
  </div>
);

export default Seccion3;
