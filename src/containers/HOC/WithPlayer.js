import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import PropTypes from "prop-types";

/* Actions */
import * as PlayerActions from "@redux/reducers/player/actions";

/* constants */
import PlayerState from "@constants/playerState";

const withPlayer = Component => {
  function C(props) {
    const play = (station = {}) => {
      if (props.state === PlayerState.PAUSE)
        return props.dispatch(
          PlayerActions.setPlayerState(PlayerState.PLAYING)
        );

      if (props.state === PlayerState.PLAYING) return pause();

      if (props.station.url === station.url) return;

      props.dispatch(PlayerActions.setPlayerState(PlayerState.BUFFERING));
      props.dispatch(PlayerActions.setStation(station));
    };

    const pause = () => {
      if (props.state === PlayerState.PAUSE) return;
      props.dispatch(PlayerActions.setPlayerState(PlayerState.PAUSE));
    };

    return <Component play={play} pause={pause} {...props} />;
  }

  C.propTypes = {
    state: PropTypes.string.isRequired,
    station: PropTypes.shape({
      url: PropTypes.string
    })
  };

  return C;
};

const mapStateToProps = state => ({
  state: state.player.state,
  station: state.player.station
});

const Wrapper = compose(
  connect(
    mapStateToProps,
    null
  ),
  withPlayer
);

export default Wrapper;
