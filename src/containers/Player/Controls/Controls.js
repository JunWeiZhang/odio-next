import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

/* HOC */
import withPlayer from "@containers/HOC/withPlayer";

/* Components */
import Icon from "@components/Icon/Icon";

/* constants */
import PlayerState from "@constants/playerState";

function Controls(props) {
  const getPlayIcon = () => {
    switch (props.state) {
      case PlayerState.PLAYING:
        return <Icon icon="pause-circle" onClick={props.pause} />;

      case PlayerState.PAUSE:
      case PlayerState.NULL:
        return <Icon icon="play-circle" onClick={props.play} />;

      default:
        break;
    }
  };

  return <div>{getPlayIcon()}</div>;
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
