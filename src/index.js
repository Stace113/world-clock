let bristolElement = document.querySelector("#bristol");
let bristolDateElement = bristolElement.querySelector(".date");
let bristolTimeElement = bristolElement.querySelector(".time");

bristolDateElement.innerHTML = moment().format("dddd");
