import React, { useState } from "react";

import Cell from "./Cell";
export default function GameContainer(props) {
  const { playerOne, playerTwo, dimension } = props.data;
  const [gameOver, setGameOver] = useState(false);
  const totalDim = dimension * dimension;
  const [board, setBoard] = useState(Array(totalDim).fill(null));
  const [whoseTurn, setwhoseTurn] = useState(1);

  const customStyle = {
    backgroundColor: "#0da192",
    display: "grid",
    gridTemplateColumns: `repeat(${dimension}, 1fr)`,
    gridTemplateRows: `repeat(${dimension}, 1fr)`,
    gridGap: "10px",
    marginTop: "50px"
  };
  const winnerCombination = function () {
    let winnerCombinations = [];
    //all combination in row
    for (let i = 0; i < dimension; i++) {
      let temp = [];
      for (let j = 0; j < dimension; j++) {
        temp.push(i.toString() + j.toString());
      }
      winnerCombinations.push(temp);
    }
    //all combinations in column
    for (let i = 0; i < dimension; i++) {
      let temp = [];
      for (let j = 0; j < dimension; j++) {
        temp.push(winnerCombinations[j][i]);
      }
      winnerCombinations.push(temp);
    }
    //all combination in diagonal
    let diagonal1 = [];
    let diagonal2 = [];
    for (let i = 0; i < dimension; i++) {
      for (let j = 0; j < dimension; j++) {
        if (i === j) diagonal1.push(i.toString() + j.toString());
        if (i + j === dimension - 1)
          diagonal2.push(i.toString() + j.toString());
      }
    }
    winnerCombinations.push(diagonal1);
    winnerCombinations.push(diagonal2);
    console.log(winnerCombinations);
  };
  const calculateWinner = (board) => {
    if (dimension === "3") {
      let winnerCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];
      for (let i = 0; i < winnerCombinations.length; i++) {
        const [a, b, c] = winnerCombinations[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
          return true;
        }
      }
    } else if (dimension === "4") {
      let winnerCombinations = [
        [0, 1, 2, 3],
        [4, 5, 6, 7],
        [8, 9, 10, 11],
        [12, 13, 14, 15],
        [0, 4, 8, 12],
        [1, 5, 9, 13],
        [2, 6, 10, 14],
        [3, 7, 11, 15],
        [0, 5, 10, 15],
        [3, 6, 9, 12]
      ];
      for (let i = 0; i < winnerCombinations.length; i++) {
        const [a, b, c, d] = winnerCombinations[i];
        if (
          board[a] &&
          board[a] === board[b] &&
          board[a] === board[c] &&
          board[a] === board[d]
        ) {
          return true;
        }
      }
    } else if (dimension === "5") {
      let winnerCombinations = [
        [0, 1, 2, 3, 4],
        [5, 6, 7, 8, 9],
        [10, 11, 12, 13, 14],
        [15, 16, 17, 18, 19],
        [20, 21, 22, 23, 24],
        [0, 5, 10, 15, 20],
        [1, 6, 11, 16, 21],
        [2, 7, 12, 17, 22],
        [3, 8, 13, 18, 23],
        [4, 9, 14, 19, 24],
        [0, 6, 12, 18, 24],
        [4, 8, 12, 16, 20]
      ];
      for (let i = 0; i < winnerCombinations.length; i++) {
        const [a, b, c, d, e] = winnerCombinations[i];
        if (
          board[a] &&
          board[a] === board[b] &&
          board[a] === board[c] &&
          board[a] === board[d] &&
          board[a] === board[e]
        ) {
          return true;
        }
      }
    } else if (dimension === "6") {
      let winnerCombinations = [
        [0, 1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10, 11],
        [12, 13, 14, 15, 16, 17],
        [18, 19, 20, 21, 22, 23],
        [24, 25, 26, 27, 28, 29],
        [30, 31, 32, 33, 34, 35],
        [0, 6, 12, 18, 24, 30],
        [1, 7, 13, 19, 25, 31],
        [2, 8, 14, 20, 26, 32],
        [3, 9, 15, 21, 27, 33],
        [4, 10, 16, 22, 28, 34],
        [5, 11, 17, 23, 29, 35],
        [0, 7, 14, 21, 28, 35],
        [5, 10, 15, 20, 25, 30]
      ];
      for (let i = 0; i < winnerCombinations.length; i++) {
        const [a, b, c, d, e, f] = winnerCombinations[i];
        if (
          board[a] &&
          board[a] === board[b] &&
          board[a] === board[c] &&
          board[a] === board[d] &&
          board[a] === board[e] &&
          board[a] === board[f]
        ) {
          return true;
        }
      }
    }
    return false;
  };

  const handleClick = (id) => {
    const boardCopy = [...board];

    if (gameOver || boardCopy[id]) return;

    boardCopy[id] = whoseTurn % 2 === 0 ? "X" : "O";
    setBoard(boardCopy);
    setwhoseTurn(() => whoseTurn + 1);

    if (calculateWinner(boardCopy) || whoseTurn === dimension * dimension) {
      setGameOver(!gameOver);
    }
  };

  let dimesnionArray = [];
  for (let i = 1; i <= dimension * dimension; i++) {
    dimesnionArray.push(i);
  }

  const replayGame = () => {
    setGameOver(!gameOver);
    setwhoseTurn(1);
    setBoard(Array(totalDim).fill(null));
  };

  const restartGame = () => {
    window.location.reload();
  };
  return (
    <>
      <div className="container container1" id="container1">
        <h1 className="text-center">
          Tic <span className="text-white">Tac</span> Toe
        </h1>

        <div className="text-center text-white mt-4">
          <small id="turn">
            <div>
              {calculateWinner(board) ? (
                <div>
                  <div className="winner">
                    {"Winner: " + (whoseTurn % 2 === 0 ? playerOne : playerTwo)}
                  </div>
                  <div className="space-around row" id="restart">
                    <div className="restart" onClick={replayGame}>
                      Replay
                    </div>
                    <div className="restart" onClick={restartGame}>
                      Restart
                    </div>
                  </div>
                </div>
              ) : (
                "Next Player: " + (whoseTurn % 2 === 0 ? "X" : "O")
              )}
            </div>
          </small>
        </div>
        <div style={customStyle} id="game-grid">
          {board.map((cell, i) => (
            <Cell key={i} value={cell} id={i} handleClick={handleClick} />
          ))}
        </div>

        {/* <div className="hide space-around row" id="restart">
          <div className="restart" onClick={replayGame}>
            Replay
          </div>
          <div className="restart" onClick={restartGame}>
            Restart
          </div>
        </div> */}
      </div>
    </>
  );
}
