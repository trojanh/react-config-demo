import React from "react";
import moment from "moment";

class TimeSpent extends React.Component {
  state = {
    startTime: new Date(),
    timeSpent: ""
  }
  componentDidMount() {
    this.updateTimeSpentRecursively();
  }
  updateTotalTimeSpent = () => {
    console.log({timeSpent: moment(this.state.startTime).fromNow(true)})
    this.setState({ timeSpent: moment(this.state.startTime).fromNow(true) });
  }
  updateTimeSpentRecursively = () => {
    const time = this.updateTotalTimeSpent();
    setTimeout(this.updateTimeSpentRecursively, 500);
  }

  render() {
     return (
       <div>
         <span>Total time spent: <b>{this.state.timeSpent}</b></span>
       </div>
     );
  }
}

export default TimeSpent;