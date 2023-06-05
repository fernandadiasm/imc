import { Modal } from './modal.js';

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

form.onsubmit = event => {
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value

    const result = IMC(weight, height)
    const message = `Seu IMC é de ${result}`

    Modal.message.innerText = message
    Modal.open()
}


function IMC(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2)
}






// existem três maneiras de criar e atribuir função a um evento
// 1 form.onsubmit = () => {}

// 2. form.onsubmit = handle Submit
// function handleSubmit () {}

// 3
// form.onsubmit = event =>...