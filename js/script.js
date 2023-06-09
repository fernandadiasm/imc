import { Modal } from './modal.js';
import { AlertError } from './alert-error.js';
import { IMC, notANumber } from './utils.js';

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')


//existem duas formas, porém o on... só permite usar uma vez
inputHeight.oninput = () => AlertError.close()
inputWeight.addEventListener('input', () => {
    AlertError.close()
})
form.onsubmit = event => {
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value
    const showAlertError = notANumber(weight) || notANumber(height)

    if (showAlertError) {
        AlertError.open()
        return;
    }
    AlertError.close()

    const result = IMC(weight, height)
    displayResultMessage(result)
}

function displayResultMessage(result) {
    const message = `Seu IMC é de ${result}`
    Modal.message.innerText = message
    Modal.open()
}







// existem três maneiras de criar e atribuir função a um evento
// 1 form.onsubmit = () => {}

// 2. form.onsubmit = handle Submit
// function handleSubmit () {}

// 3 form.onsubmit = event =>...