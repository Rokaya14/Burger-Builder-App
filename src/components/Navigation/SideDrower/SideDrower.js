import React from "react";
import Aux from "../../../hoc/aux1";
import Logo from "../../Logo/Logo";
import Backdrop from "../../UI/Backdrop/Backdrop";
import NavigationItems from "../Navigation/NavigationIems";
import "./SideDrower.css";

const SideDrower = (props) => {
  let attachedClasses = "SideDrower Close";
  if (props.open) {
    attachedClasses = "SideDrower Open";
  }
  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses}>
        <div className="logo">
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

export default SideDrower;
