import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

/* API's */
import * as StationsAPI from "@api/stations";

/* Actions */
import * as PlayerActions from "@redux/reducers/player/actions";

/* constants */
import PlayerState from "@constants/playerState";

export class AudioManager extends Component {
  static propTypes = {
    state: PropTypes.string.isRequired,
    station: PropTypes.shape({
      url: PropTypes.string
    })
  };

  constructor(props) {
    super(props);

    this.audio = null;
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (
      nextProps.state === PlayerState.PAUSE &&
      this.props.state !== PlayerState.PAUSE
    )
      return this.pause();

    if (
      this.props.state === PlayerState.PAUSE &&
      nextProps.state === PlayerState.PLAYING
    ) {
      return this.play();
    }
    if (nextProps.station.url !== this.props.station.url) {
      this.start(nextProps.station);
    }
  }

  async start(station) {
    try {
      this.pause();

      const stationInfo = await this.props.dispatch(
        StationsAPI.getStreamUrl({ id: station.id })
      );

      if (!stationInfo || !stationInfo[0]) return this.error();

      this.playAudio(stationInfo[0]);
    } catch (e) {
      return this.error();
    }
  }

  play() {
    if (this.audio) {
      this.audio.play();
    }
  }

  pause() {
    if (this.audio) {
      this.audio.pause();
    }
  }

  playAudio(stationInfo) {
    if (this.audio) {
      this.audio.src = stationInfo.url;
    } else {
      this.audio = new Audio(stationInfo.url);
      // this.setVolume(this.props.volume);

      this.audio.onplaying = function() {
        this.props.dispatch(PlayerActions.setPlayerState(PlayerState.PLAYING));
      }.bind(this);

      this.audio.onwaiting = function() {
        this.props.dispatch(
          PlayerActions.setPlayerState(PlayerState.BUFFERING)
        );
      }.bind(this);

      this.audio.onloadstart = function() {
        this.props.dispatch(
          PlayerActions.setPlayerState(PlayerState.BUFFERING)
        );
      }.bind(this);

      // this.audio.onerror = async function(err) {
      //   if (
      //     (this.audio.src.indexOf("m3u") > -1 ||
      //       this.audio.src.indexOf(".pls") > -1) &&
      //     this.audio.src.indexOf("m3u8") === -1 &&
      //     (!this.playlistRetrys || this.playlistRetrys === 1)
      //   ) {
      //     this.playlistRetrys++;
      //     let playlistURL = await this.parsePlaylist();
      //     return this.loadAudio(playlistURL || "");
      //   } else if (
      //     this.audio.src &&
      //     this.audio.src[this.audio.src.length - 1] !== ";" &&
      //     !this.playlistRetrys
      //   ) {
      //     this.destroyStream();
      //     return this.loadAudio(this.audio.src + "/;");
      //   } else {
      //     this.playlistRetrys = 0;
      //     this.setError();
      //   }
      // }.bind(this);
    }

    this.audio.play();
  }

  error() {}

  render() {
    return null;
  }
}

const mapStateToProps = state => ({
  state: state.player.state,
  station: state.player.station
});

export default connect(mapStateToProps)(AudioManager);
