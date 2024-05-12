let h2 = document.querySelector("h2");
let btn = document.querySelector("#resetBtn");
let boxes = document.querySelectorAll(".box");

let turnX = true;   // turn for X

let winPatterns =
    [[0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]];




let checkWinner = () => {
    for (pattern of winPatterns) {
        let pos1Value = boxes[pattern[0]].innerText;
        let pos2Value = boxes[pattern[1]].innerText;
        let pos3Value = boxes[pattern[2]].innerText;
        
        if(pos1Value != '' && pos2Value != '' && pos3Value != ''){
            if(pos1Value === pos2Value && pos2Value === pos3Value){
                h2.innerText = `Winner is ${pos1Value}`;
                h2.classList.add("winnerClass");

                disableAllBoxes();
            }
        }

    }
}

function disableAllBoxes(){
    for(box of boxes){
        box.disabled = true;
    }
}

function enableAllBoxes(){
    for(box of boxes){
        box.disabled = false;
        box.innerText = '';
    }
}

function reset (){
    turnX = true;
    enableAllBoxes();
    h2.innerText = `Turn for X`;
    h2.classList.remove("winnerClass");
}




for (box of boxes) {
    box.addEventListener("click", function () {
        if (turnX) {
            this.innerText = 'X';
            h2.innerText = `Turn for O`;
            turnX = false;
        } else {
            this.innerText = 'O';
            h2.innerText = `Turn for X`;
            turnX = true;
        }

        this.disabled = true;

        checkWinner();


    })
}

btn.addEventListener("click" , reset);