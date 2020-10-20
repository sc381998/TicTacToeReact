import React, { useState } from "react";
import "./styles.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import StartGame from "./components/StartGame";
import GameContainer from "./components/GameContainer";

export default function App() {
  const [data, setData] = useState({
    playerOne: "X",
    playerTwo: "O",
    dimension: "3"
  });

  function handleUpdate(event) {
    // console.log(event);
    const { name, value } = event.target;

    setData((prevValue) => {
      if (name === "playerOne") {
        return {
          playerOne: value,
          playerTwo: prevValue.playerTwo,
          dimension: prevValue.dimension
        };
      } else if (name === "playerTwo") {
        return {
          playerOne: prevValue.playerOne,
          playerTwo: value,
          dimension: prevValue.dimension
        };
      } else {
        return {
          playerOne: prevValue.playerOne,
          playerTwo: prevValue.playerTwo,
          dimension: value
        };
      }
    });
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <StartGame data={data} handleUpdate={handleUpdate} {...props} />
          )}
        />
        <Route
          exact
          path="/game"
          render={(props) => <GameContainer data={data} {...props} />}
        />
      </Switch>
    </BrowserRouter>
  );
}

// const replayGame = () => {
//   let game_grid = document.getElementById("game-grid");
//   game_grid.classList.remove("hide");
//   game_grid.classList.add("game-grid");

//   let win1 = document.getElementsByClassName("winner")[0];
//   let win2 = document.getElementsByClassName("winner")[1];
//   win1.classList.add("hide");
//   win2.classList.add("hide");
//   document.getElementById("restart").classList.add("hide");
//   if (gameOver) game_grid.classList.remove("xoWinner");

//   for (let i = 0; i < dimension; i++) {
//     for (let j = 0; j < dimension; j++) {
//       let cell = document.createElement("div");
//       cell.addEventListener("click", (event) => handleClick(cell, i, j));
//       cell.className = "cell";
//       game_grid.appendChild(cell);
//     }
//   }
//   gameOver = false;
//   win = false;
//   whoseTurn = 0;
//   board = [];
//   for (let i = 0; i < dimension; i++) {
//     let temp = [];
//     for (let j = 0; j < dimension; j++) {
//       temp.push("");
//     }
//     board.push(temp);
//   }
// };
// const restartGame = () => {
//   window.location.reload();
// };
// let players = [];
// let whoseTurn = 0;
// let gameOver = false;
// let xScore = 0;
// let oScore = 0;
// let win = false;
// let player1 = "";
// let player2 = "";
// let dimension = 3;
// let board = [];
// let winnerCombinations = [];
// const makeGrid = () => {
//   dimension = document.getElementById("dimension").value;

//   dimension = parseInt(dimension);
//   allCombinations();
//   console.log(winnerCombinations);
//   let game_grid = document.getElementById("game-grid");
//   game_grid.style.gridTemplateColumns = `repeat(${dimension}, 1fr)`;
//   game_grid.style.gridTemplateRows = `repeat(${dimension}, 1fr)`;

//   for (let i = 0; i < dimension; i++) {
//     for (let j = 0; j < dimension; j++) {
//       let cell = document.createElement("div");
//       cell.addEventListener("click", (event) => handleClick(cell, i, j));
//       cell.className = "cell";
//       game_grid.appendChild(cell);
//     }
//   }
//   for (let i = 0; i < dimension; i++) {
//     let temp = [];
//     for (let j = 0; j < dimension; j++) {
//       temp.push("");
//     }
//     board.push(temp);
//   }
// };
// const startGame = () => {
//   makeGrid();
//   let input1 = document.getElementById("p1");
//   let input2 = document.getElementById("p2");
//   let dim = document.getElementById("dimension").value;

//   if (input1 != null) {
//     player1 = input1.value;
//   } else {
//     player1 = "X";
//   }
//   if (input2 != null) {
//     player2 = input2.value;
//   } else {
//     player2 = "O";
//   }
//   if (isEmpty(player1)) {
//     document.getElementById("title").style.margin = "0";
//     document.getElementById("alertPlayer").classList.remove("hide");
//     document.getElementById("p1").style.border = "1px solid red";
//     return;
//   }
//   if (isEmpty(player2)) {
//     document.getElementById("title").style.margin = "0";
//     document.getElementById("alertPlayer").classList.remove("hide");
//     document.getElementById("p1").style.border = "1px solid white";
//     document.getElementById("p2").style.border = "1px solid red";
//     return;
//   }
//   if (isEmpty(dim)) {
//     document.getElementById("alertPlayer").classList.add("hide");
//     document.getElementById("title").style.margin = "0";
//     document.getElementById("alertPlayer1").classList.remove("hide");
//     document.getElementById("p2").style.border = "1px solid white";
//     document.getElementById("p1").style.border = "1px solid white";
//     document.getElementById("dimension").style.border = "1px solid red";
//     return;
//   }

