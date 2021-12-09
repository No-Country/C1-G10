import styles from "../../styles//Home/Cover.module.scss";
import Head from "next/head";

export const Cover = () => {
  return (
    <div className={styles.cover}>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Head>
      <video autoPlay loop muted>
        <source src="/videos/paisaje.mp4" type="video/mp4" />
      </video>
      <h1 className={`${styles.left} animate__animated animate__backInRight`}>
        Let Your Next Adventure...
      </h1>
      {/*  <h1 className={`${styles.center} animate__animated animate__zoomIn`}>
        Next Adventure...
      </h1> */}
      <h1 className={`${styles.right} animate__animated animate__backInLeft`}>
        <span>Be Perfect</span>
      </h1>
    </div>
  );
};
