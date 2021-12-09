import styles from "../../styles/aboutus/Seccion5.module.scss";

const Seccion5 = () => {
  return (
    <div className={styles.a}>
      <div className={styles.Seccion5}>
        <h2>EXCLUSIVE INFORMATION</h2>
        <img src="images/nc.jpg" className="img-fluid" alt="" />
        <p>
          Details of the entire integration process for juniors, participation
          in the team meetings, to see how it develops each programmer and much
          more just leaving your email
        </p>
        <input type="email" placeholder="Enter your email"></input>
        &nbsp;&nbsp;
        <input type="submit"></input>
      </div>
    </div>
  );
};
export default Seccion5;
