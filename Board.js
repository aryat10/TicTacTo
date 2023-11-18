import React, { useState } from "react"
import Sqare from "./Sqaure"


const Board = () => {
  const [state, setState] = useState(Array(9).fill(null))
  const [isXturn,setisXturn] = useState(true)
  const handle = (index) => {
    const copyState = {...state};
    copyState[index] = isXturn? "X" : "O"
    setState(copyState);
    setisXturn(!isXturn)
    
  }
  return (
    <div className="board-con">
      <h1>Welcome to the Game of TicTacTo</h1>
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
    </div>
  )
}





export default Board
