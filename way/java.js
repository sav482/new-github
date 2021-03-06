function currentTemp(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temp").innerHTML = Math.round(
    celsiusTemp
  );
  document.querySelector("#current").innerHTML = response.data.weather[0].main;
  document.querySelector("#humid").innerHTML = response.data.main.humidity;
  document.querySelector("#press").innerHTML = response.data.main.pressure;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  celsiusTemp = response.data.main.temp
  src.setAttribute("src",`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
}

let time = new Date();
console.log(time.getDay());
console.log(time.getMinutes());
let date = document.querySelector("#date");

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let hours = time.getHours();
let mins = time.getMinutes();
let day = days[time.getDay()];
date.innerHTML = `${day} ${hours}:${mins}`;
function updateTime() {
  let mins = date.getMinutes();
  if (mins > 10) {
    return "0" + mins;
  } else {
    return mins;
  }
}
function getcurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

function searchLocation(position) {
  let apiKey = "e40877bf98592d338d0e895d3b2c6eba";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(currentTemp);
}
function searching(city) {
  let apiKey = "e40877bf98592d338d0e895d3b2c6eba";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(currentTemp);
}

function allSearch(event) {
  event.preventDefault();
  let city = document.querySelector("#enter-state").value;
  searching(city);
}
function  showFahrenheitTemp(event){
  event.preventDefault();
  let fahrenheitTemp = (celsiusTemp * 9) / 5 + 32;
  let tempElement = document.querySelector("#temp")
  tempElement.innerHTML = Math.round(fahrenheitTemp);
  }
  function showcelsiusTemp(event){
    event.preventDefault()
   let tempElement = document.querySelector("#temp")
   tempElement.innerHTML = Math.round (celsiusTemp);
  }

  let celsiusTemp = null;



let search = document.querySelector("#all-state");
search.addEventListener("submit", allSearch);
let loc = document.querySelector("#location");
loc.addEventListener("click", getcurrentLocation);
searching("new york");

let fahrenheitLink = document.querySelector("#fahrenheit-link")
fahrenheitLink.addEventListener("click", showFahrenheitTemp)

let celsiusLink = document.querySelector("#celsius-link")
celsiusLink.addEventListener("click", showcelsiusTemp)