//   input1.setAttribute("disabled", true);
//   input2.setAttribute("disabled", true);
//   players.push(player1);
//   players.push(player2);
//   //console.log(players);
//   document.getElementById("xplayer").innerHTML += player1;
//   document.getElementById("oplayer").innerHTML += player2;
//   let cont1 = document.getElementById("container1");
//   cont1.classList.remove("hide");
//   let cont0 = document.getElementById("container0");
//   cont0.classList.add("hide");
// };

// const isEmpty = (value) => !value || !value.trim();

// const allCombinations = () => {
//   winnerCombinations = [];
//   //all combination in row
//   for (let i = 0; i < dimension; i++) {
//     let temp = [];
//     for (let j = 0; j < dimension; j++) {
//       temp.push(i.toString() + j.toString());
//     }
//     winnerCombinations.push(temp);
//   }
//   //all combinations in column
//   for (let i = 0; i < dimension; i++) {
//     let temp = [];
//     for (let j = 0; j < dimension; j++) {
//       temp.push(winnerCombinations[j][i]);
//     }
//     winnerCombinations.push(temp);
//   }
//   //all combination in diagonal
//   let diagonal1 = [];
//   let diagonal2 = [];
//   for (let i = 0; i < dimension; i++) {
//     for (let j = 0; j < dimension; j++) {
//       if (i === j) diagonal1.push(i.toString() + j.toString());
//       if (i + j === dimension - 1) diagonal2.push(i.toString() + j.toString());
//     }
//   }
//   winnerCombinations.push(diagonal1);
//   winnerCombinations.push(diagonal2);
//   console.log(winnerCombinations);
// };

// const isWinner = () => {
//   for (let i = 0; i < winnerCombinations.length; i++) {
//     if (dimension === 3) {
//       if (
//         board[winnerCombinations[i][0][0]][winnerCombinations[i][0][1]] !==
//           "" &&
//         board[winnerCombinations[i][0][0]][winnerCombinations[i][0][1]] ===
//           board[winnerCombinations[i][1][0]][winnerCombinations[i][1][1]] &&
//         board[winnerCombinations[i][0][0]][winnerCombinations[i][0][1]] ===
//           board[winnerCombinations[i][2][0]][winnerCombinations[i][2][1]]
//       ) {
//         win = true;
//         return true;
//       }
//     }

//     if (dimension === 4) {
//       if (
//         board[winnerCombinations[i][0][0]][winnerCombinations[i][0][1]] !==
//           "" &&
//         board[winnerCombinations[i][0][0]][winnerCombinations[i][0][1]] ===
//           board[winnerCombinations[i][1][0]][winnerCombinations[i][1][1]] &&
//         board[winnerCombinations[i][0][0]][winnerCombinations[i][0][1]] ===
//           board[winnerCombinations[i][2][0]][winnerCombinations[i][2][1]] &&
//         board[winnerCombinations[i][0][0]][winnerCombinations[i][0][1]] ===
//           board[winnerCombinations[i][3][0]][winnerCombinations[i][3][1]]
//       ) {
//         win = true;
//         return true;
//       }
//     }
//     if (dimension === 5) {
//       if (
//         board[winnerCombinations[i][0][0]][winnerCombinations[i][0][1]] !==
//           "" &&
//         board[winnerCombinations[i][0][0]][winnerCombinations[i][0][1]] ===
//           board[winnerCombinations[i][1][0]][winnerCombinations[i][1][1]] &&
//         board[winnerCombinations[i][0][0]][winnerCombinations[i][0][1]] ===
//           board[winnerCombinations[i][2][0]][winnerCombinations[i][2][1]] &&
//         board[winnerCombinations[i][0][0]][winnerCombinations[i][0][1]] ===
//           board[winnerCombinations[i][3][0]][winnerCombinations[i][3][1]] &&
//         board[winnerCombinations[i][0][0]][winnerCombinations[i][0][1]] ===
//           board[winnerCombinations[i][4][0]][winnerCombinations[i][4][1]]
//       ) {
//         win = true;
//         return true;
//       }
//     }
//     if (dimension === 6) {
//       if (
//         board[winnerCombinations[i][0][0]][winnerCombinations[i][0][1]] !==
//           "" &&
//         board[winnerCombinations[i][0][0]][winnerCombinations[i][0][1]] ===
//           board[winnerCombinations[i][1][0]][winnerCombinations[i][1][1]] &&
//         board[winnerCombinations[i][0][0]][winnerCombinations[i][0][1]] ===
//           board[winnerCombinations[i][2][0]][winnerCombinations[i][2][1]] &&
//         board[winnerCombinations[i][0][0]][winnerCombinations[i][0][1]] ===
//           board[winnerCombinations[i][3][0]][winnerCombinations[i][3][1]] &&
//         board[winnerCombinations[i][0][0]][winnerCombinations[i][0][1]] ===
//           board[winnerCombinations[i][4][0]][winnerCombinations[i][4][1]] &&
//         board[winnerCombinations[i][0][0]][winnerCombinations[i][0][1]] ===
//           board[winnerCombinations[i][5][0]][winnerCombinations[i][5][1]]
//       ) {
//         win = true;
//         return true;
//       }
//     }
//   }
//   return false;
// };

