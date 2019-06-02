import React, { Component } from "react";
import { connect } from "react-redux";
import Config from "@config/config";

/* Components */
import Loader from "@components/Loader/Loader";
import StationsList from "./StationsList/StationsList";
// import Search from "./Search/Search";

/* Utils */
import * as DomUtils from "@utils/dom";

/* Constants */
import Fetch from "@constants/fetch";

import "./StationsView.scss";

const FETCH_TYPE = {
  SEARCH: "SEARCH",
  LOAD_MORE: "LOAD_MORE",
  INITIAL_LOAD: "INITIAL_LOAD"
};

class StationsView extends Component {
  constructor(props) {
    super(props);

    this.isFetching = false;
    this.state = {
      offset: 0,
      searchTerm: "",
      moreToLoad: true,
      noStations: false
    };

    this.fetchStations = this.fetchStations.bind(this);
    this.onScroll = this.onScroll.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.getBottomSection = this.getBottomSection.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  componentDidMount() {
    this.fetchStations(FETCH_TYPE.INITIAL_LOAD);
    this.contentDiv = document.getElementById("odio-content");
    this.contentDiv.addEventListener("scroll", this.onScroll, false);
  }

  componentWillUnmount() {
    this.contentDiv.removeEventListener("scroll", this.onScroll, false);
    if (this.props.reset) this.props.dispatch(this.props.reset());
  }

  handleSearch(searchTerm) {
    this.resetState({
      state: { searchTerm },
      cb: () => this.fetchStations(FETCH_TYPE.SEARCH)
    });
  }

  resetState({ state = {}, cb = () => {} }) {
    this.setState(
      {
        offset: 0,
        moreToLoad: true,
        noStations: false,
        ...state
      },
      cb
    );
  }

  fetchStations(fetchType) {
    if (
      fetchType === FETCH_TYPE.INITIAL_LOAD ||
      fetchType === FETCH_TYPE.SEARCH ||
      fetchType === FETCH_TYPE.LOAD_MORE ||
      (DomUtils.isInViewport(this.loadMoreElement) &&
        this.props.stations.length &&
        this.props.stations.length % Config.stations.load_limit === 0 &&
        !this.isFetching)
    ) {
      const fetchingTerm = this.props.fetchBy.toLowerCase();
      this.isFetching = true;
      let offset =
        this.props.fetchStatus === Fetch.FETCHING_ERROR ||
        fetchType === FETCH_TYPE.SEARCH ||
        fetchType === FETCH_TYPE.INITIAL_LOAD
          ? 0
          : Config.stations.load_limit;

      this.setState({ offset: this.state.offset + offset }, () =>
        this.props
          .dispatch(
            this.state.searchTerm
              ? this.props.searchStations(
                  this.state.searchTerm,
                  fetchingTerm,
                  this.state.offset
                )
              : this.props.getStations(fetchingTerm, this.state.offset)
          )
          .then(stations => {
            this.isFetching = false;

            const noStations = !stations || !stations.length;

            if (FETCH_TYPE.INITIAL_LOAD && noStations) {
              this.setState({ noStations: true, moreToLoad: false });
            } else if (!stations || !stations.length) {
              this.setState({ moreToLoad: false });
            } else if (
              stations &&
              stations.length &&
              stations.length % Config.stations.load_limit === 0
            ) {
              if (DomUtils.isInViewport(this.loadMoreElement))
                this.fetchStations(FETCH_TYPE.LOAD_MORE);
            } else {
              this.setState({ moreToLoad: false });
            }
          })
          .catch(() => (this.isFetching = false))
      );
    }
  }

  onScroll(e) {
    if (!this.isFetching) {
      window.requestAnimationFrame(this.fetchStations);
    }
    if (
      this.props.stations.length % Config.stations.load_limit !== 0 &&
      this.state.moreToLoad
    ) {
      this.setState({ moreToLoad: false });
    }
  }

  getBottomSection() {
    const { moreToLoad, noStations, searchTerm } = this.state;

    if (moreToLoad) {
      return (
        <div
          className="bottom-section"
          ref={ref => (this.loadMoreElement = ref)}
        >
          <span className="loader">
            <Loader />
          </span>
        </div>
      );
    } else if (noStations && (searchTerm || this.props.noStationsMsg)) {
      if (this.props.noStationsMsg)
        return (
          <div className="bottom-section text">{this.props.noStationsMsg}</div>
        );
      return (
        <div className="bottom-section text">
          {`No stations match your search: ${this.state.searchTerm}`}{" "}
        </div>
      );
    } else if (!moreToLoad) {
      return (
        <div className="bottom-section text">No more stations to load</div>
      );
    }
    return null;
  }

  render() {
    console.log("StationsView: ", this.props.stations);

    return (
      <div className="stations-view-container">
        <StationsList {...this.props} />
        {this.getBottomSection()}
      </div>
    );
  }
}

StationsView.defaultProps = {
  title: "",
  subTitle: "",
  fetchBy: "XOX",
  stations: [],
  getStations: () => {},
  searchStations: () => {},
  reset: null,
  withSearch: true,
  noStationsMsg: ""
};

const mapStateToProps = state => ({
  stations: state.country.array
});

export default connect(mapStateToProps)(StationsView);
