const countdown = () => {
  // Specify the date and time we are counting down to.
  const countDate = new Date("June 7, 2022 3:10 PM").getTime();
  const now = new Date().getTime();
  const remainingTime = countDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const textDay = Math.floor(remainingTime / day);
  const textHour = Math.floor((remainingTime % day) / hour);
  const textMinute = Math.floor((remainingTime % hour) / minute);
  const textSecond = Math.floor((remainingTime % minute) / second);

  document.querySelector(".day8th").innerText = textDay > 0 ? textDay : 0;
  document.querySelector(".hour8th").innerText = textHour > 0 ? textHour : 0;
  document.querySelector(".minute8th").innerText = textMinute > 0 ? textMinute : 0;
  document.querySelector(".second8th").innerText = textSecond > 0 ? textSecond : 0;
};

// should use 500 as setInterval won't always run on time.
setInterval(countdown, 500);
