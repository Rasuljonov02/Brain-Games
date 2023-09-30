import "./main.css";
const contener: HTMLDivElement = document.querySelector("#contener");
const body: HTMLBodyElement = document.querySelector("body");
const taimlar: HTMLParagraphElement = document.querySelector(".taimlar");
const son: HTMLParagraphElement = document.querySelector(".son");
let a: string[];

cellchiz();
boyaydi();

function cellchiz() {
	const icons = ["👍", "", "👍", "", "", "👍", "", ""];
	a = [...icons, ...icons].sort(() => 0.5 - Math.random());
	contener.innerHTML = "";
	for (let i = 0; i < 16; i++) {
		const cell: HTMLParagraphElement = document.createElement("p");
		cell.className = "cell cellar active";
		cell.textContent = "Cell " + (i + 1);
		contener.appendChild(cell);
	}
}

let o: number = 0;
let sanoq: number = 0;
function boyaydi() {
	const cellar: NodeListOf<HTMLParagraphElement> = document.querySelectorAll(".cellar");

	cellar.forEach((cell: HTMLParagraphElement, index: number) => {
		cell.innerText = a[index] || "";
		cell.addEventListener("click", () => {
			// hato
			if (cell.innerText === "") {
				cell.classList.add("gameover");
				cell.classList.add("winner");
				sanoq = 0;
				son.innerText = `${sanoq}`;

				body.style.pointerEvents = "none";
				setTimeout(() => {
					cellchiz();
					boyaydi();
					body.style.pointerEvents = "all";
				}, 2000);
			} else {
				// togri
				o++;
				if (o === 6) {
					setTimeout(() => {
						cellchiz();
						boyaydi();
						body.style.pointerEvents = "all";
					}, 2000);
					body.style.pointerEvents = "none";

					sanoq++;
					o = 0;
					son.innerText = `${sanoq}`;
				}
				cell.classList.add("active");
			}
		});
	});

	setTimeout(() => {
		cellar.forEach((cell: HTMLParagraphElement) => {
			cell.classList.remove("active");
		});
	}, 2000);

	updateTimer();
}

let s: number = 30;
let m: number = 0;

function updateTimer() {
	// if (s < 0) {
	// 	s = 0;
	// 	m--;
	// }
	s--;
	taimlar.innerText = `${m < 10 ? "0" + m : m} : ${s < 10 ? "0" + s : s}`;

	if (s === 0) {
		cellchiz();
		boyaydi();

	} else {
		// setTimeout(updateTimer, 1000);
	}
}
