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

![app preview](./images/screenshot%20desktop.png)

### Links

- Live Site URL: [Clik me to see live website!](https://karen-benites.github.io/advice-generator-app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Vanilla Javascript
- Adviceslip API

### What I learned

What I mainly learnt here was to write javascript code with OOP approach. I've always worked with functional programming paradigm, but I often saw many apps built using this OOP approach. So I definitely wanted to give it a try through this small project. It is basically a short class.

Also, this was a perfect time to practice simple GET HTTP requests using a REST API, and promises handling.

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

I did not face any mayor challenges. regarding code, since I'd already practiced a lot with fetch method before I started this project. The only issue I experienced here was regarding html structure, especially the divider image. At first, I used an "img" tag to put the corresponding divider picture. But, since this picture is different on mobile and desktop; I realized later that it can be a little bit more complicated to change the image content depending on screen size. Of course, this can be easly done changing img src attribute using a Javascript event listener, but then, I realized there was a more efficient way of doing so without using any JS at all.

I simply used an span html tag and added the divider as a background image. On that way I could easily change the background url using css media queries.

### Continued development

In future projects (not this one) I'd like to practice more REST API usage: trying other methods apart from GET. I've already done that in smaller practice projects, but I want to implement them in a larger app with a nice design. Nice designs really motivate me to build a more robust solucion, and gives me the opportunity to put my UX UI knowledge into practice (especially accesibility issues)

### Useful resources

- [Platzi API REST Fundamentals](https://platzi.com/cursos/api/) - This helped me for understanding and using API REST to pull data form an external server. I also learnt how to handle data with fetch.
- [Prettier](https://prettier.io/docs/install) - A js code formatter, ensuring consistent style
- [Eslint](https://eslint.org/) - An extra code checker to find and fix problems with your JavaScript code, f.e: unused variables.

## Author

- Linkedin - [Karen Benites](https://www.linkedin.com/in/karenlbenites/)
- Frontend Mentor - [@Karen-Benites](https://www.frontendmentor.io/profile/Karen-Benites)
- X - [@karensdevia](https://x.com/karensdevia)
- Instagram - [@karensdevia](https://www.instagram.com/karensdevia/#)