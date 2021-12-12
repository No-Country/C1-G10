import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { checkout } from "../../store/actions/Checkout/checkoutAction";
import styles from "../../styles/detailsTours/Checkout.module.scss";

export const Checkout = ({ packageInfo }) => {
  const [quantity, setQuantity] = useState(1);
  const [cardInfo, setCardInfo] = useState(false);

  const dispatch = useDispatch();

  const add = () => {
    setQuantity(quantity + 1);
  };

  const sub = () => {
    setQuantity(quantity - 1);
  };

  const toCheckout = () => {
    dispatch(checkout([packageInfo, quantity]));
  };

  const CardInfo = () => {
    return (
      <div className={styles.card}>
        <div>
          <p>Card Number: 4242424242424242</p>
          <p>Date: Any valid Date</p>
          <p>CVC: 123</p>
          <p>Please copy the card number</p>
          <button onClick={toCheckout}>Checkout</button>
          <div onClick={() => setCardInfo(false)}>x</div>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <label htmlFor="">Quantity</label>
      <div className={styles.quantity}>
        {quantity <= 1 ? (
          <button className={styles.disabled} onClick={sub}>
            -
          </button>
        ) : (
          <button onClick={sub}>-</button>
        )}
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button onClick={add}>+</button>
      </div>
      <div className={styles.checkoutBtn}>
        <button onClick={() => setCardInfo(true)}>Checkout</button>
      </div>
      {cardInfo ? <CardInfo /> : null}
    </div>
  );
};
