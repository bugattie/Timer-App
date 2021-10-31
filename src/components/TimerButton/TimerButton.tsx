import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";

const TimerButton = ({ buttonAction, buttonValue }: any) => (
  <div className="button-container" onClick={() => buttonAction()}>
    <Button className="button" variant="contained" color="primary">
      {buttonValue}
    </Button>
  </div>
);

TimerButton.propTypes = {
  buttonAction: PropTypes.func.isRequired,
  buttonValue: PropTypes.string.isRequired,
};

export default TimerButton;
