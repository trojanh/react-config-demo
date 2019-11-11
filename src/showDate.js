const showDate = () => {
  document.querySelector('#date').innerHTML = moment().format("dddd, MMMM Do YYYY");
}
showDate();