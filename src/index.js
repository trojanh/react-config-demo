const startTime = new Date();
const updateTotalTimeSpent = () => {
  const currentTime = new Date();
  document.querySelector('#timeSpent').innerHTML = `${(currentTime - startTime) / 1000} Seconds`;
}

const updateTimeSpentRecursively = () => {
  updateTotalTimeSpent()
  setTimeout(updateTimeSpentRecursively, 500);
}
updateTimeSpentRecursively();