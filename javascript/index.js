function updateTime() {
  //perth//
  function updatePerthTime() {
    let perthElement = document.querySelector("#perth");
    if (perthElement) {
      let perthDateElement = perthElement.querySelector(".date");
      let perthTimeElement = perthElement.querySelector(".time");
      let perthTime = moment().tz("Australia/Perth");
      perthDateElement.innerHTML = moment().format("MMMM Do YYYY");
      perthTimeElement.innerHTML = `${perthTime.format(
        "h:mm:ss [<small>]A[</small>]"
      )}`;
    }
  }
  setInterval(updatePerthTime, 1000);
  //auckland//
  function updateAucklandTime() {
    let aucklandElement = document.querySelector("#auckland");
    if (aucklandElement) {
      let aucklandDateElement = aucklandElement.querySelector(".date");
      let aucklandTimeElement = aucklandElement.querySelector(".time");
      let aucklandTime = moment().tz("Pacific/Auckland");
      aucklandDateElement.innerHTML = moment().format("MMMM Do YYYY");
      aucklandTimeElement.innerHTML = `${aucklandTime.format(
        "h:mm:ss [<small>]A[</small>]"
      )}`;
    }
  }
  setInterval(updateAucklandTime, 1000);
  //london//

  function updateLondonTime() {
    let londonElement = document.querySelector("#london");
    if (londonElement) {
      let londonDateElement = londonElement.querySelector(".date");
      let londonTimeElement = londonElement.querySelector(".time");
      let londonTime = moment().tz("Europe/London");
      londonDateElement.innerHTML = moment().format("MMMM Do YYYY");
      londonTimeElement.innerHTML = `${londonTime.format(
        "h:mm:ss [<small>]A[</small>]"
      )}`;
    }
  }
  setInterval(updateLondonTime, 1000);
}

updateTime();

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
          <div class="city-name">
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )} <small>   ${cityTime.format("A")}</small>            
            </div>
          
             
        </div>
        <a href="https://willowy-halva-1bcb0d.netlify.app/" class="allCities">All cities</a>
        `;
}

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);
