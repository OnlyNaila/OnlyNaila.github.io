const wrapper document.querySelector(".wrapper");

const question = document.querySelector(".question");

const gif document.querySelector(".gif"); document.querySelector(".yes-btn"

const yesBtn = const noBtn = document.querySelector(".no-btn"); );

yesBtn.addEventListener("click", () {

question.innerHTML = "Aaaaa, I like you too";

gif.src =

"https://raw.githubusercontent.com/DzarelDeveloper/Img/main/gif.webp"; });

noBtn.addEventListener("mouseover", () => {

const noBtnRect = noBtn.getBoundingClientRect();

const maxX = window.innerWidthnoBtnRect.width;

const maxY = window.innerHeight noßtnRect.height;

const randomX = Math.floor(Math.random() * maxx);

const randomY = Math.floor(Math.random() * maxY);

noßtn.style.left = randomX + "px"; noBtn.style.top randomY + "px"; });
