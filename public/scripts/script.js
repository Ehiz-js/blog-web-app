let heroSection = document.querySelector(".hero");
let scrollPosition = window.scrollY;
window.addEventListener("scroll", () => {
	heroSection.classList.toggle("blurred", window.scrollY > 50);
});
