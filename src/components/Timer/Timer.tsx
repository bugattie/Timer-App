import React from "react";
import TimerButton from "../TimerButton/TimerButton";
import { Typography } from "@material-ui/core";

import FlipTimer from "../FlipClockTimer/FlipTimer/FlipTimer";

type timerStateType = {
  minutes: number;
  seconds: number;
  isOn: boolean;
};

class Timer extends React.Component<{}, timerStateType> {
  myInterval: ReturnType<typeof setInterval>;

  constructor(props: any) {
    super(props);
    this.state = {
      minutes: 10,
      seconds: 0,
      isOn: false,
    };
    this.myInterval = props;
    this.startTimer = this.startTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }

  startTimer() {
    if (this.state.isOn === true) {
      return;
    }
    this.myInterval = setInterval(() => {
      const { seconds, minutes } = this.state;

      if (seconds > 0) {
        this.setState(({ seconds }) => ({
          seconds: seconds - 1,
        }));
      }
      if (seconds === 0) {
        if (minutes === 0) {
          alert(`Time's Up`);
          this.resetTimer();
          clearInterval(this.myInterval);
        } else {
          this.setState(({ minutes }) => ({
            minutes: minutes - 1,
            seconds: 59,
          }));
        }
      }
    }, 1000);
    this.setState({ isOn: true });
  }

  stopTimer = () => {
    console.log("Stoping timer.");
    clearInterval(this.myInterval);
    this.setState({ isOn: false });
  };

  resetTimer() {
    console.log("Resetting timer.");
    this.stopTimer();
    this.setState({
      minutes: 10,
      seconds: 0,
    });
  }
  render = () => {
    return (
      <div>
        <Typography variant="h4" gutterBottom className="header__heading">
          TIMER APP
        </Typography>
        {/* <div className="time-display">
          {this.state.minutes}:{this.state.seconds < 10 ? `0${this.state.seconds}` : this.state.seconds}
        </div>    */}

        <FlipTimer minutes={this.state.minutes} seconds={this.state.seconds} />

        <div className="timer-button-container">
          <TimerButton buttonAction={this.startTimer} buttonValue={"Start"} />
          <TimerButton buttonAction={this.stopTimer} buttonValue={"Stop"} />
          <TimerButton buttonAction={this.resetTimer} buttonValue={"Reset"} />
        </div>
      </div>
    );
  };
}

export default Timer;
