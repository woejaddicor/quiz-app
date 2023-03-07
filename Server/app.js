const cors = require("cors");
const express = require("express");
const app = express();
const questions = require("./questions");
const logger = require("./logger");

app.use(cors());
app.use(express.json());


app.use('/questions', (req, res, next) => {
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
