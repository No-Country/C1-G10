import { useState } from "react";
import { Destinations } from "../components/CustomPackage/Destinations";
import { Types } from "../components/CustomPackage/Types";
import { Categories } from "../components/CustomPackage/Categories";
import { Duration } from "../components/CustomPackage/Duration";
import { Members } from "../components/CustomPackage/Members";
import { PackageDetails } from "../components/CustomPackage/PackageDetails";
import styles from "../styles/CustomPackage/customPackage.module.scss";

const CustomPackage = () => {
  const [destination, setDestination] = useState();
  const [type, setType] = useState();
  const [category, setCategory] = useState();
  const [duration, setDuration] = useState();
  const [member, setMember] = useState();
  const [price, setPrice] = useState();

  return (
    <div className={styles.container}>
      <h1>Your destination, your rules</h1>
      <div className={styles.options}>
        <div>
          {!destination && (
            <Destinations setDestination={setDestination} setPrice={setPrice} />
          )}
        </div>
        <div>{destination && !type && <Types setType={setType} />}</div>
        <div>
          {type && !category && <Categories setCategory={setCategory} />}
        </div>
        <div>
          {category && !duration && <Duration setDuration={setDuration} />}
        </div>
        <div>{duration && !member && <Members setMember={setMember} />}</div>
        <div>
          {member && (
            <PackageDetails
              destination={destination}
              type={type}
              category={category}
              day={duration}
              member={member}
              price={price}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomPackage;
