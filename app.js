const passedValue = document.getElementById('passed-value')
const saveValue = document.getElementById('save-el')
let counter = 0

function income() {
    counter++
    passedValue.innerText = counter
}

function outcome() {
    if (counter > 0) {
        counter--
        passedValue.innerText = counter
        if (counter === 0) {
            minusButton.disabled = true
        }
    }
}

function save() {
let countStr = counter + ' - ';
saveValue.textContent += countStr;
}

