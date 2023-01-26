let fact = document.getElementById("fact");
let userInput = document.getElementById("userInput");
let spinner = document.getElementById("spinner");

function dispalyResult(event) {
    if (event.key === "Enter") {


        let enterVal = userInput.value;
        let url = "https://apis.ccbp.in/numbers-fact?number=" + enterVal;
        let option = {
            method: "GET"
        }
        fetch(url, option)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsondata) {
                let a = jsondata;
                let jsonDa = JSON.stringify(a);
                fact.textContent = jsonDa;
            });
    }
}



userInput.addEventListener("keydown", dispalyResult);