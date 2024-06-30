function setClock() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const secondHand = document.getElementById("second-hand");
  const minuteHand = document.getElementById("minute-hand");
  const hourHand = document.getElementById("hour-hand");

  const secondDeg = (seconds / 60) * 360;
  const minuteDeg = ((minutes * 60 + seconds) / 3600) * 360;
  const hourDeg = ((hours % 12) / 12) * 360 + (minutes / 60) * 30;

  secondHand.style.transform = `rotate(${secondDeg}deg)`;
  minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
  hourHand.style.transform = `rotate(${hourDeg}deg)`;
}

setInterval(setClock, 1000);
