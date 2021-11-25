import { useState, useEffect } from "react";
import styles from "../../styles/CustomPackage/DetailsTable.module.scss";
import Router from "next/router";

export const PackageDetails = ({
  destination,
  member,
  type,
  day,
  category,
  price,
  date,
  resetState,
}) => {
  const [totalPrice, setTotalPrice] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const total = price * member * day;
    if (category === "Confort") total *= 1.3;
    if (category === "Deluxe") total *= 1.65;
    setTotalPrice(total);
  }, []);

  // SEND INFORMATION AND REDIRECT
  const contactUs = () => {
    setLoading(!loading);
    setTimeout(() => {
      setLoading(false);
      resetState();
      Router.push("/");
    }, 2000);
  };

  const Message = () => {
    return (
      <div className={styles.loading}>
        <p>Thanks four your time</p>
        <p>we will contact you soon</p>
      </div>
    );
  };

  return loading ? (
    <Message />
  ) : (
    <div className={styles.container}>
      <h3>{destination}</h3>
      <table className={styles.table}>
        <tbody>
          <tr>
            <td>Type</td>
            <td>{type}</td>
          </tr>
          <tr>
            <td>Accomodation</td>
            <td>{category}</td>
          </tr>
          <tr>
            <td>Duration</td>
            <td>{day}</td>
          </tr>
          <tr>
            <td>Group</td>
            <td>{member}</td>
          </tr>
          <tr>
            <td>Date</td>
            <td>{date}</td>
          </tr>
        </tbody>
      </table>
      <h3>Price: {totalPrice}</h3>
      <p onClick={contactUs} className={styles.contact}>
        Contact us
      </p>
    </div>
  );
};
