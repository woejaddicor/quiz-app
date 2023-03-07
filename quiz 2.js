let currentQuestion = {};
let choices = Array.from(document.getElementsByClassName('option-text'));
let questionCounter = 0;

const getCategory = (e) => {
	e.preventDefault();
	displayQuestion(e.target.textContent);
};
const quiz = document.getElementsByClassName('buttonCategory');
let questionArea = document.getElementById('question-area');
const question = document.getElementById('question');

async function displayQuestion(category) {
	const response = await fetch(`http://localhost:3000/questions/${category}`);
	const cat = await response.json();
	console.log(cat);
	questionArea.classList.remove('hidden');

	const questions = cat;
	let currentQuestionIndex = Math.floor(Math.random() * cat.length);
	currentQuestion = questions[currentQuestionIndex];
	question.innerHTML = currentQuestion.question;

	choices.forEach((choice) => {
		const number = choice.dataset.number;
		choice.innerText = currentQuestion[number];
	});
	const nextQuestion = () => {
		questionCounter++;
	};
	nextQuestion();
	console.log(questionCounter);
}

const categoryButton = document.getElementsByClassName('btn');
for (let i = 0; i < categoryButton.length; i++) {
	categoryButton[i].addEventListener('click', getCategory);
}

const startButton = document.getElementById('start-button');
startButton.addEventListener('click', displayQuestion);
