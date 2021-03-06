import React, { Component } from "react";
import Aux from "../aux1";
import SideDrower from "../../components/Navigation/SideDrower/SideDrower";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
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
      //to prevent unecpected out comes
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
