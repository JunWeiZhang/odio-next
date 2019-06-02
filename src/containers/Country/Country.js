import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

/* Component */
import Header from "@components/Header/Header";
import StationsView from "@containers/StationsView/StationsView";

/* Actions */
import * as CountryActions from "@redux/reducers/country/actions";

/* Constants */
import Routes from "@constants/routes";

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

    this.countryName = this.props.match.params.country;
  }

  // componentDidMount() {
  //   if (!this.countryName) return window.goToRoute(Routes.HOME);
  //   this.props.dispatch(CountryActions.getStations(this.countryName));
  // }

  // componentWillUnmount() {
  //   this.props.dispatch(CountryActions.setStations([]));
  // }

  render() {
    console.log("Country this.props.stations: ", this.props.stations);
    return (
      <div className="country-container">
        <Header title={this.countryName} />
        <StationsView
          stations={this.props.stations}
          title={this.countryName}
          subTitle={`Listen to radio stations in ${this.countryName}`}
          fetchBy={this.countryName}
          {...CountryActions}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  stations: state.country.stations
});

export default connect(mapStateToProps)(Country);
