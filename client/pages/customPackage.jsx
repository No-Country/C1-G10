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
        {!destination && (
          <Destinations setDestination={setDestination} setPrice={setPrice} />
        )}
        {destination && !type && <Types setType={setType} />}
        {type && !category && <Categories setCategory={setCategory} />}
        {category && !duration && <Duration setDuration={setDuration} />}
        {duration && !member && <Members setMember={setMember} />}
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
  );
};

export default CustomPackage;
