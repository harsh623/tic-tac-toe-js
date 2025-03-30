let currentPlayer = "X";
let array = Array(9).fill(null);

function checkWinner() {
    if (
        ( 
            (array[0] != null && array[0] === array[1] && array[1] === array[2]) ||
            (array[0] != null && array[0] === array[3] && array[3] === array[6]) ||
            (array[0] != null && array[0] === array[4] && array[4] === array[8]) ||
            (array[1] != null && array[1] === array[4] && array[4] === array[7]) ||
            (array[2] != null && array[2] === array[5] && array[5] === array[8]) ||
            (array[3] != null && array[3] === array[4] && array[4] === array[5]) ||
            (array[6] != null && array[6] === array[7] && array[7] === array[8]) ||
            (array[6] != null && array[6] === array[4] && array[4] === array[2])
        )
    )
    return true;

    if (!array.some((e) => e === null)) {
        document.write("Draw")
    }
    return false;
}

function changeCurrentPlayer() {
    currentPlayer = currentPlayer == "X" ? "0": "X";
}

function handleClick (ele) {
    const id = Number(ele.id);
    if (array[id] != null) return;
    array[id] = currentPlayer;
    ele.innerText = currentPlayer;
    if (checkWinner()) {
        document.getElementById("success").innerText = "Successs"
        return;
    }
    changeCurrentPlayer();
    console.log("ell", array);
}