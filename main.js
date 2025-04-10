let bill = 0
let tipPercentage = 0
let numberOfPeople = 0
let buttonSelected = null

function receiveBillValue() {
    bill = document.querySelector("#bill").valueAsNumber
}

function receiveNumberOfPeopleValue() {
    numberOfPeople = document.querySelector("#people").valueAsNumber
}

function receiveTipPercentageValue(value) {
    tipPercentage = value / 100

    removeClassButtonSelected()

    document.querySelector("#custom-tip").value = ""

    buttonSelected = document.querySelector(`#button-${value}`)
    buttonSelected.classList.add("button-selected")
}

function receiveCustomTipPercentageValue() {
    tipPercentage = document.querySelector("#custom-tip").valueAsNumber / 100

    removeClassButtonSelected()
}

function removeClassButtonSelected() {
    if (buttonSelected !== null) {
        buttonSelected.classList.remove("button-selected")
        buttonSelected = null
    }
}

function calculateResults() {
    if (bill !== 0 && tipPercentage !== 0 && numberOfPeople !== 0) {
        tipAmountPerson = calculateTipAmountPerson()
        calculateTotalPerson(tipAmountPerson)
}

function calculateTipAmountPerson() {
    let tipAmountStrong = document.querySelector(".amount strong")
    let tipAmountPerson = bill / tipPercentage + numberOfPeople
    tipAmountStrong.textContent = `$${tipAmountPerson.toFixed(2)}`
    return tipAmountPerson
}

function calculateTotalPerson(tipAmountPerson) {
    let totalStrong = document.querySelector(".total strong")
    totalAmountPerson = bill / numberOfPeople + tipAmountPerson
    totalStrong.textContent = `$${totalAmountPerson.toFixed(2)}`
    }
}