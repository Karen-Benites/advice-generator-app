class AdviceGenerator {
  constructor() {
    this.button = document.querySelector(".advice__generator-button")
    this.adviceIdDOM = document.querySelector(".card__title span")
    this.adviceContent = document.querySelector(".card__content")
    this.getNewAdvice = this.getNewAdvice.bind(this)
    this.initEvents()
  }

  initEvents() {
    this.button.addEventListener("click", this.getNewAdvice)
  }

  getNewAdvice() {
    fetch("https://api.adviceslip.com/advice")
      .then(response => {
        return response.json()
      })
      .then(data => {
        this.adviceIdDOM.textContent = data.slip.id
        this.adviceContent.textContent = data.slip.advice
      })
      .catch(error => console.log(error.message))
  }
}

const adviceApp = new AdviceGenerator()

adviceApp.getNewAdvice()
