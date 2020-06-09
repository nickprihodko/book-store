import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styled from "styled-components";

const Alert = ({ alerts }) => {
  if (alerts !== null && alerts.length > 0) {
    return alerts.map((alert) => (
      <AlertWrapper>
        <div key={alert.id} className={`alert alert--${alert.alertType}`}>
          {alert.msg}
        </div>
      </AlertWrapper>
    ));
  }
  return null;
};

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

const AlertWrapper = styled.div`
  .alert {
    margin-bottom: 10px;
    padding: 0 10px;
    height: 30px;

    line-height: 30px;
    color: #0d47a1;

    background-color: #bbdefb;
    border-radius: 4px;

    &--danger {
      color: #b71c1c;
      background-color: #ef9a9a;
    }
  }
`;

export default connect(mapStateToProps)(Alert);
