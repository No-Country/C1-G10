import Image from "next/image";
import styles from "../../styles/CustomPackage/Cards.module.scss";

export const Cards = ({ text, bgImg, click, active }) => {
  return (
    <div
      className={active ? styles.active : styles.container}
      id={text}
      onClick={click}
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/* {bgImg && <Image id={text} layout="fill" src={bgImg} />} */}
      <p id={text} onClick={click}>
        {text}
      </p>
    </div>
  );
};
