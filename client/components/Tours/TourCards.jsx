import Image from "next/image";
import styles from "../../styles/tours/TourCards.module.scss";
import router from "next/router";

export const TourCards = ({ packages }) => {
  const goToPackage = (id) => {
    router.push(`/detailTours?id=${id}`);
  };

  return (
    <div className={styles["cards-container"]}>
      {packages ? (
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
            <div
              key={index}
              className={styles.cards}
              onClick={() => goToPackage(card._id)}
            >
              <Image
                src={images[0]}
                layout="responsive"
                width={10}
                height={4}
                objectFit="cover"
                alt="package img"
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
        })
      ) : (
        <div>Nothing to see here </div>
      )}
    </div>
  );
};
