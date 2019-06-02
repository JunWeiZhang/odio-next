import React, { Component } from "react";
import PropTypes from "prop-types";

import NoImage from "@assets/images/no-image.png";

class Img extends Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    noImage: PropTypes.string,
    className: PropTypes.string,
    id: PropTypes.string,
    onError: PropTypes.func
  };

  static defaultProps = {
    onError: () => {},
    id: "",
    noImage: "",
    className: ""
  };

  constructor(props) {
    super(props);

    this.state = {
      src: NoImage
    };

    this.initImage = this.initImage.bind(this);
  }

  componentDidMount() {
    this._mounted = true;
    this.setState(
      {
        src: this.props.src || NoImage
      },
      () => this.initImage()
    );
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.src !== this.props.src)
      this.setState({ src: nextProps.src }, () => this.initImage());
  }

  componentWillUnmount() {
    this._mounted = false;
  }

  initImage() {
    const img = new Image();

    img.onerror = () => {
      if (this._mounted) {
        this.setState({
          src: this.props.noImage || NoImage
        });
        this.props.onError();
      }
    };
    img.src = this.state.src;
  }

  render() {
    return (
      <img
        id={this.props.id}
        className={`image ${this.props.className}`}
        src={this.state.src}
      />
    );
  }
}

export default Img;
