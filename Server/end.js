const finalScore = localStorage.getItem("finalScore");
const finalScoreText = document.getElementById("final-score");
const revisionCheck = document.getElementById("revision-check");

finalScoreText.innerText = `Your score was: ${finalScore}/10`;

if (finalScore < 10) {
    revisionCheck.classList.remove("hidden");
} else {
    revisionCheck.classList.add("hidden");
}