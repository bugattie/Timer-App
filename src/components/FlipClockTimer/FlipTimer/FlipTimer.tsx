import React from "react";
import FlipUnitContainer from "./../FlipClockComponents/FlipUnitContainer/FlipUnitContainer";
import "./../FlipTimer.css";

type FlipTimerStateProps = {
  hours: number;
  hoursShuffle: boolean;
  minutes: number;
  minutesShuffle: boolean;
  seconds: number;
  secondsShuffle: boolean;
};

type FlipTimerProps = {
  minutes: number;
  seconds: number;
};

// class component
class FlipTimer extends React.Component<FlipTimerProps, FlipTimerStateProps> {
  timerID: ReturnType<typeof setInterval>;
  timerMinutes: number;
  timerSeconds: number;

  constructor(props: any) {
    super(props);
    this.state = {
      hours: 0,
      hoursShuffle: true,
      minutes: 0,
      minutesShuffle: true,
      seconds: 0,
      secondsShuffle: true,
    };
    this.timerID = props;
    this.timerMinutes = this.props.minutes;
    this.timerSeconds = this.props.seconds;
    console.log(this.timerSeconds);

    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.updateTime(), 50);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  updateTime() {
    // get new date
    const time = new Date();
    // set time units
    const hours = time.getHours();
    const minutes = this.props.minutes;
    const seconds = this.props.seconds;

    // on hour chanage, update hours and shuffle state
    if (hours !== this.state.hours) {
      const hoursShuffle = !this.state.hoursShuffle;
      this.setState({
        hours,
        hoursShuffle,
      });
    }
    // on minute chanage, update minutes and shuffle state
    if (minutes !== this.state.minutes) {
      const minutesShuffle = !this.state.minutesShuffle;
      this.setState({
        minutes,
        minutesShuffle,
      });
    }
    // on second chanage, update seconds and shuffle state
    if (seconds !== this.state.seconds) {
      const secondsShuffle = !this.state.secondsShuffle;
      this.setState({
        seconds,
        secondsShuffle,
      });
    }
  }

  render() {
    // state object destructuring
    const {
      //hours,
      minutes,
      seconds,
      //hoursShuffle,
      minutesShuffle,
      secondsShuffle,
    } = this.state;

    return (
      <div className={"flipClock"}>
        <FlipUnitContainer
          unit={"minutes"}
          digit={minutes}
          shuffle={minutesShuffle}
        />
        <FlipUnitContainer
          unit={"seconds"}
          digit={seconds}
          shuffle={secondsShuffle}
        />
      </div>
    );
  }
}

export default FlipTimer;
