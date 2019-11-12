import React from "react";
import moment from "moment";

export default () => {
  const date = moment().format("dddd, MMMM Do YYYY");
  return (<div>Today's Date: <b>{date}</b></div>);
}