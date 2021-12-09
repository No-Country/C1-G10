import styles from "../../styles/aboutus/Seccion0.module.scss";
import Image from "next/image";
const Seccion0 = () => (
  <div>
    <div className={styles.Seccion0conteiner}>
      <Image
        className="img-fluid"
        width={1769}
        height={475}
        layout="responsive"
        src="/images/ppp.jpg"
      />

      <h1 className="textosobreimagen">ABOUT US</h1>
    </div>
    <div className={styles.parrafo}>
      <p>
        -Who we are ??<br></br>
        We are a community of juniors devs, where we emulate life environments
        work to accelerate professionally, focusing mainly on the human part and
        in turn the technical part.<br></br>
        <br></br>
        -¿What is our mission? <br></br>
        Help thousands of novice developers get on board fast the labor market.
        Enhance the skills of the developers of the future creating the best
        culture to grow.<br></br>
        <br></br>
        -¿What are the values of the community?<br></br>
        No Country works under the following pillars: Collaboration, Empathy,
        Cordiality, Commitment and Proactivity. "Human values above
        technologies."
      </p>
    </div>
  </div>
);
export default Seccion0;
