const countdownTimer = () => {
  const futureDate = new Date("Dec 28, 2021 00:00:00").getTime();

  const currentDate = new Date().getTime();

  const dateGap = futureDate - currentDate;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const dayTime = Math.floor(dateGap / day);
  const hourTime = Math.floor((dateGap % day) / hour);
  const minuteTime = Math.floor((dateGap % hour) / minute);
  const secondTime = Math.floor((dateGap % minute) / second);

  document.querySelector(".day-time").innerHTML = dayTime;
  document.querySelector(".hour-time").innerHTML = hourTime;
  document.querySelector(".minute-time").innerHTML = minuteTime;
  document.querySelector(".second-time").innerHTML = secondTime;

  if (dateGap < 0) {
    document.querySelector("h1").innerHTML = "We are open now";
    document.querySelector(".countdown").style.display = "none";
  }
};

setInterval(countdownTimer, 1000);