// const handleClick = (cell, i, j) => {
//   const el = cell;
//   if (el.innerHTML !== "" || gameOver) return;
//   // let id = el.id;
//   // let i = parseInt(id[0]);
//   // let j = parseInt(id[1]);

//   board[i][j] = whoseTurn % 2 === 0 ? "X" : "O";
//   if (board[i][j] === "O") el.classList.add("text-white");
//   el.innerHTML = board[i][j];
//   //console.log(board);
//   document.getElementById("turn").innerHTML = `${
//     whoseTurn % 2 === 0 ? "O" : "X"
//   } Turn`;

//   if (isWinner()) {
//     let player = players[whoseTurn % 2];
//     let gameGrid = document.getElementById("game-grid");
//     gameGrid.classList.remove("game-grid");

//     if (player === player1) {
//       gameGrid.innerHTML = `<div class="winner">${players[0]}</div><div id="winner" class="winner">Winner!</div>`;
//       //document.getElementsByClassName("xWinner")[0].innerHTML = players[0];
//       window.localStorage.setItem("xScore", ++xScore);
//       window.localStorage.setItem("oScore", oScore);
//     } else {
//       gameGrid.innerHTML = `<div class="winner">${players[1]}</div><div id="winner" class="winner">Winner!</div>`;
//       window.localStorage.setItem("oScore", ++oScore);
//       window.localStorage.setItem("xScore", xScore);
//     }
//     document.getElementsByClassName(
//       "xScore"
//     )[0].innerHTML = localStorage.getItem("xScore");
//     document.getElementsByClassName(
//       "oScore"
//     )[0].innerHTML = localStorage.getItem("oScore");

//     //gameGrid.innerHTML = `<div id="winner" class="winner">Winner!</div>`;
//     document.getElementById("turn").innerHTML = "Game Over";
//     //document.getElementById("winner").classList.remove("hide");
//     document.getElementById("restart").classList.remove("hide");
//     gameOver = true;
//     return;
//   }

//   whoseTurn++;

//   if (whoseTurn === dimension * dimension) {
//     let gameGrid = document.getElementById("game-grid");
//     gameGrid.classList.remove("game-grid");

//     gameGrid.classList.add("xoWinner");
//     gameGrid.innerHTML = `<div id="winner" class="winner">Draw!</div>`;

//     document.getElementById("turn").innerHTML = "Game Over";
//     document.getElementById("restart").classList.remove("hide");
//     gameOver = true;
//     return;
//   }
// };

// const replayGame = () => {
//   let game_grid = document.getElementById("game-grid");
//   game_grid.classList.remove("hide");
//   game_grid.classList.add("game-grid");

//   let win1 = document.getElementsByClassName("winner")[0];
//   let win2 = document.getElementsByClassName("winner")[1];
//   win1.classList.add("hide");
//   win2.classList.add("hide");
//   document.getElementById("restart").classList.add("hide");
//   if (gameOver) game_grid.classList.remove("xoWinner");

//   for (let i = 0; i < dimension; i++) {
//     for (let j = 0; j < dimension; j++) {
//       let cell = document.createElement("div");
//       cell.addEventListener("click", (event) => handleClick(cell, i, j));
//       cell.className = "cell";
//       game_grid.appendChild(cell);
//     }
//   }
//   gameOver = false;
//   win = false;
//   whoseTurn = 0;
//   board = [];
//   for (let i = 0; i < dimension; i++) {
//     let temp = [];
//     for (let j = 0; j < dimension; j++) {
//       temp.push("");
//     }
//     board.push(temp);
//   }
// };
// const restartGame = () => {
//   window.location.reload();
// };
