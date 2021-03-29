import axios from "../../axios-order";
import React, { Component } from "react";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Burger from "../../components/Burger/Burger";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Modal from "../../components/UI/Modal/Modal";
import Aux from "../../hoc/aux1";
import "./BurgerBuilder.css";
const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 1,
  cheese: 0.5,
  meat: 1.5,
};
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 0,
    purchasable: false,
    purchasing: false,
  };
  updatePurchaseState = (ingredients, price) => {
    // const ingredients = { ...this.state.ingredient };
    // const ingKeys = Object.keys(ingredients);
    // const sum = ingKeys
    //   .map((ingKey) => ingredients[ingKey])
    //   .reduce((sum, currentValue) => sum + currentValue, 0);
    this.setState({ purchasable: price > 0 });
  };

  addIngredientHandler = (type) => {
    const updatedCounted = this.state.ingredients[type] + 1; //>> العدد القديم للمكون اللي عايز ازود عليه 1
    let updatedIngredient = { ...this.state.ingredients };
    updatedIngredient[type] = updatedCounted;
    const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
    //console.log(typeof this.state.totalPrice);
    this.setState({ ingredients: updatedIngredient, totalPrice: newPrice });
    this.updatePurchaseState(updatedIngredient, newPrice);
  };
  removeIngredientHandler = (type) => {
    if (this.state.ingredients[type] !== 0) {
      const updatedCounted = this.state.ingredients[type] - 1; //>> 1العدد القديم للمكون اللي عايز انقص  منه
      let updatedIngredient = { ...this.state.ingredients };
      updatedIngredient[type] = updatedCounted;
      const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
      this.setState({ ingredients: updatedIngredient, totalPrice: newPrice });
      this.updatePurchaseState(updatedIngredient, newPrice);
    }
  };
  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };
  canclePurchaseHandler = () => {
    this.setState({ purchasing: false });
  };
  continuePurchaseHandler = () => {
    // alert("you continue ");

    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: "Rokaya Magdi",
        address: {
          street: "saft",
          zipCode: "55512",
          contry: "Egypt",
        },
        email: "rokaiamagdi@gmail.com",
      },
      delivaryMethod: "fastes",
    };
    axios
      .post("/orders.json", order)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };
  render() {
    const disabled = { ...this.state.ingredients };
    for (const key in disabled) {
      disabled[key] = disabled[key] <= 0;
    }
    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          canclePurchase={this.canclePurchaseHandler}
        >
          <OrderSummary
            ingredients={this.state.ingredients}
            canclePurchase={this.canclePurchaseHandler}
            continuePurchase={this.continuePurchaseHandler}
            price={this.state.totalPrice}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <h3 className="Price">Price : {this.state.totalPrice}</h3>
        <BuildControls
          ingrediantAdded={this.addIngredientHandler}
          ingrediantRemoved={this.removeIngredientHandler}
          disabled={disabled}
          purchasable={this.state.purchasable}
          orderd={this.purchaseHandler}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
