function con() {
    let fConvert = document.querySelector("#F-convert");
    let h1 = document.querySelector("h1");
    h1.innerHTML = `${fConvert.value}`;
  }
  
  let convert = document.querySelector("#F-convert");
  convert.addEventListener("click", con);
  
  function cCon() {
    let cConvert = document.querySelector("#C-convert");
    let h1 = document.querySelector("h1");
    h1.innerHTML = `${cConvert.value}`;
  }
  
  let converts = document.querySelector("#C-convert");
  converts.addEventListener("click", cCon);

let time = new Date();
console.log(time.getDay());
console.log(time.getMinutes())
let date = document.querySelector("#date");

let days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
let hours = time.getHours();
let mins = time.getMinutes();
let day = days[time.getDay()];
date.innerHTML = ` Sunny, ${day} ${hours}:${mins}`;



function allSearch(event) {
    event.preventDefault();
    let enterState = document.querySelector("#enter-state");
    let h2 = document.querySelector("h2");
    h2.innerHTML = `${enterState.value}`;
  }
  
  let search = document.querySelector("#all-state");
  search.addEventListener("submit", allSearch);
  