import React, { Component } from "react";
import PropTypes from "prop-types";

/* Component */
import Header from "@components/Header/Header";
import Stations from "@containers/Stations/Stations";

/* Actions */
import * as CountryActions from "@redux/reducers/country/actions";

/* Constants */
import Routes from "@constants/routes";

import { connect } from "react-redux";
class Country extends Component {
  static propTypes = {
    stations: PropTypes.array.isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        country: PropTypes.string.isRequired
      })
    })
  };

  constructor(props) {
    super(props);

    this.state = {
      country: this.props.match.params.country
    };
  }

  componentDidMount() {
    if (!this.state.country) return window.goToRoute(Routes.HOME);
    this.props.dispatch(CountryActions.getStations(this.state.country));
  }

  componentWillUnmount() {
    this.props.dispatch(CountryActions.setStations([]));
  }

  render() {
    return (
      <div className="country-container">
        <Header title={this.state.country} />
        <Stations stations={this.props.stations} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  stations: state.country.array
});

export default connect(mapStateToProps)(Country);
