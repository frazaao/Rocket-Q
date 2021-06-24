import  Modal  from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector(".modal h2")
const modalDescription = document.querySelector(".modal p")
const modalButton = document.querySelector(".modal button")

const checkButtons = document.querySelectorAll("a.check")

checkButtons.forEach(button => {
    button.addEventListener('click', handleClick)
})

const deleteButtons = document.querySelectorAll("a.delete")

deleteButtons.forEach(button => {
    button.addEventListener('click', event => handleClick(event, false))
})

function handleClick(event, check = true){
    event.preventDefault()

    const text = check ? "Marcar como lida" : "Exluir"

    modalTitle.innerHTML = `${text} esta pergunta`

    modalDescription.innerHTML =`Tem certeza que você deseja ${text.toLowerCase()} esta pergunta?`

    modalButton.innerHTML = `Sim, ${text.toLowerCase()}`

    check ? modalButton.classList.remove("red") : modalButton.classList.add("red")

    modal.open()
}