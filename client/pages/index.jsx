import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import { Cover } from "../components/Home/Cover";
import dynamic from "next/dynamic";

export default function Home() {
  const Map = React.useMemo(
    () => dynamic(() => import("../components/Home/Map"), { ssr: false }),
    []
  );

  // }
  return (
    <div>
      <Head>
        <title>Across the globe</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossOrigin="anonymous"
        ></link>
      </Head>
      <Cover />
      <div>
        <h2 className={styles.titleB}>Discover the soul of</h2>
        <button className={styles.btn} onClick={(e) => handleOnClick(e)}>
          Select your Trip
        </button>
      </div>
      <div>
        <Map />
      </div>
    </div>
  );
}

// AIzaSyDUfwrf9MfP5REYjQYDY1ewufTbwp2JUNE
