const navList = document.querySelector(".nav-list");
const navLink = document.querySelectorAll(".nav-list a")
const menuToggle = document.getElementById("mobile-menu");
const sections = document.querySelectorAll("section")

// Navbar spy
window.addEventListener("scroll", () => {
	let current = " "
	sections.forEach(section => {
		const sectionTop = section.offsetTop
		const sectionHeight = section.clientHeight
		if(pageYOffset >= sectionTop - sectionHeight / 3){
			current = section.getAttribute("id")
		}
	})

	navLink.forEach(link => {
		link.classList.remove("active")
		if (link.getAttribute("href").includes(current)){
			link.classList.add("active")
		}
	})
})

// Navbar Toggle
menuToggle.addEventListener("click", function () {
	navList.classList.toggle("show");
	menuToggle.classList.toggle("open");
});


// Dark Mode Toggle
document
	.getElementById("dark-mode-toggle")
	.addEventListener("change", function () {
		document.body.classList.toggle("dark-mode");
	});

// Navbar scroll semi transparent
window.addEventListener("scroll", function () {
	var navbar = document.querySelector(".navbar");
	if (window.scrollY > 0) {
		navbar.classList.add("scrolled");
	} else {
		navbar.classList.remove("scrolled");
	}
});

const Risoles = [
	{
		title: "Risol Sayur",
		price: 2500,
		description: "Kentang, Wortel Telor Orak Arik",
		image: "risoles/risol-sayur.jpg",
	},
	{
		title: "Risol Bihun",
		price: 2500,
		description: "Bihun Wortel Dan Telor Orak Arik",
		image: "risoles/risol-bihun.jpg",
	},
	{
		title: "Risol Ayam Bawang",
		price: 3000,
		description: "Daging Ayam Cincang dan Daun Bawang",
		image: "risoles/risol-ayam-bawang.jpg",
	},
	{
		title: "Risol Ayam Geprek",
		price: 3000,
		description: "Ayam Suir Dengan Sambal Geprek",
		image: "risoles/risol-ayam-geprek.jpg",
	},
	{
		title: "Risol Sosis Pizza",
		price: 3000,
		description: "Sosis Goreng Dengan Saos Tomat Dan Mayonaise",
		image: "risoles/risol-sosis-pizza.jpg",
	},
	{
		title: "Risol Mayo",
		price: 6000,
		description: "Daging Asap Keju Telor Rebus Mayonaise",
		image: "risoles/risol-mayo.jpg",
	},
	{
		title: "Risol Daging moza",
		price: 6000,
		description: "Daging Cincang Saos Bulgogi Mozarela",
		image: "risoles/risol-daging-moza.jpg",
	},
	{
		title: "Risol Rogut keju",
		price: 6000,
		description:
			"Risoles Dengan Isian Wortel Kentang Ayam Dipadukan Dengan Creamynya Susu Full Cream Dan Keju",
		image: "risoles/risol-rogut-keju.jpg",
	},
	{
		title: "Risol Chiken Mentai",
		price: 6000,
		description: "Dengan Isian Ayam Suir dan Saos Mentai yang Creamy",
		image: "risoles/risol-chiken-mentai.jpg",
	},
];

const SusVla = [
	{
		title: "Sus Original",
		price: 4000,
		description: "Kue Sus Lembut Dengan Vla Vanila",
		image: "sus-vla/sus-original.jpg",
	},
	{
		title: "Sus Coklat / White / Matcha",
		price: 5000,
		description: "Kue Sus Lembut Dengan Vla Coklat",
		image: "sus-vla/sus-coklat.jpg",
	},
	{
		title: "Sus Coklat / White / Matcha Almond",
		price: 6000,
		description: "Kue Sus Dengan Taburan Kacang Almond",
		image: "sus-vla/sus-almond.jpg",
	},
	{
		title: "Choux Au Craquelin / Cream Puff",
		price: 6000,
		description:
			"Dengan Lapisan Craquelin yang Renyah dan Isian yang Lembut di Dalamnya",
		image: "sus-vla/cream-puff.jpg",
	},
];

const menuContainer = document.getElementById("menu-container");
const btnRisol = document.getElementById("btn-risol");
const btnSus = document.getElementById("btn-sus");
const loading = document.getElementById("loading")

function createCard(data) {
	const card = document.createElement("div");
	const cardImg = document.createElement("img");
	const cardTitle = document.createElement("h2");
	const cardSubtitle = document.createElement("h4");
	const cardPrice = document.createElement("p");
	card.className = "card";
	cardImg.className = "card-img";
	cardTitle.className = "card-title";
	cardSubtitle.className = "card-subtitle";
	cardPrice.className = "card-price";
	cardImg.src = `./img/${data.image}`;
	cardTitle.innerHTML = data.title;
	cardSubtitle.innerHTML = data.description;
	cardPrice.innerHTML = `Rp. ${data.price}`;
	card.appendChild(cardImg);
	card.appendChild(cardTitle);
	card.appendChild(cardSubtitle);
	card.appendChild(cardPrice);
	return card;
}

function showMenu(type) {
	loading.style.display = "block"
	menuContainer.innerHTML = " ";


	if (type == "risol") {
		btnRisol.classList.add("active");
		btnSus.classList.remove("active");
	} else {
		btnRisol.classList.remove("active");
		btnSus.classList.add("active");
	}

	setTimeout(() => {
		const menuData = type === "risol" ? Risoles : SusVla;
		menuData.forEach((item) => {
			const card = createCard(item);
			menuContainer.appendChild(card);
		});
		
		loading.style.display = "none"
	}, 500);
}

setTimeout

showMenu("risol");
