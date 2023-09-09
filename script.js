document.addEventListener("DOMContentLoaded", function () {
  // Current Day of the Week
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

  // Current UTC Time
  const currentUTCTimeElement = document.querySelector(
    '[data-testid="currentUTCTime"]'
  );
  currentUTCTimeElement.textContent = `Current UTC Time: ${Date.now()} milliseconds`;
});
