const countFiles = document.querySelector('.count-files')

const choiceFiles = document.querySelector('.choice-button')

const fileInput = document.querySelector('#file')

const inputFileButton = document.querySelector('.input__file-button')

const inputs = document.querySelectorAll('.input input')

const checkBoxes = document.querySelectorAll('.custom-checkbox')

const checkBox = document.querySelector('.sub-data ul')

const submitForm = document.querySelector('#submit__form')

const textArea = document.querySelector('textarea')

const emailInput = document.querySelector('#email-input')

const emailInputValue = document.querySelector('#email-input-value')

const inputTel = document.querySelector('#input-tel')

const inputTelValue = document.querySelector('#input-tel-value')

countFiles.addEventListener('click', event => {
	event.preventDefault()
})

fileInput.addEventListener('change', file => {
	if (fileInput.value !== ''){
		countFiles.classList.add('valid')
		choiceFiles.classList.add('valid')
		choiceFiles.innerText = `Удалить файл`
		countFiles.innerText = `Файл выбран`
	}
})

choiceFiles.addEventListener('click', (event) => {
	if(fileInput.value !== ''){
		countFiles.classList.remove('valid')
		countFiles.innerText = `Файл не выбран`
		choiceFiles.innerText = `Выберите файл`
		clearInput(event.target)
	}
})

function clearInput(event) {
	event.value = null;
}

submitForm.addEventListener('click', () => {
	validate()
})

//Validator


function validateEmail(email){
	let re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
	return re.test(String(email).toLowerCase())
}


function validatePhoneNumber(phoneNumber){
	let re = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
	return re.test(String(phoneNumber).toLowerCase())
}


function validate(){

	let noValidCheckboxes = 0;
	let isFileChosen = fileInput.value;
	const emailValue = emailInputValue.value;
	const telValue = inputTelValue.value;

	inputs.forEach(input => {
		if(input.value === ''){
			input.classList.add('__not-valid')
		} else{
			input.classList.remove('__not-valid')
		}
	})

	inputs.forEach(i => {
		if(i.classList.contains('__not-valid')){
			event.preventDefault()
		}
	})

	checkBoxes.forEach(i => {
		if(i.checked === false){
			noValidCheckboxes += 1
		}
	})

	if (noValidCheckboxes === checkBoxes.length){
		checkBox.classList.add('__not-valid')
	} else {
		checkBox.classList.remove('__not-valid')
	}

	if(textArea.value === ''){
		event.preventDefault()
		textArea.classList.add('__not-valid')
	} else {
		textArea.classList.remove('__not-valid')
	}

	if(checkBox.classList.contains('__not-valid')) {
		event.preventDefault()
	}

	if(isFileChosen === ''){
		event.preventDefault()
		inputFileButton.classList.add('__not-valid')
	} else {
		inputFileButton.classList.remove('__not-valid')
	}

	if(!(validateEmail(emailValue))){
		console.log(1)
		emailInputValue.classList.add('__not-valid')
		event.preventDefault()
	}

	if(!(validatePhoneNumber(telValue))){
		console.log(1)
		inputTelValue.classList.add('__not-valid')
		event.preventDefault()
	} else {
		inputTelValue.classList.remove('__not-valid')
	}
}