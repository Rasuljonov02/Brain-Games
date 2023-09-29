import "./main.css";
// import { generateIcons } from "./utils";
const contener: HTMLDivElement = document.querySelector("#contener");

// funcksiya

// birinchi ishga tushadi
cellchiz();
boyaydi();
let a: string[];
function cellchiz() {
	const icons = ["👍", "", "👍", "", "", "👍", "", ""];
	a = [...icons, ...icons].sort(() => 0.5 - Math.random());
	for (let i = 0; i < 16; i++) {
		const cell: HTMLParagraphElement = document.createElement("p");
		cell.className = "cell cellar active";
		cell.textContent = "Cell " + (i + 1);
		contener.appendChild(cell);
	}
}
function boyaydi() {
	const cellar: NodeListOf<HTMLParagraphElement> = document.querySelectorAll(".cellar");

	cellar.forEach((cell: HTMLParagraphElement, index: number) => {
		cell.innerText = a[index];

		cell.addEventListener("click", () => {
			cell.classList.add("active");
		});
	});

	setTimeout(() => {
		cellar.forEach((cell: HTMLParagraphElement) => {
			cell.classList.remove("active");
		});
	}, 2000);
}

console.log(a);
