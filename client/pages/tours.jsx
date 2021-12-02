import { TourCards } from "../components/Tours/TourCards";
import { FilterContainer } from "../components/Tours/FilterContainer";
import styles from "../styles/tours/ToursInformation.module.scss";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { getAllPackages } from "../store/actions/Packages/packagesActions";

export default function Tours() {
  const dispatch = useDispatch();
  const [packagesStore] = useSelector((state) => state.packages);
  const [packages, setPackages] = useState();

  useEffect(() => {
    dispatch(getAllPackages());
  }, []);

  useEffect(() => {
    setPackages(packagesStore);
  }, [packagesStore]);

  return (
    <div>
      <div className={styles.imageContainer}>
        <Image
          width={1920}
          height={800}
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
          <FilterContainer setPackages={setPackages} />
        </div>
        <div className={styles.card}>
          <TourCards packages={packages} />
        </div>
      </div>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossOrigin="anonymous"
      ></script>
    </div>
  );
}
