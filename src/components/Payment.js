import { Link } from "react-router-dom";
import React from "react";
import { useStateValue } from "../modules/StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css"

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="payment">
      <div className="payment__container">
          <h1>
            Checkout (
              <Link to="/checkout">{basket?.length} items</Link>
            )
          </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivey Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123 React LAne</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivey</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
            <div className="payment__details">

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
