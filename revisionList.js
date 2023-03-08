const revisionList = document.querySelector('.revisionList');
const tipsArray = JSON.parse(localStorage.getItem('tipsArray')) || [];

revisionList.innerHTML = tipsArray.map((list) => {
	console.log(list);
	return <li>`${list}`</li>;
});

// const highScoreList = document.getElementById('highScore-list');
// const highScores = JSON.parse(localStorage.getItem('highscores')) || [];
// highScoreList.innerHTML = highScores
// 	.map((score) => {
// 		return `<li class="high-score">${score.name} - ${score.score}</li>`;
// 	})
// 	.join('');
