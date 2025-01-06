let inputCreateNumbers = document.getElementById("createNumbers");
let numbersBox = document.querySelector(".numbersBox")
let createButton = document.getElementById("createButton");
let newRandomNumber = document.getElementById("newNumber")
let newNumberBox = document.querySelector(".newNumberBox")
let newNumberBoxText = document.querySelector(".newNumberBoxText")
let removeButton = document.getElementById("removeButton")

createButton.addEventListener("click", function (eventObjekt) {
    let number = inputCreateNumbers.value;

    numbersBox.innerHTML = "";

    for (let i = 1; i <= number; i++) {
        let cell = document.createElement("div");
        cell.classList.add("numbersCell")
        cell.textContent = Math.floor(Math.random() * 100);

        numbersBox.appendChild(cell)
    }

})

newRandomNumber.addEventListener("click", function () {
    let cells = document.querySelectorAll(".numbersCell")

    let randomIndex = Math.floor(Math.random() * cells.length);
    let selectedNumber = cells[randomIndex].textContent;
    let selectedCell = cells[randomIndex]
    console.log(selectedNumber);
    newNumberBox.textContent = selectedNumber;

    for (let cell of cells) {
        if (cell.textContent === selectedNumber) {
            cell.classList.add("randomNumber");
        }
    }
})

removeButton.addEventListener("click", function () {
    let cells = document.querySelectorAll(".numbersCell");
    let selectedNumber = newNumberBox.textContent;
    console.log(cells)

    let count = 0;

    for (let cell of cells) {
        if (selectedNumber == cell.textContent) {
            count++
            cell.classList.add("numbersCellRemove")
            cell.textContent = "x"
            newNumberBoxText.textContent = `${selectedNumber} removed ${count} times`
        }
        if (selectedNumber == cell) {
            console.log("hej")
        }
    }


})