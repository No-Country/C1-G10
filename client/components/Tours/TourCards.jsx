import Image from "next/image";
import styles from "../../styles/tours/TourCards.module.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPackages } from "../../store/actions/Packages/packagesActions";

export const TourCard = () => {
  const dispatch = useDispatch();
  const [packages] = useSelector((state) => state.packages);

  useEffect(() => {
    dispatch(getAllPackages());
  }, [dispatch]);

  return (
    <div className={styles["cards-container"]}>
      {packages &&
        packages.map((card, index) => {
          const {
            packageName,
            images,
            description,
            totalCost,
            totalDays,
            destination,
            type,
            category,
          } = card;
          return (
            <div key={index} className={styles.cards}>
              <Image
                src={images[0]}
                layout="responsive"
                width={10}
                height={4}
                objectFit="cover"
              />
              <div className={styles["card-info"]}>
                <p>{type.typeName}</p>
                <h3>{packageName}</h3>
                <div className={styles["info-container"]}>
                  <p>days {totalDays}</p>
                  <p>From US$ {totalCost}</p>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};
