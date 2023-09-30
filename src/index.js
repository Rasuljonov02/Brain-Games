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
var taimlar = document.querySelector(".taimlar");
var son = document.querySelector(".son");
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
var sanoq = 0;
function boyaydi() {
    var cellar = document.querySelectorAll(".cellar");
    cellar.forEach(function (cell, index) {
        cell.innerText = a[index] || "";
        cell.addEventListener("click", function () {
            // hato
            if (cell.innerText === "") {
                cell;
                cell.classList.add("gameover");
                cell.classList.add("winner");
                sanoq = 0;
                son.innerText = "".concat(sanoq);
                body.style.pointerEvents = "none";
                setTimeout(function () {
                    cellchiz();
                    boyaydi();
                    body.style.pointerEvents = "all";
                }, 2000);
            }
            else {
                // togri
                o++;
                if (o === 6) {
                    setTimeout(function () {
                        cellchiz();
                        boyaydi();
                        body.style.pointerEvents = "all";
                    }, 2000);
                    body.style.pointerEvents = "none";
                    sanoq++;
                    o = 0;
                    son.innerText = "".concat(sanoq);
                }
                cell.classList.add("active");
            }
        });
    });
    // koesatib kegin tozalayabdi
    setTimeout(function () {
        cellar.forEach(function (cell) {
            cell.classList.remove("active");
        });
    }, 2000);
}
var s = 30;
var m = 0;
var aaaa = setInterval(function () {
    if (s === 0) {
        // clearInterval(aaaa);
        s = 30;
        cellchiz();
        boyaydi();
    }
    taimlar.innerText = "".concat(m < 10 ? "0" + m : m, " : ").concat(s < 10 ? "0" + s : s);
    s--;
}, 1000);






