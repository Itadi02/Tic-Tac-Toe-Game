let btnRef = document.querySelectorAll(".button-option");
let popRef = document.querySelector(".popup");
let newgameBtn = document.getElementById("newgame");
let restartBtn = document.getElementById("restart");
let msgRef = document.getElementById("message");

//disable all
const disableButtons = () => {
  btnRef.forEach((element) => {
    element.disabled = true;
    //enable popup
    popRef.classList.remove("hide");
  });
};

//enable all buttons for new star
const enableButtons = () => {
  btnRef.forEach((element) => {
    element.innerText = "";
    element.disabled = false;
  });
  popRef.classList.add("hide");
};

//newgamw
newgameBtn.addEventListener("click", () => {
  count = 0;
  enableButtons();
});
restartBtn.addEventListener("click", () => {
  count = 0;
  enableButtons();
});
// this function executed if player win

const winFunction = (letter) => {
  disableButtons();
  if (letter == "X") {
    msgRef.innerHTML = "&#x1f389; <br> 'X' Wins";
  } else {
    msgRef.innerHTML = "&#x1f389; <br> 'O' Wins";
  }
};
//function for draw
const drawFunction = () => {
  disableButtons();
  msgRef.innerHTML = "&#x1F60E; <br> It's a Draw";
};
//winning patteern

let winningPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
];
//winner
const winChecker = () => {
  for (let i of winningPattern) {
    let [element1, element2, element3] = [
      btnRef[i[0]].innerText,
      btnRef[i[1]].innerText,
      btnRef[i[2]].innerText,
    ];
    if (element1 != "" && element2 != "" && element3 != "") {
      if (element1 == element2 && element2 == element3) {
        winFunction(element1);
      }
    }
  }
};
//player X
let xTurn = true;
let count = 0;
//display x/o onclick
btnRef.forEach((element) => {
  element.addEventListener("click", () => {
    if (xTurn) {
      xTurn = false;
      element.innerText = "X";
      element.disabled = true;
    } else {
      xTurn = true;
      element.innerText = "O";
      element.disabled = true;
    }
    count += 1;
    if (count === 9) {
      drawFunction();
    }
    winChecker();
  });
});
window.onload = enableButtons;
