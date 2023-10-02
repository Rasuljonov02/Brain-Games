import "./main.css";

const son: HTMLParagraphElement = document.querySelector(".son")!;
const boardElm: HTMLDivElement = document.querySelector("#board")!;
let cells: string[] = [];
let correctAnswers = 0;
let a: number = 0; // bosilgan belgilar
let aa: number = 0; // hozilgi level
let winner1: number = 3; // belgilar
let winner2: number = 9; // kataklar
let b: number = 4; // grid
let col: number = 3;
let row: number = 3;

// HANDLE FUNCTIONS
function handleCell(cell: HTMLDivElement, cellIdx: number) {
	if (!cells[cellIdx]) {
		console.log(5);

		aa = 0;
		a = 0;
		son.innerText = `${aa}`;
		winner1 = 0;
		winner2 = 0;
		b = 0;
		init();
	}
	correctAnswers++;
	cell.classList.add("active");

	if (correctAnswers === winner1) {
		// togri ga rekshiradi

		console.log(6);
		setTimeout(init, 1000);
	}

	a++;
	// togri bosilganda
	if (a === winner1) {
		// togriga rekshiradi va chizadi

		aa++;
		winner1++;
		a = 0;
		son.innerText = `Level ${aa}`;

		if (winner1 % 2 == 0) {
			col++;
			row++;
			winner2 = col * row;
			boardElm.style.gridTemplateColumns = `repeat(${b}, 1fr)`;
			boardElm.style.gridTemplateRows = `repeat(${b}, 1fr)`;

			b++;
		}
	}
}

// RENDER FUNCTIONS
function renderCells() {
	boardElm.innerHTML = "";
	const initCellElms: HTMLDivElement[] = [];

	for (let idx = 0; idx < cells.length; idx++) {
		const cell = cells[idx];
		const cellElm = document.createElement("div");
		cellElm.classList.add("cell");

		if (cell) {
			winner1;
			cellElm.classList.add("active");
			cellElm.innerText = cell;
			initCellElms.push(cellElm);
		}

		cellElm.onclick = (e) => handleCell(e.target as HTMLDivElement, idx);
		boardElm.append(cellElm);
	}

	setTimeout(() => {
		for (const cellElm of initCellElms) cellElm.classList.remove("active");
	}, 1000);
}

// LOGIC FUNCTIONS
function init() {
	correctAnswers = 0;
	cells = new Array(winner1).fill("👍");
	const stayCells = new Array(winner2 - winner1).fill("");

	cells = [...cells, ...stayCells].sort(() => Math.random() - 0.5);

	renderCells();
}

init();
