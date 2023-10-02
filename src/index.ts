import "./main.css";
import { NUMBER_OF_CELLS, NUMBER_OF_INIT_CELLS } from "./data";
const son: HTMLParagraphElement = document.querySelector(".son")!;
const boardElm: HTMLDivElement = document.querySelector("#board")!;
let cells: string[] = [];
let correctAnswers = 0;
let a: number = 0;
let aa: number = 0;

// HANDLE FUNCTIONS
function handleCell(cell: HTMLDivElement, cellIdx: number) {
	if (!cells[cellIdx]) {
		renderCells();
		console.log(5);
		aa = 0;
		a = 0;
		son.innerText = `${aa}`;

		return setTimeout(init, 1000);
	}

	correctAnswers++;
	cell.classList.add("active");

	if (correctAnswers === NUMBER_OF_INIT_CELLS) {
		// togri ga rekshiradi

		setTimeout(init, 1000);
	}
	a++;
	if (a === NUMBER_OF_INIT_CELLS) {
		aa++;
		a = 0;
		son.innerText = `${aa}`;
		console.log(aa);
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
	cells = new Array(NUMBER_OF_INIT_CELLS).fill("👍");
	const stayCells = new Array(NUMBER_OF_CELLS - NUMBER_OF_INIT_CELLS).fill("");

	cells = [...cells, ...stayCells].sort(() => Math.random() - 0.5);

	renderCells();
}

init();
