let inputNumber = document.querySelector("#random");
let button = document.querySelector("#buttonUse");
let span = document.querySelector("#execution");


function randomInt() {
    let value = Number(inputNumber.value)
    let random = Math.floor(Math.random() * Math.floor(10))
    if (value === random) {
        span.textContent = "Вы выиграли в казино!"
    }
	else {
        span.textContent = "Увы, ваша ставка не сыграла"
    }
    }

button.addEventListener("click", randomInt);


