const currDay = document.querySelector("#current-day");
const currTime = document.querySelector("#current-time");

const dayArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function updateTime() {
  const today = new Date();
  const day = today.getDay();
  const hours = today.getUTCHours();
  const minutes = today.getUTCMinutes();
  const seconds = today.getUTCSeconds();
  const milliseconds = today.getUTCMilliseconds();

  const dayString = dayArray[day];
  const time = hours.toString().padStart(2, '0') + ":" + 
               minutes.toString().padStart(2, '0') + ":" + 
               seconds.toString().padStart(2, '0') + ":" + 
               milliseconds.toString().padStart(3, '0');

  currDay.innerText = dayString;
  currDay.setAttribute("data-test-id", dayString);

  currTime.innerText = time;
  currTime.setAttribute("data-test-id", time);
}

// Update the time every 100 milliseconds
setInterval(updateTime, 100);

// Initial call to set the time immediately
updateTime();
