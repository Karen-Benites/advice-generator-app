const button = document.querySelector(".advice__generator-button")
const adviceIdDOM = document.querySelector(".card__title span")
const adviceContent = document.querySelector(".card__content")

button.addEventListener('click', getNewAdvice)

function getNewAdvice(){
    fetch('https://api.adviceslip.com/advice')
    .then(response => {
        return response.json()
    })
    .then(data => {
        adviceIdDOM.textContent = data.slip.id
        adviceContent.textContent = data.slip.advice
    })
    .catch(error => console.log(error.message))
}