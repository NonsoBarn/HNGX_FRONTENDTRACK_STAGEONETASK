document.addEventListener("DOMContentLoaded", function () {
  // Current Day of the Week
  function updateCurrentDay() {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const currentDayIndex = new Date().getDay();
    const currentDayElement = document.querySelector(
      '[data-testid="currentDayOfTheWeek"]'
    );
    currentDayElement.textContent = daysOfWeek[currentDayIndex];
  }

  // Current UTC Time
  function updateCurrentUTCTime() {
    const currentUTCTimeElement = document.querySelector(
      '[data-testid="currentUTCTime"]'
    );
    currentUTCTimeElement.textContent = `Current UTC Time: ${Date.now()} milliseconds`;
  }

  updateCurrentDay();
  updateCurrentUTCTime();
  setInterval(updateCurrentDay, 60000); // Update every minute
  setInterval(updateCurrentUTCTime, 1000); // Update every second
});
