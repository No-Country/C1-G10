import styles from "../../styles/aboutus/Seccion0.module.scss";
import Image from "next/image";
const Seccion0 = () => (
  <div>
    <div className={styles.Seccion0conteiner}>
      <Image
        width={1920}
        height={500}
        layout="responsive"
        src="/images/Pexelss.jpg"
      />

      <h1 className="textosobreimagen">SOBRE NOSOTROS</h1>
    </div>
    <div className={styles.parrafo}>
      <p>
        -¿Quiénes somos?<br></br>
        Somos una comunidad de juniors devs, donde emulamos entornos de la vida
        laboral para acelerarnos profesionalmente, con enfoque principalmente en
        la parte humana y a su vez en la parte técnica.<br></br>
        <br></br>
        -¿Cuál es nuestra misión? <br></br>
        Ayudar a miles de desarrolladores principiantes a insertarse rápido en
        el mercado laboral. Potenciar las habilidades de los desarrolladores del
        futuro creando la mejor cultura para crecer.<br></br>
        <br></br>
        -¿Cuáles son los valores de la comunidad?<br></br>
        No Country trabaja bajo los siguientes pilares: Colaboración, Empatía,
        Cordialidad, Compromiso y Proactividad. “Valores humanos por sobre
        tecnologías.”
      </p>
    </div>
  </div>
);
export default Seccion0;
