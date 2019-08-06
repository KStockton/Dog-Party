let dogBtn = document.querySelector('.form-button')
let userInput = document.querySelector('.form-title')
let dogTitle = document.querySelector('.hero-subtitle')


dogBtn.addEventListener('click', changeName)


function changeName() {
event.preventDefault()
dogTitle.innerText = userInput.value
}