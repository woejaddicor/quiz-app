let availableQuestions = [];
let currentQuestion = {};
let choices = Array.from(document.getElementsByClassName("option-text"));
let questionCounter = 0;
const tipsArray = JSON.parse(localStorage.getItem("tipsArray")) || [];
let score = 0;
let tips = document.getElementById("tip");

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
    questionArea.classList.remove('hidden');
    let questions = cat;
    availableQuestions = [...questions];
    nextQuestion();
}

const nextQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter >= 10) {
        localStorage.setItem("finalScore", score);
        return window.location.assign('./end.html');
    }
    tips.classList.add('hidden');
    questionCounter++;
    counterText.innerText = `${questionCounter}/10`;
    scoreText.innerText = `Score: ${score}/10`;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;
    tips.innerText = currentQuestion.tip;
    choices.forEach((choice) => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion[number];
    });
    availableQuestions.splice(questionIndex, 1);
};

choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];
        const classToApply =
            selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';
        if (classToApply === 'incorrect') {
            saveTipToLocalStorage(tips.innerText);
            tips.classList.remove('hidden');
            selectedChoice.parentElement.classList.add(classToApply);
            setTimeout(() => {
                selectedChoice.parentElement.classList.remove(classToApply);
                nextQuestion();
            }, 6000);
        } else if (classToApply === 'correct') {
            score++;

            selectedChoice.parentElement.classList.add(classToApply);
            setTimeout(() => {
                selectedChoice.parentElement.classList.remove(classToApply);
                nextQuestion();
            }, 1000);
        }
    });
});

const saveTipToLocalStorage = (tips) => {
    let newTip = {
        tip: tips,
    };
    tipsArray.push(newTip);
    localStorage.setItem('tipsArray', JSON.stringify(tipsArray));
};

const categoryButton = document.getElementsByClassName("btn");
for (let i = 0; i < categoryButton.length; i++) {

    categoryButton[i].addEventListener('click', getCategory);
}

// const startButton = document.getElementById("start-button");
// startButton.addEventListener("click", displayQuestion);

module.exports = {
  displayQuestion,
  getCategory,
  saveTipToLocalStorage,
};

