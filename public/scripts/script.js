//
let heroSection = document.querySelector(".hero");
let scrollPosition = window.scrollY;
let float = document.querySelector(".form");
let addBtn = document.querySelector(".addBtn");
let closeBtn = document.querySelector(".closeBtn");
let benefitSection = document.querySelector(".benefits");

window.addEventListener("scroll", () => {
	heroSection.classList.toggle("blurred", window.scrollY > 50);
	benefitSection.classList.toggle("blurred", window.scrollY > 1000);
	if (window.scrollY > 400) {
		benefitSection.classList.add("slide-right");
		benefitSection.classList.remove("slide-left");
	} else if (window.scrollY < 400) {
		benefitSection.classList.remove("slide-right");
		benefitSection.classList.add("slide-left");
	}
});

addBtn.addEventListener("click", () => {
	float.style.display = "flex";
});
closeBtn.addEventListener("click", () => {
	float.style.display = "none";
});
