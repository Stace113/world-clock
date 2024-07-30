function updateTime() {
    // Bristol
    let bristolElement = document.querySelector("#bristol");
    if (bristolElement) {
        let bristolDateElement = bristolElement.querySelector(".date");
        let bristolTimeElement = bristolElement.querySelector(".time");
        let bristolTime = moment().tz("Europe/London");

        bristolDateElement.innerHTML = bristolTime.format("dddd Do MMMM YYYY");
        bristolTimeElement.innerHTML = bristolTime.format(
            "HH:mm:ss [<small>]A[</small>]"
        );
    }

    // Amsterdam
    let amsterdamElement = document.querySelector("#amsterdam");
    if (amsterdamElement) {
        let amsterdamDateElement = amsterdamElement.querySelector(".date");
        let amsterdamTimeElement = amsterdamElement.querySelector(".time");
        let amsterdamTime = moment().tz("Europe/Amsterdam");

        amsterdamDateElement.innerHTML =
            amsterdamTime.format("dddd Do MMMM YYYY");
        amsterdamTimeElement.innerHTML = amsterdamTime.format(
            "HH:mm:ss [<small>]A[</small>]"
        );
    }

    // Zürich
    let zürichElement = document.querySelector("#zürich");
    if (zürichElement) {
        let zürichDateElement = zürichElement.querySelector(".date");
        let zürichTimeElement = zürichElement.querySelector(".time");
        let zürichTime = moment().tz("Europe/Zurich");

        zürichDateElement.innerHTML = zürichTime.format("dddd Do MMMM YYYY");
        zürichTimeElement.innerHTML = zürichTime.format(
            "HH:mm:ss [<small>]A[</small>]"
        );
    }

    // Bangkok
    let bangkokElement = document.querySelector("#bangkok");
    if (bangkokElement) {
        let bangkokDateElement = bangkokElement.querySelector(".date");
        let bangkokTimeElement = bangkokElement.querySelector(".time");
        let bangkokTime = moment().tz("Asia/Bangkok");

        bangkokDateElement.innerHTML = bangkokTime.format("dddd Do MMMM YYYY");
        bangkokTimeElement.innerHTML = bangkokTime.format(
            "HH:mm:ss [<small>]A[</small>]"
        );
    }
}

updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
        cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
        <div class="city">
                    <div>
                        <h2>${cityName}</h2>
                        <div class="date">${cityTime.format(
                            "dddd Do MMMM YYYY"
                        )}</div>
                    </div>
                    <div class="time">${cityTime.format(
                        "HH:mm:ss"
                    )} <small>${cityTime.format("A")}</small></div>
                </div>
    `;
}

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
