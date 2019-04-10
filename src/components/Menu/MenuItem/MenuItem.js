import React, { Component } from "react";
import PropTypes from "prop-types";

import "./MenuItem.scss";

const _CLASS = {
  CLOSE: "close",
  OPEN: "open"
};

class MenuItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      _class: _CLASS.CLOSE
    };

    this.link = this.link.bind(this);
    this.handleMenuClick = this.handleMenuClick.bind(this);
  }

  link() {
    window.goToRoute(this.props.path);
  }

  handleMenuClick() {
    this.setState({
      _class: this.state._class === _CLASS.CLOSE ? _CLASS.OPEN : _CLASS.CLOSE
    });
  }

  render() {
    return (
      <div
        className="menu-item"
        onClick={this.props.children ? this.handleMenuClick : this.link}
      >
        {this.props.label}

        {this.props.children && (
          <div className={`sub-menu ${this.state._class}`}>
            {this.props.children}
          </div>
        )}
      </div>
    );
  }
}

MenuItem.propTypes = {
  label: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired
};

export default MenuItem;
