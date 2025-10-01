// Controle das telas
const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");
const screen3 = document.getElementById("screen3");
const music = document.getElementById("music");

function goToScreen(screen2) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(screen2).classList.add('active');
}

document.getElementById("toPhotos").addEventListener("click", () => {
  screen1.classList.remove("active");
  screen1.classList.add("hidden");
  screen2.classList.add("active");
  music.play();
});

document.getElementById("toLetter").addEventListener("click", () => {
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
