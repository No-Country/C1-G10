import { useDispatch } from "react-redux";
import { checkout } from "../store/actions/Checkout/checkoutAction";
import { useState } from "react";

export default function Checkout() {
  const dispatch = useDispatch();
  const [tour] = useState({
    packageName: "hol",
    totalCost: 25,
  });

  const pay = () => {
    dispatch(checkout(tour));
  };

  return (
    <div>
      <button onClick={pay}>pay</button>
    </div>
  );
}
