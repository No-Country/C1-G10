import Image from "next/image";
import styles from "../../styles/tours-information/TourCards.module.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTours } from "../../store/actions/toursActions";

export const TourCard = () => {
  const dispatch = useDispatch();
  const [packages] = useSelector((state) => state.packages);

  useEffect(() => {
    dispatch(getAllTours());
  }, [dispatch]);

  return (
    <div className={styles["cards-container"]}>
      {packages &&
        packages.map((card, index) => {
          const { destination, type, days, pricePerDay, image } = card;
          return (
            <div key={index} className={styles.cards}>
              <Image
                src={image}
                layout="responsive"
                width={10}
                height={4}
                objectFit="cover"
              />
              <div className={styles["card-info"]}>
                <p>{type}</p>
                <h3>{destination}</h3>
                <div className={styles["info-container"]}>
                  <p>days {days}</p>
                  <p>From US$ {pricePerDay * days}</p>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};
