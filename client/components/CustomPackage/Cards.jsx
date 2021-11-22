import Image from "next/image";

export const Cards = ({ text, bgImg, click, price }) => {
  return (
    <div>
      {bgImg && <Image width={144} height={144} src={bgImg} />}
      <p id={text} data--price={price} onClick={click}>
        {text}
      </p>
    </div>
  );
};
