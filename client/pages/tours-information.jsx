import { TourCard } from "../components/TourCards";
import { TourFilter } from "../components/TourFilter";
import styles from "../styles/tours-information/ToursInformation.module.scss";
import Image from "next/image";

export default function Tours() {
  return (
    <div>
      <div className={styles.maxi}>
        <h2>nav</h2>
      </div>
      <div className={styles.imageContainer}>
        <Image
          width={1920}
          height={600}
          layout="responsive"
          src="/images/snowy-mountain.jpg"
        />
        <h2>Travels</h2>
      </div>
      <div className={styles.container}>
        <div>
          <TourFilter />
        </div>
        <div className={styles.card}>
          <TourCard />
        </div>
      </div>
    </div>
  );
}
