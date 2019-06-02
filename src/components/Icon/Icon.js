import React from "react";
import PropTypes from "prop-types";

// FA
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import {
  faPauseCircle,
  faPlayCircle
} from "@fortawesome/free-regular-svg-icons";

const icons = {
  play: faPlay,
  pause: faPause,
  "play-circle": faPlayCircle,
  "pause-circle": faPauseCircle
};

function Icon(props) {
  return (
    <FontAwesomeIcon
      icon={icons[props.icon]}
      onClick={props.onClick}
      size={props.size}
    />
  );
}

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  size: PropTypes.string
};

Icon.defaultProps = {
  onClick: () => {},
  size: "2x"
};

export default Icon;
