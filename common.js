let inputDOM = document.getElementById("createNumbers");
let numbersBox = document.querySelector(".numbersBox")
let createButton = document.getElementById("createButton");
let newRandomNumber

createButton.addEventListener("click", function (eventObjekt) {
    let number = inputDOM.value;

    numbersBox.innerHTML = "";

    for (let i = 1; i <= number; i++) {
        let cell = document.createElement("div");
        cell.classList.add("numbersCell")
        cell.textContent = Math.floor(Math.random() * 100);

        numbersBox.appendChild(cell)
    }

})