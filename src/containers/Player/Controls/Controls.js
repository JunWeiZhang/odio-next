import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

/* Components */
import Icon from "@components/Icon/Icon";

/* constants */
import PlayerState from "@constants/playerState";

/* Actions */
import * as PlayerActions from "@redux/reducers/player/actions";

function Controls(props) {
  const getPlayIcon = () => {
    switch (props.state) {
      case PlayerState.PAUSE:
      case PlayerState.NULL:
        return <Icon icon="play-circle" />;

      case PlayerState.PLAYING:
        return <Icon icon="pause-circle" />;

      default:
        break;
    }
  };

  return (
    <div
      onClick={() =>
        props.dispatch(PlayerActions.setPlayerState(PlayerState.PLAYING))
      }
    >
      {getPlayIcon()}
    </div>
  );
}

Controls.propTypes = {
  state: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  state: state.player.state
});

export default connect(mapStateToProps)(Controls);
