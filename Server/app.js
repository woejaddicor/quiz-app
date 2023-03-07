const cors = require("cors");
const express = require("express");
const app = express();
const questions = require("./questions");
const logger = require("./logger");

app.use(cors());
app.use(express.json());
// const startButton = document.getElementById('start-btn');
// const questionContainerElement = document.getElementById('question-container');
// const questionElement = document.getElementById('question');
// const answerButtonsElement = document.getElementById('answer-buttons');

// startButton.addEventListener('click', startGame);
// nextButton.addEventListener('click', () => {
// currentQuestionIndex++;
// setNextQuestion();
// });
app.use("/questions", (req, res, next) => {
  logger(req);
  next();
});

app.get("/", (req, res) => {
  res.send("Welcome to the API");
});

const sendAllQuestions = () => {
  app.get("/questions", (req, res) => {
    res.send(questions);
  });
};

sendAllQuestions();

const getQuestions = (category) => {
  return questions[0].questions.filter((question) => {
    return question["category"].toLowerCase() == category;
  });
};

app.get("/questions/:category", (req, res) => {
  const category = req.params.category.toLowerCase();
  const questions = getQuestions(category);
  if (questions == undefined) {
    res.status(404).send();
  } else {
    res.send(questions);
  }
});

module.exports = app;

// function startGame() {
// 	console.log('started');
// 	startButton.classList.add('hide');
// 	// shuffledQuestions = questions.sort(() => Math.random() - 0.5);
// 	// currentQuestionIndex = 0;
// 	questionContainerElement.classList.remove('hide');
// 	// setNextQuestion();
// }
