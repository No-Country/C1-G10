import { useState } from "react";
import { Destinations } from "../components/CustomPackage/Destinations";
import { Types } from "../components/CustomPackage/Types";
import { Categories } from "../components/CustomPackage/Categories";
import { Duration } from "../components/CustomPackage/Duration";
import { Members } from "../components/CustomPackage/Members";
import { PackageDetails } from "../components/CustomPackage/PackageDetails";
import { PackageDate } from "../components/CustomPackage/PackageDate";
import { PackageNav } from "../components/CustomPackage/PackageNav";
import styles from "../styles/CustomPackage/CustomPackage.module.scss";

import { getSession } from 'next-auth/client';  //for user authentication (next-auth)

const CustomPackage = ({ user }) => {
  const [destination, setDestination] = useState();
  const [type, setType] = useState();
  const [category, setCategory] = useState();
  const [duration, setDuration] = useState();
  const [member, setMember] = useState();
  const [price, setPrice] = useState();
  const [packageDate, setPackageDate] = useState();
  const [states, setStates] = useState({
    destination: setDestination,
    type: setType,
    category: setCategory,
    duration: setDuration,
    member: setMember,
    packageDate: setPackageDate,
  });

  const resetState = () => {
    setDestination();
    setType();
    setCategory();
    setDuration();
    setMember();
    setPrice();
    setPackageDate();
  };

  if ((user === undefined) || (user.email === "travellifetouroperator@gmail.com")) {
    return (
      <>
        <p>You are not authorized to access this page.</p>
      </>
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Plan your holidays with us</h1>
      </div>
      <div className={styles.options}>
        <PackageNav
          destination={destination}
          type={type}
          category={category}
          duration={duration}
          member={member}
          packageDate={packageDate}
          setter={states}
          resetState={resetState}
        />
        <div>
          {!destination && (
            <Destinations setDestination={setDestination} setPrice={setPrice} />
          )}
        </div>
        <div>{destination && !type && <Types setType={setType} />}</div>
        <div>
          {destination && type && !category && (
            <Categories setCategory={setCategory} />
          )}
        </div>
        <div>
          {destination && type && category && !duration && (
            <Duration setDuration={setDuration} />
          )}
        </div>
        <div>
          {destination && type && category && duration && !member && (
            <Members setMember={setMember} />
          )}
        </div>
        <div>
          {destination &&
            type &&
            category &&
            duration &&
            member &&
            !packageDate && <PackageDate setPackageDate={setPackageDate} />}
        </div>
        <div>
          {packageDate &&
            destination &&
            category &&
            type &&
            duration &&
            member && (
              <PackageDetails
                destination={destination}
                member={member}
                type={type}
                day={duration}
                category={category}
                price={price}
                date={packageDate}
                resetState={resetState} 
                user={user}
              />
            )}
        </div>
      </div>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossOrigin="anonymous"
      ></script>
    </div>
  );
};

export default CustomPackage;



export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    // context.res.writeHead(302, { Location: '/' });
    // context.res.end();
    return {
      props: {}
    };
  }
  return {
    props: {
      user: session.user,
    },
  };
}