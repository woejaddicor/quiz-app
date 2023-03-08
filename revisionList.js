const revisionList = document.querySelector('.revisionList');
const tipsArray = JSON.parse(localStorage.getItem('tipsArray')) || [];

tipsArray.map((list) => {
	console.log(list.tip);
	return `<li>${list.tip}</li>`;
});

// highScores
// 	.map((score) => {
// 		return `<li class="high-score">${score.name} - ${score.score}</li>`;
// 	})
// 	.join('');
