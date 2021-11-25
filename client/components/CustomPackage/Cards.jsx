import Image from "next/image";
import styles from "../../styles/CustomPackage/Cards.module.scss";

export const Cards = ({ text, bgImg, click, price }) => {
  return (
    <div
      className={styles.container}
      id={text}
      data--price={price}
      onClick={click}
    >
      {bgImg && <Image width={144} height={144} src={bgImg} />}
      <p>{text}</p>
    </div>
  );
};
