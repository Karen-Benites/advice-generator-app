# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![App preview](./images/screenshot%20desktop.png)

### Links

- Live Site URL: [Click here to see the live website!](https://karen-benites.github.io/advice-generator-app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Vanilla JavaScript
- Adviceslip API

### What I learned

What I mainly learned here was writing JavaScript code with an OOP approach. I've always worked with the functional programming paradigm, but I often saw many apps built using this OOP approach. This small project was definitely a good opportunity to give it a try. It's basically implemented as a simple class.

Additionally, this was a perfect chance to practice simple GET HTTP requests using a REST API and handling promises.

```js
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
```

I did not face any major challenges regarding the code, since I had already practiced a lot with the fetch method before starting this project. The only issue I experienced was with the HTML structure, especially the divider image. At first, I used an "img" tag to insert the corresponding divider picture. However, since this picture differs between mobile and desktop views, I later realized it could be a bit more complicated to change the image content depending on screen size. Of course, this could easily be done by changing the img src attribute using a JavaScript event listener, but then I discovered there was a more efficient way to do this without using any JS at all.

I simply used an HTML span tag and added the divider as a background image. This way, I could easily change the background URL using CSS media queries.

### Continued development

In future projects (not this one), I'd like to practice more REST API usage: trying other methods beyond GET. I've already done that in smaller practice projects, but I want to implement them in a larger app with a nice design. Attractive designs really motivate me to build more robust solutions and give me the opportunity to put my UX/UI knowledge into practice (especially regarding accessibility issues).

### Useful resources

- [Platzi API REST Fundamentals](https://platzi.com/cursos/api/) - This helped me understand and use REST APIs to pull data from an external server. I also learned how to handle data with fetch.
- [Prettier](https://prettier.io/docs/install) - A JavaScript code formatter, ensuring consistent style.
- [ESLint](https://eslint.org/) - An extra code checker to find and fix problems with your JavaScript code, e.g., unused variables.

## Author

- LinkedIn - [Karen Benites](https://www.linkedin.com/in/karenlbenites/)
- Frontend Mentor - [@Karen-Benites](https://www.frontendmentor.io/profile/Karen-Benites)
- X - [@karensdevia](https://x.com/karensdevia)
- Instagram - [@karensdevia](https://www.instagram.com/karensdevia/)
