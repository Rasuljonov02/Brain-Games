import "./main.css";
const contener: HTMLDivElement = document.querySelector("#contener");
const body: HTMLBodyElement = document.querySelector("body");
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
function boyaydi() {
	const cellar: NodeListOf<HTMLParagraphElement> = document.querySelectorAll(".cellar");

	cellar.forEach((cell: HTMLParagraphElement, index: number) => {
		cell.innerText = a[index] || "";
		cell.addEventListener("click", () => {
			if (cell.innerText === "") {
				cell.classList.add("gameover");
				cell.classList.add("winner");
				body.style.pointerEvents = "none";
				setTimeout(() => {
					cellchiz();
					boyaydi();
					body.style.pointerEvents = "all";
				}, 2000);
			} else {
				o++;

				if (o === 6) {
					setTimeout(() => {
						cellchiz();
						boyaydi();
				
					}, 2000);
					o=0;
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
}
