function showAnswer(){
document.getElementById("answer").style.display="block";
}

const start = new Date("2025-09-22");

const today = new Date();

const days = Math.floor(
(today - start)/(1000*60*60*24)
);

document.getElementById("days").innerHTML =
days + " days of memories ❤️";