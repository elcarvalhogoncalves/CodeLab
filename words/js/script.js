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
    "traia",
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
            // document.getElementById(letter).setAttribute("check", "true");
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

const reloadButton = document.getElementById("reload");

document.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "ArrowLeft":
            if(position > 0){
                position-=2;
            }
            play();
            break;
        case "ArrowRight":
            play();
            break;
        case "q":
            keyboardIt(event.key);
            break;
        case "w":
            keyboardIt(event.key);
            break;
        case "e":
            keyboardIt(event.key);
            break;
        case "r":
            keyboardIt(event.key);
            break;
        case "t":
            keyboardIt(event.key);
            break;
        case "y":
            keyboardIt(event.key);
            break;
        case "u":
            keyboardIt(event.key);
            break;
        case "i":
            keyboardIt(event.key);
            break;
        case "o":
            keyboardIt(event.key);
            break;
        case "p":
            keyboardIt(event.key);
            break;
        case "a":
            keyboardIt(event.key);
            break;
        case "s":
            keyboardIt(event.key);
            break;
        case "d":
            keyboardIt(event.key);
            break;
        case "f":
            keyboardIt(event.key);
            break;
        case "g":
            keyboardIt(event.key);
            break;
        case "h":
            keyboardIt(event.key);
            break;
        case "j":
            keyboardIt(event.key);
            break;
        case "k":
            keyboardIt(event.key);
            break;
        case "l":
            keyboardIt(event.key);
            break;
        case "Backspace":
            keyboardIt(event.key);
            break;
        case "z":
            keyboardIt(event.key);
            break;
        case "x":
            keyboardIt(event.key);
            break;
        case "c":
            keyboardIt(event.key);
            break;
        case "v":
            keyboardIt(event.key);
            break;
        case "b":
            keyboardIt(event.key);
            break;
        case "n":
            keyboardIt(event.key);
            break;
        case "m":
            keyboardIt(event.key);
            break;
        case "Enter":
            keyboardIt(event.key);
            break;
        default:
            break;
    }
});

function keyboardIt (letter){
    playSound("click");
    const playKey = (l) => {
        tableGame[turn][position] = l;
        play();
    };
    if(turn < 6 && winner == false){
        switch (letter) {
            case "q":
                if(q.getAttribute("check") == "false"){
                    playKey(letter);
                }
                break;
            case "w":
                if(w.getAttribute("check") == "false"){
                    playKey(letter);
                }
                break;
            case "e":
                if(e.getAttribute("check") == "false"){
                    playKey(letter);
                }
                break;
            case "r":
                if(r.getAttribute("check") == "false"){
                    playKey(letter);
                }
                break;
            case "t":
                if(t.getAttribute("check") == "false"){
                    playKey(letter);
                }
                break;
            case "y":
                if(y.getAttribute("check") == "false"){
                    playKey(letter);
                }
                break;
            case "u":
                if(u.getAttribute("check") == "false"){
                    playKey(letter);
                }
                break;
            case "i":
                if(i.getAttribute("check") == "false"){
                    playKey(letter);
                }
                break;
            case "o":
                if(o.getAttribute("check") == "false"){
                    playKey(letter);
                }
                break;
            case "p":
                if(p.getAttribute("check") == "false"){
                    playKey(letter);
                }
                break;
            case "a":
                if(a.getAttribute("check") == "false"){
                    playKey(letter);
                }
                break;
            case "s":
                if(s.getAttribute("check") == "false"){
                    playKey(letter);
                }
                break;
            case "d":
                if(d.getAttribute("check") == "false"){
                    playKey(letter);
                }
                break;
            case "f":
                if(f.getAttribute("check") == "false"){
                    playKey(letter);
                }
                break;
            case "g":
                if(g.getAttribute("check") == "false"){
                    playKey(letter);
                }
                break;
            case "h":
                if(h.getAttribute("check") == "false"){
                    playKey(letter);
                }
                break;
            case "j":
                if(j.getAttribute("check") == "false"){
                    playKey(letter);
                }
                break;
            case "k":
                if(k.getAttribute("check") == "false"){
                    playKey(letter);
                }
                break;
            case "l":
                if(l.getAttribute("check") == "false"){
                    playKey(letter);
                }
                break;
            case "Backspace":
                tableGame[turn][position] = "";
                if(position > 0){
                    position = position-2;
                } else {
                    position--;
                }
                play();
                break;
            case "z":
                if(z.getAttribute("check") == "false"){
                    playKey(letter);
                }
                break;
            case "x":
                if(x.getAttribute("check") == "false"){
                    playKey(letter);
                }
                break;
            case "c":
                if(c.getAttribute("check") == "false"){
                    playKey(letter);
                }
                break;
            case "v":
                if(v.getAttribute("check") == "false"){
                    playKey(letter);
                }
                break;
            case "b":
                if(b.getAttribute("check") == "false"){
                    playKey(letter);
                }
                break;
            case "n":
                if(n.getAttribute("check") == "false"){
                    playKey(letter);
                }
                break;
            case "m":
                if(m.getAttribute("check") == "false"){
                    playKey(letter);
                }
                break;
            case "Enter":
                if(tableGame[turn].includes("")){
                    playSound("error");
                    showMessage(`Use palavras com 5 letras.`);
                } else {
                    closeMessage();
                    turn++;
                    position = 0;
                    startGame(turn);
                    // flipEffect();
                    if(tableGame[turn-1].join('') == words){
                        setWinner();
                    } else if(turn > 5 && winner == false){
                        playSound("lose");
                        showResult();
                    }
                }
                break;
            default:
                break;
        }
    }
}

