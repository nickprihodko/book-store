import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styled from "styled-components";

const Alert = ({ alerts }) => {
  if (alerts.length > 0) {
    return alerts.map((alert) => (
      <div key={alert.id}>
        <Message type={alert.alertType}>{alert.msg}</Message>
      </div>
    ));
  }
  return null;
};

const handleColorType = (type) => {
  switch (type) {
    case "danger":
      return "color: #b71c1c; background-color: #ef9a9a;";
    case "success":
      return "color: #1b5e20; background-color: #a5d6a7;";
    default:
      return "color: #0d47a1; background-color: #bbdefb;";
  }
};

const Message = styled.div`
  margin-bottom: 10px;
  padding: 0 10px;
  height: 30px;

  line-height: 30px;

  border-radius: 4px;

  ${({ type }) => handleColorType(type)};
`;

Message.propTypes = {
  type: PropTypes.string,
};

Alert.propTypes = {
  alerts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      msg: PropTypes.string,
      alertType: PropTypes.string,
    })
  ).isRequired,
};

const mapStateToProps = ({ alert }) => ({
  alerts: alert,
});

export default connect(mapStateToProps)(Alert);
