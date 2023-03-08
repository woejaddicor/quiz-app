let availableQuestions = [];
let currentQuestion = {};
let choices = Array.from(document.getElementsByClassName("option-text"));
let questionCounter = 0;
let score = 0;
let tips = document.getElementById('tip')

const getCategory = (e) => {
    e.preventDefault();
    questionCounter = 0;
    score = 0;
    displayQuestion(e.target.textContent);
};
const scoreText = document.getElementById("score-text");
const counterText = document.getElementById("counter-text");
const quiz = document.getElementsByClassName("buttonCategory");
let questionArea = document.getElementById("question-area");
const question = document.getElementById("question");

async function displayQuestion(category) {
    const response = await fetch(`http://localhost:3000/questions/${category}`);
    const cat = await response.json();
    // console.log(cat);
    questionArea.classList.remove("hidden");
    let questions = cat;
    availableQuestions = [...questions];
    nextQuestion();
}

const nextQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter >= 10) {
        //go to the end page
        return window.location.assign("/index.html");
    }
    tips.classList.add("hidden");
    questionCounter++;
    counterText.innerText = `${questionCounter}/10`;
    scoreText.innerText = `Score: ${score}/10`;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;
    tips.innerText = currentQuestion.tip
    console.log(currentQuestion)
    choices.forEach((choice) => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion[number];
    });
    availableQuestions.splice(questionIndex, 1);
};

choices.forEach((choice) => {
    choice.addEventListener("click", (e) => {
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];
        const classToApply =
            selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";
        if (classToApply === "incorrect") {
            tips.classList.remove("hidden");
        } else if (classToApply === "correct") {
            score++;
        }
        selectedChoice.parentElement.classList.add(classToApply);
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            nextQuestion();
        }, 1000);
    });
});

const categoryButton = document.getElementsByClassName("btn");
for (let i = 0; i < categoryButton.length; i++) {
    categoryButton[i].addEventListener("click", getCategory);
}

// const startButton = document.getElementById("start-button");
// startButton.addEventListener("click", displayQuestion);

module.exports = {
    displayQuestion,
    getCategory
}