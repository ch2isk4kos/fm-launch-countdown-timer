const countdown = () => {
  const target = new Date("January 1, 2022 00:00:00").getTime(); // 1641013200000
  const start = new Date().getTime(); // 1623987088745
  const duration = target - start; // 17026111255

  const sec = 1000; // 1000
  const min = sec * 60; // 60000
  const hr = min * 60; // 3600000
  const d = hr * 24; // 86400000

  let days = Math.floor(duration / d); // 197
  let hours = Math.floor((duration % d) / hr); // 1
  let minutes = Math.floor((duration % hr) / min); // 28
  let seconds = Math.floor((duration % min) / sec); // 31

  days = days < 10 ? "0" + days : days;
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
};
setInterval(countdown, 1000);
