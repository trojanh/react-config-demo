import moment from "moment";

export default () => {
  document.querySelector('#date').innerHTML = moment().format("dddd, MMMM Do YYYY");
}