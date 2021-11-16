import { tourInfo } from "../tourinfo";
import Image from "next/image";
import styles from "../styles/TourCards.module.css";

export const TourCard = () => {
  return (
    <div className={styles["cards-container"]}>
      {tourInfo &&
        tourInfo.map((card, index) => {
          const { name, type, days, price } = card;
          return (
            <div key={index} className={styles.cards}>
              {/* <Image /> */}
              <span className={styles.fakeImg}></span>
              <div className={styles["card-info"]}>
                <p>{type}</p>
                <h3>{name}</h3>
                <div className={styles["info-container"]}>
                  <p>{days}</p>
                  <p>From US$ {price}</p>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};
