import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Cards } from "./Cards";
import styles from "../../styles/CustomPackage/CardContainer.module.scss";

export const Members = ({ setMember }) => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    // GET DESTINATIONS FROM API
    setMembers(["1", "2", "3", "4", "5"]);
  }, []);

  const getMember = (e) => {
    setMember(e.target.id);
  };

  return (
    <div className={styles.container}>
      {members.map((member, i) => {
        return <Cards key={i} text={member} click={getMember} />;
      })}
    </div>
  );
};
