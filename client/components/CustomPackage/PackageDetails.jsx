import { useState, useEffect } from "react";
import styles from "../../styles/CustomPackage/DetailsTable.module.scss";
import Router from "next/router";

import { signOut } from 'next-auth/client';  //for user authentication (next-auth)

import { postCustomPackage } from "../../store/actions/customPackage/customPackagesActions";
import { useDispatch } from "react-redux";

export const PackageDetails = ({
  destination,
  member,
  type,
  day,
  category,
  price,
  date,
  resetState,
  user
}) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  // SEND INFORMATION AND REDIRECT
  const contactUs = () => {
    const _data = {
      clientName: user.name,
      clientEmail: user.email, 
      destination,
      type,
      category,
      membersQuantity: member,
      totalDays: day,
      date, 
    }
    dispatch(postCustomPackage(_data));
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

            <p>You are logged as: {user.name}</p>
            <div>
              <p>Email: {user.email}</p>
              <br />
              {user.image && (
                <span>
                  <img src={user.image} alt={user.name} />
                </span>
              )}
            </div>
            <br />
            <br />
            <button onClick={() => signOut()}>
              Sign Out
            </button>
            <p onClick={contactUs} className={styles.contact}>Contact us</p> 

    </div>
  );
};


