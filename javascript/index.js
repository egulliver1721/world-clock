function updateTime() {
  //perth//
  function updatePerthTime() {
    let perthElement = document.querySelector("#perth");
    let perthDateElement = perthElement.querySelector(".date");
    let perthTimeElement = perthElement.querySelector(".time");
    let perthTime = moment().tz("Australia/Perth");
    perthDateElement.innerHTML = moment().format("MMMM Do YYYY");
    perthTimeElement.innerHTML = `${perthTime.format(
      "h:mm:ss [<small>]A[</small>]"
    )}`;
  }
  setInterval(updatePerthTime, 1000);
  //auckland//
  function updateAucklandTime() {
    let aucklandElement = document.querySelector("#auckland");
    let aucklandDateElement = aucklandElement.querySelector(".date");
    let aucklandTimeElement = aucklandElement.querySelector(".time");
    let aucklandTime = moment().tz("Pacific/Auckland");
    aucklandDateElement.innerHTML = moment().format("MMMM Do YYYY");
    aucklandTimeElement.innerHTML = `${aucklandTime.format(
      "h:mm:ss [<small>]A[</small>]"
    )}`;
  }
  setInterval(updateAucklandTime, 1000);
  //london//

  function updateLondonTime() {
    let londonElement = document.querySelector("#london");
    let londonDateElement = londonElement.querySelector(".date");
    let londonTimeElement = londonElement.querySelector(".time");
    let londonTime = moment().tz("Europe/London");
    londonDateElement.innerHTML = moment().format("MMMM Do YYYY");
    londonTimeElement.innerHTML = `${londonTime.format(
      "h:mm:ss [<small>]A[</small>]"
    )}`;
  }
  setInterval(updateLondonTime, 1000);
}

updateTime();
