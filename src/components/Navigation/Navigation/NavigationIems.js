import React from "react";
import "./Navigation.css";
import NavigationItem from "./Navigationitem";
const NavigationItems = () => {
  return (
    <ul className="NavigationItems">
      <NavigationItem link={"/"} active>
        Burger Builder
      </NavigationItem>
      <NavigationItem link={"/c"}> Checkout </NavigationItem>
    </ul>
  );
};

export default NavigationItems;
