import moment from "moment";

const showDate = () => {
  document.querySelector('#date').innerHTML = moment().format("dddd, MMMM Do YYYY");
}