const wordList = 
[
    "gerir",   
    "apito",
    "apoia",
    "ativo",    
    "baile",
    "baixa",
    "cerco",   
    "danou",
    "ergui",    
    "filme",   
    "forro",    
    "gelou",
    "gemas",    
    "guias",
    "jogue",    
    "livre",
    "livro",   
    "lucro",    
    "noiva",
    "pesca",   
    "puxei",   
    "subiu",
    "topou",
    "toque",
    "traís",
    "trema",
    "turbo",    
    "votei",
    "votem",
    "zerou",
    "zomba",
];


function wordsGenerator() {
    const indiceAleatorio = Math.floor(Math.random() * wordList.length);
    return wordList[indiceAleatorio];
};

const words = wordsGenerator();
console.log(words, "");

let turn = 0;
let position = 0;

const tableGame = [
    ["", "", "", "", ""], 
    ["", "", "", "", ""], 
    ["", "", "", "", ""], 
    ["", "", "", "", ""], 
    ["", "", "", "", ""], 
    ["", "", "", "", ""]
];

let winner = false;

function startGame(turn) {
    document.querySelector(".table-game").innerHTML = "";
    let i = 0;
    tableGame.map((tableRow) => {
        const row = document.createElement("div");
        row.classList.add("table-row");
        let j = 0;
        tableRow.map((tableCell) => {
            const cell = document.createElement("div");
            cell.classList.add("table-cell");
            if (i == turn) {
                if(j == position){
                    cell.classList.add("turn-focus");
                } else {
                    cell.classList.add("turn");
                }
                cell.innerHTML = tableGame[i][j];
                cell.setAttribute("id", j);
                cell.addEventListener('click', () => {
                    setNewPosition(Number(cell.getAttribute("id")));
                  });
            } else if(i < turn) {
                words.includes(tableGame[i][j]) ? tableGame[i][j] == words[j] ? cell.classList.add("ok") : cell.classList.add("right") : cell.classList.add("wrong");
                words.includes(tableGame[i][j]) ? tableGame[i][j] == words[j] ? checkKeyboard(tableGame[i][j], "ok") : checkKeyboard(tableGame[i][j], "right") : checkKeyboard(tableGame[i][j], "wrong");
                cell.classList.add("table-cell");
                cell.innerHTML = tableGame[i][j];                
                ;
            }
            row.appendChild(cell);
            j++;
        });
        document.querySelector(".table-game").appendChild(row);
        i++;
    });
}

function checkKeyboard(letter, status){
    console.log("AADJFLÇKMÇMÇ----");
    const stts = status;
    switch (stts) {
        case "ok":
            document.getElementById(letter).classList.add("ok");
            break;
        case "right":
            document.getElementById(letter).classList.add("right");
            break;
        case "wrong":
            document.getElementById(letter).classList.add("wrong-key");
            document.getElementById(letter).setAttribute("check", "true");
            break;
        default:
            break;
    }
    
}

function setNewPosition(newPosition){
    position = newPosition;
    startGame(turn);
}

const q = document.getElementById("q");
const w = document.getElementById("w");
const e = document.getElementById("e");
const r = document.getElementById("r");
const t = document.getElementById("t");
const y = document.getElementById("y");
const u = document.getElementById("u");
const i = document.getElementById("i");
const o = document.getElementById("o");
const p = document.getElementById("p");
const a = document.getElementById("a");
const s = document.getElementById("s");
const d = document.getElementById("d");
const f = document.getElementById("f");
const g = document.getElementById("g");
const h = document.getElementById("h");
const j = document.getElementById("j");
const k = document.getElementById("k");
const l = document.getElementById("l");
const bs = document.getElementById("bs");
const z = document.getElementById("z");
const x = document.getElementById("x");
const c = document.getElementById("c");
const v = document.getElementById("v");
const b = document.getElementById("b");
const n = document.getElementById("n");
const m = document.getElementById("m");
const enter = document.getElementById("enter");

function printLetter(letter){
    return letter.target.innerHTML;
}


function play(){
    if(position <4){
        position++;
    }
    startGame(turn);
}

