var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// import "./main.css";
var contener = document.querySelector("#contener");
var body = document.querySelector("body");
var a;
cellchiz();
boyaydi();
function cellchiz() {
    var icons = ["👍", "", "👍", "", "", "👍", "", ""];
    a = __spreadArray(__spreadArray([], icons, true), icons, true).sort(function () { return 0.5 - Math.random(); });
    contener.innerHTML = "";
    for (var i = 0; i < 16; i++) {
        var cell = document.createElement("p");
        cell.className = "cell cellar active";
        cell.textContent = "Cell " + (i + 1);
        contener.appendChild(cell);
    }
}
var o = 0;
function boyaydi() {
    var cellar = document.querySelectorAll(".cellar");
    cellar.forEach(function (cell, index) {
        cell.innerText = a[index] || "";
        cell.addEventListener("click", function () {
            if (cell.innerText === "") {
                cell.classList.add("gameover");
                cell.classList.add("winner");
                body.style.pointerEvents = "none";
                setTimeout(function () {
                    cellchiz();
                    boyaydi();
                    body.style.pointerEvents = "all";
                }, 2000);
            }
            else {
                o++;
                if (o === 6) {
                    setTimeout(function () {
                        cellchiz();
                        boyaydi();
                    }, 2000);
                    o = 0;
                }
                cell.classList.add("active");
            }
        });
    });
    setTimeout(function () {
        cellar.forEach(function (cell) {
            cell.classList.remove("active");
        });
    }, 2000);
}
