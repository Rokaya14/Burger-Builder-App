import React from "react";
import Aux from "../../hoc/aux1";
const Layout = (props) => {
  return (
    <Aux>
      <div>
        <p>TOOLBAR</p>
        <p>SIDEBAR</p>
        <p>BACKDROP</p>
      </div>
      <main>{props.children}</main>
    </Aux>
  );
};

export default Layout;
