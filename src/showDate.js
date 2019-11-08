const showDate = () => {
  const date = new Date();
  document.querySelector('#date').innerHTML = `${date.getDate()} / ${date.getMonth()} / ${date.getDate()}`;
}
showDate();