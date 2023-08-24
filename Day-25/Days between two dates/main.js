
function daysBetween(startDate, endDate) {

    let millisecondsPerDay = 1000 * 60 * 60 * 24;

    let startDateUTC = Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());

    let endDateUTC = Date.UTC(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());

    return Math.floor((endDateUTC - startDateUTC) / millisecondsPerDay);
}

document.getElementById("btn").addEventListener("click", function() {

    let startDate = new Date(document.getElementById("startdate").value);

    let endDate = new Date(document.getElementById("enddate").value);

    let output = document.getElementById("days");

// Get how much days is between these dates

    let days = daysBetween(startDate, endDate);

    if (days) {

        output.classList.remove("text-danger");
        output.innerHTML = `${days} days`;
    } else {
        output.classList.add("text-danger");
        output.innerHTML = 'Please! enter a correct date';
    }

}, false);


