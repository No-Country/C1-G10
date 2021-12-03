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
  const [loading, setLoading] = useState(false);

  // SEND INFORMATION AND REDIRECT
  const contactUs = () => {
    setLoading(!loading);
    setTimeout(() => {
      setLoading(false);
      resetState();
      Router.push("/");
    }, 4000);
  };

  const Message = () => {
    return (
      <div className={styles.loading}>
        <h5>Thank you.</h5>
        <p>
          We hope your experience was awesome and we can’t wait to see you again
          soon.
        </p>
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
            <td>
              <b>Type</b>
            </td>
            <td>{type}</td>
          </tr>
          <tr>
            <td>
              <b>Accomodation</b>
            </td>
            <td>{category}</td>
          </tr>
          <tr>
            <td>
              <b>Duration</b>
            </td>
            <td>{day}</td>
          </tr>
          <tr>
            <td>
              <b>Group</b>
            </td>
            <td>{member}</td>
          </tr>
          <tr>
            <td>
              <b>Date</b>
            </td>
            <td>{date}</td>
          </tr>
        </tbody>
      </table>
      <p onClick={contactUs} className={styles.contact}>
        Contact us
      </p>
    </div>
  );
};
