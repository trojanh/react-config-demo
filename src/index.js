import React from "react";
import ReactDOM from "react-dom";

import ShowDate from "./ShowDate";
import TimeSpent from "./TimeSpent";

ReactDOM.render(
  <div>
    <h4>This page shows total time you have spent on this page</h4>
    <TimeSpent />
    <ShowDate />
  </div>,
  document.getElementById('app')
);