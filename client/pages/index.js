import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
// import styles from "../styles/TitleButton.module.scss"
import dynamic from 'next/dynamic'

export default function Home() {
  
  const Map = React.useMemo(() => dynamic(() => import('../components/Map'), { ssr: false, }), [])

  // }
  return (
    <div className={styles.container}>
      <Head>
        <title>Travel Life Peru</title>
        <div>
          <h2 className={styles.titleB}>Discover the soul of</h2>
          <button className={styles.btn} onClick={(e) => handleOnClick(e)}>Select your Trip</button>
        </div>
      </Head>
      <div>
        <Map />  
      </div>
    </div>
  );
}

// AIzaSyDUfwrf9MfP5REYjQYDY1ewufTbwp2JUNE
