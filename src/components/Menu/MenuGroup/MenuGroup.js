import React, { Component } from "react";
import PropTypes from "prop-types";

import "./MenuGroup.scss";

const _CLASS = {
  CLOSE: "close",
  OPEN: "open"
};

class MenuGroup extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      _class: _CLASS.CLOSE
    };

    this.handleMenuClick = this.handleMenuClick.bind(this);
  }

  handleMenuClick() {
    this.setState({
      _class: this.state._class === _CLASS.CLOSE ? _CLASS.OPEN : _CLASS.CLOSE
    });
  }

  render() {
    return (
      <div className="group-menu-item">
        <span onClick={this.handleMenuClick}>{this.props.label}</span>
        <div className={`sub-menu ${this.state._class}`}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default MenuGroup;
