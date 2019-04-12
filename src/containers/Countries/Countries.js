import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

/* Components */
import CountryItem from "./CountryItem/CountryItem";
import Header from "@components/Header/Header";

/* Actions */
import * as CountriesActions from "@redux/reducers/countries/actions";

/* Constants */
import Routes from "@constants/routes";

import "./Countries.scss";

class Countries extends Component {
  static propTypes = {
    countries: PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);

    this.getContent = this.getContent.bind(this);
  }

  componentDidMount() {
    if (!this.props.countries.length)
      this.props.dispatch(CountriesActions.getCountries());
  }

  handleCountryItemClick(country) {
    window.goToRoute(`${Routes.COUNTRY}/${country}`);
  }

  getContent() {
    return this.props.countries.map(e => (
      <CountryItem key={e.name} {...e} onClick={this.handleCountryItemClick} />
    ));
  }

  render() {
    return (
      <div className="countries-container">
        <Header title="Countries" />
        <div className="container countries">{this.getContent()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  countries: state.countries.array
});

export default connect(mapStateToProps)(Countries);
