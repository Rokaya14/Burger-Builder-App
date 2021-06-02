import React, { Component } from "react";
import Aux from "../aux1";
import SideDrower from "../Navigation/SideDrower/SideDrower";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import "./Layout.css";
class Layout extends Component {
  state = {
    showSideDrower: false,
  };
  sideDrowerCloseHandler = () => {
    this.setState({ showSideDrower: !this.state.showSideDrower });
  };
  sideDrowerToggleHandler = () => {
    this.setState((prevState) => {
      //to prevent unexcpected out comes
      return { showSideDrower: !prevState.showSideDrower };
    });
  };
  render() {
    return (
      <Aux>
        <Toolbar drowerToggleClicked={this.sideDrowerToggleHandler} />
        <SideDrower
          open={this.state.showSideDrower}
          closed={this.sideDrowerCloseHandler}
        />
        {/* <main className="Content">{this.props.children}</main> */}
      </Aux>
    );
  }
}

export default Layout;
