import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

/* Actions */
import * as PlayerActions from "@redux/reducers/player/actions";

const Station = props => {
  const handleClick = () => {
    props.dispatch(PlayerActions.setStation(props.station));
  };

  return (
    <div className="station-item" onClick={handleClick}>
      {props.station.name}
    </div>
  );
};

Station.propTypes = {
  name: PropTypes.string.isRequired,
  station: PropTypes.shape({
    name: PropTypes.string
  })
};

export default connect()(Station);
