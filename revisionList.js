const revisionList = document.querySelector(".revisionList");
const tipsArray = JSON.parse(localStorage.getItem("tipsArray")) || [];

let unique = tipsArray.filter(
  (tip, index) =>
    index === tipsArray.findIndex((other) => tip.tip === other.tip)
);

revisionList.innerHTML = unique
  .map((item) => {
    return `
        <li class="li-revision">${item.tip}</li> <br>`;
  })
  .join("");
