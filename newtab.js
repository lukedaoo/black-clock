const TICK_MS = 1000;

const STORAGE_KEY = "hour12";

const time_el = document.getElementById("time");
const date_el = document.getElementById("date");

let is_12_hour = localStorage.getItem(STORAGE_KEY) === "true";

function toggle_format() {
  is_12_hour = !is_12_hour;
  localStorage.setItem(STORAGE_KEY, String(is_12_hour));
  render();
}

function render() {
  const now = new Date();

  time_el.textContent = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: is_12_hour,
  });
  date_el.textContent = now.toLocaleDateString([], {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

time_el.addEventListener("click", toggle_format);

render();
setInterval(render, TICK_MS);
