import React from "react";
import "./DrowerToggle.css";
const DrowerToggle = (props) => {
  return (
    <div className="DrawerToggle" onClick={props.clicked}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default DrowerToggle;
