import React, { Component } from "react";
import Aux from "../../../hoc/aux1";
import Backdrop from "../Backdrop/Backdrop";
import "./Modal.css";
class Modal extends Component {
  state = {};
  shouldComponentUpdate = (nextProps, nextState) => {
    return nextProps.show !== this.props.show;
    // only update this componentt when an only  when props.show is changed
  };

  componentDidUpdate = () => {
    console.log("modal update"); //test that comp isupdate when show is changed
  };
  render() {
    const appearAndDisappearClasses = () => {
      return this.props.show ? "Appear" : "Disappear";
    };

    return (
      <Aux>
        <Backdrop show={this.props.show} clicked={this.props.canclePurchase} />
        <div className={`Modal ${appearAndDisappearClasses()}`}>
          {this.props.children}
        </div>
      </Aux>
    );
  }
}

export default Modal;
