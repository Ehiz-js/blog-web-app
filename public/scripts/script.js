//
let heroSection = document.querySelector(".hero");
let scrollPosition = window.scrollY;
let float = document.querySelector(".form");
let addBtn = document.querySelector(".addBtn");
let closeBtn = document.querySelector(".closeBtn");

window.addEventListener("scroll", () => {
	heroSection.classList.toggle("blurred", window.scrollY > 50);
});

addBtn.addEventListener("click", () => {
	float.style.display = "flex";
});
closeBtn.addEventListener("click", () => {
	float.style.display = "none";
});
