const revisionList = document.querySelector('.revisionList');
const tipsArray = JSON.parse(localStorage.getItem('tipsArray')) || [];

revisionList.innerHTML = tipsArray.map((list) => {
	console.log(list);
	return <li>`${list}`</li>;
});
