import styles from "../../styles/aboutus/Seccion5.module.scss";

const Seccion5 = () => {
  return (
    <div className={styles.a}>
      <div className={styles.Seccion5}>
        <h2>INFORMACION EXCLUSIVA</h2>
        <img src="images/nc.jpg" className="img-fluid" alt="" />
        <p>
          Detalles de todo el proceso de integracion para los juniors ,
          participacion en las meet de los equipos, poder ver como desarrolla
          cada programador y mucho mas solo dejando tu email
        </p>
        <input
          type="email"
          placeholder="Ingrese su email"
          required="da"
        ></input>
        &nbsp;&nbsp;
        <input type="submit" required="da"></input>
      </div>
    </div>
  );
};
export default Seccion5;
