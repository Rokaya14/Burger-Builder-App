import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../Navigation/NavigationIems";
import DrowerToggle from "../SideDrower/DrowerToggle";
import "./Toolbar.css";
const Toolbar = (props) => {
  return (
    <header className="Toolbar">
      <DrowerToggle clicked={props.drowerToggleClicked} />
      <Logo />
      <nav className="DesktopOnly">
        <NavigationItems />
      </nav>
    </header>
  );
};

export default Toolbar;
