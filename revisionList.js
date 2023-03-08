const revisionList = document.querySelector('.revisionList');
const tipsArray = JSON.parse(localStorage.getItem('tipsArray')) || [];

let unique = tipsArray.filter(
	(tip, index) =>
		index === tipsArray.findIndex((other) => tip.tip === other.tip)
);

revisionList.innerHTML = unique
	.map((item) => {
		return `
        <div style="background-color: white; border-bottom: 1px solid blue; width: 80%">
        <li>${item.tip}</li>
        </div>`;
	})
	.join('');
