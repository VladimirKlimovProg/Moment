const time = document.getElementById("time"),
  greeting = document.getElementById("greeting"),
  name = document.getElementById("name"),
  focus = document.getElementById("focus");

const showAmPm = false;

const showTime = () => {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  const amPm = hour >= 12 ? "PM" : "AM";

  // hour = hour % 12 || 12;

  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec
  )}
    ${showAmPm ? amPm : ""}`;

  setTimeout(showTime, 1000);
};

const addZero = n => {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
};

const setBgGreet = () => {
  let today = new Date(),
    hour = today.getHours();

  if (hour < 12) {
    document.body.style.backgroundImage = "url('../img/morning.jpg')";
    greeting.textContent = "Доброе утро";
  } else if (hour < 18) {
    document.body.style.backgroundImage = "url('../img/afternoon.jpg')";
    greeting.textContent = "Добрый день";
  } else {
    document.body.style.backgroundImage = "url('../img/night.jpg')";
    greeting.textContent = "Добрый вечер";
    document.body.style.color = "white";
  }
};

const getName = () => {
  if (localStorage.getItem("name") === null) {
    name.textContent = "[Введите имя]";
  } else {
    name.textContent = localStorage.getItem("name");
  }
};

const setName = e => {
  if (e.type === "keypress") {
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("name", e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem("name", e.target.innerText);
  }
};

const getFocus = () => {
  if (localStorage.getItem("focus") === null) {
    focus.textContent = "[Введите цель]";
  } else {
    focus.textContent = localStorage.getItem("focus");
  }
};

const setFocus = e => {
  if (e.type === "keypress") {
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("focus", e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem("focus", e.target.innerText);
  }
};

name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);
focus.addEventListener("keypress", setFocus);
focus.addEventListener("blur", setFocus);

showTime();
setBgGreet();
getName();
getFocus();
