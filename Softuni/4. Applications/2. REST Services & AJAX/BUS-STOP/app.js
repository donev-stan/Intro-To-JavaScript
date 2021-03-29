function getInfo() {
    const stopID = document.getElementById("stopId").value;
    const url = `https://judgetests.firebaseio.com/businfo/${stopID}.json`;

    const divStopName = document.getElementById("stopName");
    const ulBuses = document.getElementById("buses");

    // cleanup
    divStopName.innerText = "";
    while (ulBuses.firstChild) ulBuses.removeChild(ulBuses.lastChild);

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            divStopName.textContent = `${data.name}`;

            Object.entries(data.buses).forEach(([busNumber, arrivalTime]) => {
                let li = document.createElement("li");
                li.textContent = `Bus ${busNumber} arrives in ${arrivalTime} minutes`;
                ulBuses.appendChild(li);
            });

            console.log(data);
        })
        .catch((error) => {
            divStopName.textContent = `Sorry, no busses found!`;
        });
}
