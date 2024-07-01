window.onload = function() {
    updateTime();
    updateDay();
    setInterval(updateTime, 1000); // Update time every second
};

function updateTime() {
    const now = new Date();
    const hours = String(now.getUTCHours()).padStart(2, '0');
    const minutes = String(now.getUTCMinutes()).padStart(2, '0');
    const seconds = String(now.getUTCSeconds()).padStart(2, '0');
    const utcTime = `${hours}:${minutes}:${seconds}`;
    document.getElementById('current-time').innerText = utcTime;
}

function updateDay() {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const now = new Date();
    const currentDay = days[now.getUTCDay()];
    document.getElementById('current-day').innerText = currentDay;
}
