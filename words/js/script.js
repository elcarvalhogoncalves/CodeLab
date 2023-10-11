const words = "coisa";

const turn = 1;

const tableGame = [
    ["m", "o", "i", "t", "a"], 
    ["", "", "", "", ""], 
    ["", "", "", "", ""], 
    ["", "", "", "", ""], 
    ["", "", "", "", ""], 
    ["", "", "", "", ""]
];

function startGame(turn, letter, position) {
    let i = 0;
    tableGame.map((tableRow) => {
        const row = document.createElement("div");
        row.classList.add("table-row");
        let j = 0;
        tableRow.map((tableCell) => {
            const cell = document.createElement("div");
            cell.classList.add("table-cell");
            if (i == turn) {
                cell.classList.add("turn");
            } else if(i < turn) {
                words.includes(tableGame[i][j]) ? cell.classList.add("ok") : cell.classList.add("wrong");
                cell.innerHTML = tableGame[i][j];                
            }
            row.appendChild(cell);
            j++;
        });
        document.querySelector(".table-game").appendChild(row);
        i++;
    });
}

startGame(turn);