import { TourCard } from "../components/Tours/TourCards";
import { FilterContainer } from "../components/Tours/FilterContainer";
import styles from "../styles/tours/ToursInformation.module.scss";
import { useState } from "react";
import Image from "next/image";

export default function Tours() {
  const [loading, setLoading] = useState(true);

  return (
    <div>
      <div className={styles.imageContainer}>
        <Image
          width={1920}
          height={500}
          layout="responsive"
          src="/images/snowy-mountain.jpg"
        />
        <h2>Travels</h2>
      </div>
      <div className={styles.intro}>
        <blockquote>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
          pariatur voluptates enim aliquam consequuntur necessitatibus dolorem
          repudiandae dolorum illo ex atque reprehenderit, beatae natus ducimus
          eaque consectetur? Quasi, itaque error? Praesentium consectetur
          placeat quas nisi ullam. Animi sed eaque recusandae laborum
          laudantium, deserunt magnam numquam accusantium incidunt architecto
          hic officia.
        </blockquote>
      </div>
      <div className={styles.container}>
        <div>
          <FilterContainer />
        </div>
        <div className={styles.card}>
          <TourCard />
        </div>
      </div>
    </div>
  );
}
