function updateTime() {
    // Bristol
    let bristolElement = document.querySelector("#bristol");
    let bristolDateElement = bristolElement.querySelector(".date");
    let bristolTimeElement = bristolElement.querySelector(".time");
    let bristolTime = moment().tz("Europe/London");

    bristolDateElement.innerHTML = bristolTime.format("MMMM Do YYYY");
    bristolTimeElement.innerHTML = bristolTime.format(
        "HH:mm:ss [<small>]A[</small>]"
    );

    // Amsterdam
    let amsterdamElement = document.querySelector("#amsterdam");
    let amsterdamDateElement = amsterdamElement.querySelector(".date");
    let amsterdamTimeElement = amsterdamElement.querySelector(".time");
    let amsterdamTime = moment().tz("Europe/Amsterdam");

    amsterdamDateElement.innerHTML = amsterdamTime.format("MMMM Do YYYY");
    amsterdamTimeElement.innerHTML = amsterdamTime.format(
        "HH:mm:ss [<small>]A[</small>]"
    );

    // zürich
    let zürichElement = document.querySelector("#zürich");
    let zürichDateElement = zürichElement.querySelector(".date");
    let zürichTimeElement = zürichElement.querySelector(".time");
    let zürichTime = moment().tz("Europe/Zurich");

    zürichDateElement.innerHTML = zürichTime.format("MMMM Do YYYY");
    zürichTimeElement.innerHTML = zürichTime.format(
        "HH:mm:ss [<small>]A[</small>]"
    );

    // Bangkok
    let bangkokElement = document.querySelector("#bangkok");
    let bangkokDateElement = bangkokElement.querySelector(".date");
    let bangkokTimeElement = bangkokElement.querySelector(".time");
    let bangkokTime = moment().tz("Asia/Bangkok");

    bangkokDateElement.innerHTML = bangkokTime.format("MMMM Do YYYY");
    bangkokTimeElement.innerHTML = bangkokTime.format(
        "HH:mm:ss [<small>]A[</small>]"
    );
}

updateTime();
setInterval(updateTime);
