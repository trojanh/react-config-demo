const startTime = new Date();
const updateTotalTimeSpent = () => {
  document.querySelector('#timeSpent').innerHTML = moment(startTime).fromNow(true);
}

const updateTimeSpentRecursively = () => {
  updateTotalTimeSpent()
  setTimeout(updateTimeSpentRecursively, 500);
}
updateTimeSpentRecursively();