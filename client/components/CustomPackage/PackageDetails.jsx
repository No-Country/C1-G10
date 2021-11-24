import { useState, useEffect } from "react";

export const PackageDetails = ({
  destination,
  member,
  type,
  day,
  category,
  price,
  date,
}) => {
  const [totalPrice, setTotalPrice] = useState();

  useEffect(() => {
    const total = price * member * day;
    if (category === "Confort") total *= 1.3;
    if (category === "Deluxe") total *= 1.65;
    setTotalPrice(total);
  }, []);

  return (
    <div>
      <h3>{destination}</h3>
      <div>
        <p>{type}</p>
        <p>{category}</p>
      </div>
      <div>
        <p>{day}</p>
        <p>{member}</p>
      </div>
      <p>{date}</p>
      <p>Price: {totalPrice}</p>
    </div>
  );
};
