import styles from "../../styles/detailsTours/TourInfo.module.scss";
import React from "react";

export const TourInfo = ({ packageInfo }) => {
  return (
    <div className={styles.container}>
      <div>
        <h3>Overview</h3>
        <p>{packageInfo.description}</p>
      </div>
      <h3>Gallery</h3>
      <div className={styles.gallery}>
        {packageInfo.images.map((image, index) => {
          return (
            <div key={index}>
              <img src={image} layout="fill" atl="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
