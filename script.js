const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

const modalWrapper = document.querySelector('.modal-wrapper')
const modalMessage = document.querySelector('.modal .title span')
const modalBtnClose = document.querySelector('.modal button.close')


form.onsubmit = event => {
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value

    const result = IMC(weight, height)
    const message = `Seu IMC é de ${result}`

    modalMessage.innerText = message
    modalWrapper.classList.add('open')
}

modalBtnClose.addEventListener('click', () => {
    modalWrapper.classList.remove('open')
})


function IMC(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2)
}






// existem três maneiras de criar e atribuir função a um evento
// 1 form.onsubmit = () => {}

// 2. form.onsubmit = handleSubmit
// function handleSubmit () {}

// 3
// form.onsubmit = event =>...