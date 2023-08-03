// const thankYouSection = document.querySelector("#thank-you-section")

const cardMonthInput = document.querySelector("#card-month")
const cardYearInput = document.querySelector("#card-year")
const monthErrMsg = document.querySelector("#month-err-msg")
const cardFormBtn = document.querySelector("#card-form-btn")
// const thankYouBtn = document.querySelector("#thank-you-btn")
const cardForm = document.querySelector("#credit-card-form")
const cardFormArr = [...cardForm]

//clears all inputs
let clearDisplay = () => {
	cardFormArr.forEach((input) => {
		if (input.nodeName === "INPUT") {
			input.value = ""
		}
	})
}

clearDisplay()

// The month error message has to be rendered separately because it shows a single error message that applies to both the month and the year input.
// Used directly in html attributes onblur, onfocus and oninput
const renderMonthErrMsg = () => {
	if (!cardYearInput.validity.valid || !cardMonthInput.validity.valid) {
		monthErrMsg.classList.remove("hidden")
	} else {
		monthErrMsg.classList.add("hidden")
	}
}

cardFormArr.forEach((input) => {
	input.addEventListener("blur", (e) => {
		if (!e.target.validity.valid) {
			e.target.classList.add("border-error")
			e.target.classList.remove("border-pri-light")
			e.target.classList.add("blur-err-msg")
		} else {
			e.target.classList.remove("border-error")
			e.target.classList.add("border-pri-light")
			e.target.classList.remove("blur-err-msg")
		}
	})
})

cardFormArr.forEach((input) => {
	input.addEventListener("input", (e) => {
		//implements a regex test to ensure only numbers can be input
		let cardNumRegex = /[\d\s]$/
		let maskedNum = maskCreditCard(e.target.value)
		if (!cardNumRegex.test(e.target.value)) {
			let length = e.target.value.length
			let newString = e.target.value.substring(0, length - 1)
			e.target.value = newString
		} else {
			e.target.value = maskedNum
		}
	})
})

const maskCreditCard = (card) => {
	return card
		.replaceAll(" ", "")
		.replace(/.(?=.{4})/g, "*")
		.match(/.{1,4}/g)
		.join(" ")
}
