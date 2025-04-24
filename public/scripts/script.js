//
let heroSection = document.querySelector(".hero");
let scrollPosition = window.scrollY;
let createForm = document.querySelector(".create-form");
let addBtn = document.querySelector(".addBtn");
let closeBtn = document.querySelector(".closeBtn");
let benefitSection = document.querySelector(".benefits");
let editBtn = document.querySelector(".editBtn");
let editForm = document.querySelector(".edit-form");
let editCloseBtn = document.querySelector(".edit-close-btn");

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
	createForm.style.display = "flex";
});
closeBtn.addEventListener("click", () => {
	createForm.style.display = "none";
});

editBtn.addEventListener("click", () => {
	editForm.style.display = "flex";
});
editCloseBtn.addEventListener("click", () => {
	editForm.style.display = "none";
});
