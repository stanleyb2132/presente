// Controle das telas
const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");
const screen3 = document.getElementById("screen3");
const music = document.getElementById("music");
const letterOpening = document.getElementById("letterOpening");
const openEnvelope = document.getElementById("openEnvelope");

function goToScreen(screenId) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(screenId).classList.add('active');
}

document.getElementById("toPhotos").addEventListener("click", () => {
  screen1.classList.remove("active");
  screen1.classList.add("hidden");
  screen2.classList.add("active");
  music.play();
});

// Navegação para Carta com animação
document.getElementById("toLetter").addEventListener("click", () => {
  // Mostrar animação de carta abrindo
  letterOpening.classList.add("active");
});

// Fechar animação da carta e ir para tela da carta
openEnvelope.addEventListener("click", () => {
  // Fechar animação e ir para a tela da carta
  letterOpening.classList.remove("active");
  screen2.classList.remove("active");
  screen2.classList.add("hidden");
  screen3.classList.add("active");
});

// Slideshow
let index = 0;
const slides = document.querySelectorAll(".slideshow img");
function showSlides() {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[index].classList.add("active");
  index = (index + 1) % slides.length;
}
setInterval(showSlides, 3000);

// Corações caindo
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerText = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (2 + Math.random() * 3) + "s";
  document.body.appendChild(heart);

  setTimeout(() => { heart.remove(); }, 5000);
}
setInterval(createHeart, 500);

// Iniciar alguns corações imediatamente
for (let i = 0; i < 10; i++) {
  setTimeout(() => createHeart(), i * 200);
}