function flipEffect(){
    const rows = document.querySelectorAll(".table-row");
    const cells = rows[turn-1].querySelectorAll(".table-cell");
    cells.forEach((cell, index) => {
        cell.classList.add("flipEffect");
    });
}

function winnerEffect(){
    const rows = document.querySelectorAll(".table-row");
    const cells = rows[turn-1].querySelectorAll(".table-cell");
    cells.forEach((cell, index) => {
        setTimeout(() => {
            cell.classList.add("winnerEffect");
        }, 100*index);
    });
}

q.addEventListener("click", (letter) => {
    keyboardIt(printLetter(letter));
});

w.addEventListener("click", (letter) => {
    keyboardIt(printLetter(letter));
});
e.addEventListener("click", (letter) => {
    keyboardIt(printLetter(letter));
});
r.addEventListener("click", (letter) => {
    keyboardIt(printLetter(letter));
});
t.addEventListener("click", (letter) => {
    keyboardIt(printLetter(letter));
});
y.addEventListener("click", (letter) => {
    keyboardIt(printLetter(letter));
});
u.addEventListener("click", (letter) => {
    keyboardIt(printLetter(letter));
});
i.addEventListener("click", (letter) => {
    keyboardIt(printLetter(letter));
});
o.addEventListener("click", (letter) => {
    keyboardIt(printLetter(letter));
});
p.addEventListener("click", (letter) => {
    keyboardIt(printLetter(letter));
});
a.addEventListener("click", (letter) => {
    keyboardIt(printLetter(letter));
});
s.addEventListener("click", (letter) => {
    keyboardIt(printLetter(letter));
});
d.addEventListener("click", (letter) => {
    keyboardIt(printLetter(letter));
});
f.addEventListener("click", (letter) => {
    keyboardIt(printLetter(letter));
});
g.addEventListener("click", (letter) => {
    keyboardIt(printLetter(letter));
});
h.addEventListener("click", (letter) => {
    keyboardIt(printLetter(letter));
});
j.addEventListener("click", (letter) => {
    keyboardIt(printLetter(letter));
});
k.addEventListener("click", (letter) => {
    keyboardIt(printLetter(letter));
});
l.addEventListener("click", (letter) => {
    keyboardIt(printLetter(letter));
});
bs.addEventListener("click", (letter) => {
    keyboardIt("Backspace");
});
z.addEventListener("click", (letter) => {
    keyboardIt(printLetter(letter));
});
x.addEventListener("click", (letter) => {
    keyboardIt(printLetter(letter));
});
c.addEventListener("click", (letter) => {
    keyboardIt(printLetter(letter));
});
v.addEventListener("click", (letter) => {
    keyboardIt(printLetter(letter));
});
b.addEventListener("click", (letter) => {
    keyboardIt(printLetter(letter));
});
n.addEventListener("click", (letter) => {
    keyboardIt(printLetter(letter));
});
m.addEventListener("click", (letter) => {
    keyboardIt(printLetter(letter));
});
enter.addEventListener("click", () => {
    keyboardIt("Enter");
});

function setWinner(){
    playSound("win");
    winner = true;
    winnerEffect();
    showResult();
}

function showResult(){
    if(winner){
        document.querySelector(".modal").innerHTML = `<p>YOU WIN</p><p>Resposta: ${words}</p> <button id="reload">Jogar Novamente</button>`;
        document.querySelector(".modal").classList.add("win-color");
    } else {
        document.querySelector(".modal").innerHTML = `<p>YOU LOSE</p><p>Resposta: ${words}</p> <button id="reload">Jogar Novamente</button>`;
        document.querySelector(".modal").classList.add("lose-color");
    }
    document.getElementById("reload").addEventListener("click", () => {
        window.location.reload();
    })
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
}

function playSound(effect) {
    const sound = document.getElementById(effect);
    sound.pause
    switch (effect) {
        case "click":
            sound.volume = 0.05;
            break;
        case "win":
            sound.volume = 0.1;
            break;
        case "lose":
            sound.volume = 0.1;
            break;
        case "error":
            sound.volume = 0.1;
        default:
            break;  
    }
    var isPlaying = sound.currentTime > 0 && !sound.paused && !sound.ended 
    && sound.readyState > sound.HAVE_CURRENT_DATA;

    if (!isPlaying) {
        sound.play();
    }
}

startGame(turn);