q.addEventListener("click", (letter) => {
    if(q.getAttribute("check") == "false"){
        console.log(printLetter(letter));
        tableGame[turn][position] = printLetter(letter);
        play();
    }
});
w.addEventListener("click", (letter) => {
    if(w.getAttribute("check") == "false"){
        console.log(printLetter(letter));
        tableGame[turn][position] = printLetter(letter);
        play();
    }
});
e.addEventListener("click", (letter) => {
    if(e.getAttribute("check") == "false"){
        console.log(printLetter(letter));
        tableGame[turn][position] = printLetter(letter);
        play();
    }
});
r.addEventListener("click", (letter) => {
    if(r.getAttribute("check") == "false"){
        console.log(printLetter(letter));
        tableGame[turn][position] = printLetter(letter);
        play();
    }
});
t.addEventListener("click", (letter) => {
    if(t.getAttribute("check") == "false"){
        console.log(printLetter(letter));
        tableGame[turn][position] = printLetter(letter);
        play();
    }
});
y.addEventListener("click", (letter) => {
    if(y.getAttribute("check") == "false"){
        console.log(printLetter(letter));
        tableGame[turn][position] = printLetter(letter);
        play();
    }
});
u.addEventListener("click", (letter) => {
    if(u.getAttribute("check") == "false"){
        console.log(printLetter(letter));
        tableGame[turn][position] = printLetter(letter);
        play();
    }
});
i.addEventListener("click", (letter) => {
    if(i.getAttribute("check") == "false"){
        console.log(printLetter(letter));
        tableGame[turn][position] = printLetter(letter);
        play();
    }
});
o.addEventListener("click", (letter) => {
    if(o.getAttribute("check") == "false"){
        console.log(printLetter(letter));
        tableGame[turn][position] = printLetter(letter);
        play();
    }
});
p.addEventListener("click", (letter) => {
    if(p.getAttribute("check") == "false"){
        console.log(printLetter(letter));
        tableGame[turn][position] = printLetter(letter);
        play();
    }
});
a.addEventListener("click", (letter) => {
    if(a.getAttribute("check") == "false"){
        console.log(printLetter(letter));
        tableGame[turn][position] = printLetter(letter);
        play();
    }
});
s.addEventListener("click", (letter) => {
    if(s.getAttribute("check") == "false"){
        console.log(printLetter(letter));
        tableGame[turn][position] = printLetter(letter);
        play();
    }
});
d.addEventListener("click", (letter) => {
    if(d.getAttribute("check") == "false"){
        console.log(printLetter(letter));
        tableGame[turn][position] = printLetter(letter);
        play();
    }
});
f.addEventListener("click", (letter) => {
    if(f.getAttribute("check") == "false"){
        console.log(printLetter(letter));
        tableGame[turn][position] = printLetter(letter);
        play();
    }
});
g.addEventListener("click", (letter) => {
    if(g.getAttribute("check") == "false"){
        console.log(printLetter(letter));
        tableGame[turn][position] = printLetter(letter);
        play();
    }
});
h.addEventListener("click", (letter) => {
    if(h.getAttribute("check") == "false"){
        console.log(printLetter(letter));
        tableGame[turn][position] = printLetter(letter);
        play();
    }
});
j.addEventListener("click", (letter) => {
    if(j.getAttribute("check") == "false"){
        console.log(printLetter(letter));
        tableGame[turn][position] = printLetter(letter);
        play();
    }
});
k.addEventListener("click", (letter) => {
    if(k.getAttribute("check") == "false"){
        console.log(printLetter(letter));
        tableGame[turn][position] = printLetter(letter);
        play();
    }
});
l.addEventListener("click", (letter) => {
    if(l.getAttribute("check") == "false"){
        console.log(printLetter(letter));
        tableGame[turn][position] = printLetter(letter);
        play();
    }
});
bs.addEventListener("click", (letter) => {
    if(bs.getAttribute("check") == "false"){
        console.log(printLetter(letter));
        tableGame[turn][position] = printLetter(letter);
        play();
    }
});
z.addEventListener("click", (letter) => {
    if(z.getAttribute("check") == "false"){
        console.log(printLetter(letter));
        tableGame[turn][position] = printLetter(letter);
        play();
    }
});
x.addEventListener("click", (letter) => {
    if(x.getAttribute("check") == "false"){
        console.log(printLetter(letter));
        tableGame[turn][position] = printLetter(letter);
        play();
    }
});
c.addEventListener("click", (letter) => {
    if(c.getAttribute("check") == "false"){
        console.log(printLetter(letter));
        tableGame[turn][position] = printLetter(letter);
        play();
    }
});
v.addEventListener("click", (letter) => {
    if(v.getAttribute("check") == "false"){
        console.log(printLetter(letter));
        tableGame[turn][position] = printLetter(letter);
        play();
    }
});
b.addEventListener("click", (letter) => {
    if(b.getAttribute("check") == "false"){
        console.log(printLetter(letter));
        tableGame[turn][position] = printLetter(letter);
        play();
    }
});
n.addEventListener("click", (letter) => {
    if(n.getAttribute("check") == "false"){
        console.log(printLetter(letter));
        tableGame[turn][position] = printLetter(letter);
        play();
    }
});
m.addEventListener("click", (letter) => {
    if(m.getAttribute("check") == "false"){
        console.log(printLetter(letter));
        tableGame[turn][position] = printLetter(letter);
        play();
    }
});
enter.addEventListener("click", () => {
    if(tableGame[turn].includes("")){
        showMessage(`Use palavras com 5 letras.`);
    } else {
        if(tableGame[turn].join('') == words){
            setWinner();
        }
        turn++;
        position = 0;
        startGame(turn);
    }
});

function setWinner(){
    winner = true;
    const listRows = document.querySelectorAll(".table-row");
    listRows[turn].classList.add("winnerEffect");

}

function showMessage (message) {
    document.querySelector(".message").innerHTML = message;
    const listRows = document.querySelectorAll(".table-row");
    listRows[turn].classList.add("effect");
    setTimeout(() => {
        listRows[turn].classList.remove("effect");
    },700)
    
}

function closeMessage () {
    document.querySelector(".message").innerHTML = "";
    const listRows = document.querySelectorAll(".table-row");
    listRows[turn].classList.remove("effect");
}


startGame(turn);
