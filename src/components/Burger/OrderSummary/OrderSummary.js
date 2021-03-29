import React from "react";
import Aux from "../../../hoc/aux1";
import Button from "../../UI/Button/Button";
import "./OrderSummary.css";
const OrderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((ingKey) => {
    return (
      <li key={ingKey}>
        <span className="ingredients"> {ingKey} : </span>
        {props.ingredients[ingKey]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delacious Burger with the following ingredients :</p>
      <ul>{ingredientSummary}</ul>
      <span className="price">Total Price: </span>
      <span> {props.price}</span>
      <p>Continue to Checkout ?</p>
      <Button btnType="Danger" clicked={props.canclePurchase}>
        Cancle
      </Button>
      <Button btnType="Success" clicked={props.continuePurchase}>
        Continue
      </Button>
    </Aux>
  );
};

export default OrderSummary;
