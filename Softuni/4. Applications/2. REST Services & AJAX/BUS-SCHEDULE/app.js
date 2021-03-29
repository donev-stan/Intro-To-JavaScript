function solve() {
    //closure
    const infoDiv = document.querySelector("#info");
    const departBtn = document.querySelector("#depart");
    const arriveBtn = document.querySelector("#arrive");

    const url = `https://judgetests.firebaseio.com/schedule/`;

    let stopID = "depot";

    function changeBtn(){
        if (departBtn.disabled) {
            departBtn.disabled = false;
            arriveBtn.disabled = true;
        } else {
            departBtn.disabled = true;
            arriveBtn.disabled = false;
        }
    }

    function depart() {
        const newURL = `https://judgetests.firebaseio.com/schedule/${stopID}.json`;
        fetch(newURL)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                
                stopID = data.next; // next stop
                stopName = data.name; // stop name

                infoDiv.textContent = `Next Stop: ${stopName}`;

            })
            .catch(error => console.log(error));
        
        changeBtn();
    }

    function arrive() {
        infoDiv.textContent = `Arriving at ${stopName}`;
        changeBtn();
    }

    return {
        depart,
        arrive,
    };
}

let result = solve();