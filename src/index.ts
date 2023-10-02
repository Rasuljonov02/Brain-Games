import "./main.css";
import { NUMBER_OF_CELLS, NUMBER_OF_INIT_CELLS } from "./data";
const son: HTMLParagraphElement = document.querySelector(".son")!;
const boardElm: HTMLDivElement = document.querySelector("#board")!;
const soat: HTMLParagraphElement = document.querySelector(".soat")!;
let cells: string[] = [];

let correctAnswers = 0;
let a: number = 0;
let aa: number = 0;
let winner1: number = 0;
let winner2: number = 9;
let b: number = 4;
let col: number = 3;
let row: number = 3;

// HANDLE FUNCTIONS
function handleCell(cell: HTMLDivElement, cellIdx: number) {
	if (!cells[cellIdx]) {
		console.log(5);
		aa = 0;
		a = 0;
		son.innerText = ` Level${aa}`;
		winner1 = 0;
		winner2 = 0;
		winner2 = col * row;
		b = 0;
		return setTimeout(init, 1000);
	}

	correctAnswers++;
	cell.classList.add("active");

	if (correctAnswers === NUMBER_OF_INIT_CELLS + winner1) {
		// togri ga rekshiradi

		setTimeout(init, 1000);
	}

	a++;

	if (a === NUMBER_OF_INIT_CELLS + winner1) {
		// togriga rekshiradi va chizadi

		aa++;
		winner1++;
		a = 0;
		son.innerText = `Level ${aa}`;
		console.log(aa);
		if (winner1 % 2 == 0) {
			col++;
			row++;
			winner2 = col * row;
			boardElm.style.gridTemplateColumns = `repeat(${b}, 1fr)`;
			boardElm.style.gridTemplateRows = `repeat(${b}, 1fr)`;
			console.log(winner2);

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
	cells = new Array(NUMBER_OF_INIT_CELLS + winner1).fill("👍");
	const stayCells = new Array(winner2 - (NUMBER_OF_INIT_CELLS + winner1)).fill(""); // shu qatorda hato
	console.log(winner2);

	cells = [...cells, ...stayCells].sort(() => Math.random() - 0.5);

	renderCells();
}
let s: number = 29;
let sekund = setInterval(() => {
	if (s === 0) {
		setTimeout(init, 0);
		s = 29;
		// clearInterval(sekund);
	}
	soat.innerText = `Taim 00:${s < 10 ? "0" + s : s}`;

	s--;
}, 1000);

init();
