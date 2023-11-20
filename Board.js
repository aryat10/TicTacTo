import React, { useState } from "react"
import Sqare from "./Sqaure"


const Board = () => {
  const [state, setState] = useState(Array(9).fill(null))
  const [isXturn, setisXturn] = useState(true);

  const winner = () => {
    const winlogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [6, 4, 2],
      [7, 4, 3],
      [0, 3, 6],
      [1, 4, 7],
      [2, 4, 6],
      [0, 4, 8],
    ];
    for (let logic of winlogic) {
      const [a, b, c] = logic;
      if (state[a] != null && state[a] === state[b] && state[a] === state[c])
        return true;
    }
    return false;
  }
  const isWinner = winner();


  const handle = (index) => {
    const copyState = { ...state };
    copyState[index] = isXturn ? "X" : "O"
    setState(copyState);
    setisXturn(!isXturn)

  }
  return (
    <div className="board-con">
      <h1>Welcome to the Game of TicTacTo</h1>
      {isWinner ? ( 
      <> {isWinner} won the game !!! </>
    ) : (
          <>
            <div className="board-row">
            <Sqare onClick={() => handle(0)} value={state[0]} />
            <Sqare onClick={() => handle(1)} value={state[1]} />
            <Sqare onClick={() => handle(2)} value={state[2]} />
          </div>
          <div className="board-row">
            <Sqare onClick={() => handle(3)} value={state[3]} />
            <Sqare onClick={() => handle(4)} value={state[4]} />
            <Sqare onClick={() => handle(5)} value={state[5]} />
          </div>
          <div className="board-row">
            <Sqare onClick={() => handle(6)} value={state[6]} />
            <Sqare onClick={() => handle(7)} value={state[7]} />
            <Sqare onClick={() => handle(8)} value={state[8]} />
          </div>
          </>
        )}
    </div>
  )
}



export default Board
