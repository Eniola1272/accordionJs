'use strict'
// USING SELECTORS INSIDE THE ELEMENT

const questions = document.querySelectorAll(".question")

questions.forEach(function(question) {
    console.log(question); //to see the selected element -- Article

    //selecting the button within each article. Limiting the pool to just the .question class' element
    const btn = question.querySelector(".question-btn");

    // what should happen when we click the button. we want to add show-text to the class list of the article we clicked on. but if it is already in the classlist, we want to remove it
    btn.addEventListener("click", function () {

        questions.forEach(function (item) {
            // if item article does not match the questions article, then remove the show-text class
            if (item !== question) {
                item.classList.remove("show-text")
            }
        })

        question.classList.toggle("show-text");

    });
})








// TRANSVERSING THE DOM
/* 
const btns = document.querySelectorAll(".question-btn");

// To add event listener to each of the buttons
btns.forEach(function (btn) {
    btn.addEventListener("click", function(event) {
        // we basically transversed the dom to find the exact element we needed so that we could manipulate it using javascript
        const question = event.currentTarget.parentElement.parentElement
        question.classList.toggle("show-text")
    })
})
*/