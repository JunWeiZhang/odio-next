import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

/* HOC */
import withPlayer from "@containers/HOC/withPlayer";

/* Components */
import Icon from "@components/Icon/Icon";

/* constants */
import PlayerState from "@constants/playerState";

import "./Controls.scss";

function Controls(props) {
  const getPlayIcon = () => {
    switch (props.state) {
      case PlayerState.PLAYING:
        return <Icon icon="pause" onClick={props.pause} size="3x" />;

      case PlayerState.PAUSE:
      case PlayerState.NULL:
        return <Icon icon="play" onClick={props.play} size="3x" />;

      default:
        break;
    }
  };

  return (
    <div className="player-controls">
      <div className="control play">{getPlayIcon()}</div>
      <span className="bubble-ripple">
        <span className="bubble-ripple-inner" />
      </span>
    </div>
  );
}

Controls.propTypes = {
  state: PropTypes.string.isRequired,
  play: PropTypes.func.isRequired,
  pause: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  state: state.player.state
});

export default connect(mapStateToProps)(withPlayer(Controls));
