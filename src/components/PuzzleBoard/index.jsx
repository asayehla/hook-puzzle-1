import React, { useState, useEffect } from 'react';
import { StyledBoard, StyledBoardWrapper } from './style';
import Cell from '../Cell';
import buildMatrix from '../../buildMatrix';

const PuzzleBoard = props => {
  const gameNumbers = Object.values(props.array);
  const [gameBoard, setGameBoard] = useState(buildMatrix(gameNumbers[0]));
  const [green, setGreen] = useState(false);
  const [countMove, setCountMove] = useState(0);
  const solution = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0];
  const [animate, setAnimate]= useState(false);

  const movePiece = (e, numberToMove, numberToMoveXIndex, numberToMoveYIndex) => {
    let zeroRowIndex = 0;
    let zeroColumnIndex = 0;

    //Loop thru game board matrix to find position of 0
    gameBoard.map((row, rowIndex) =>
      row.map((number, columnIndex) => {
        if (number === 0) { zeroRowIndex = rowIndex; zeroColumnIndex = columnIndex; }
      })
    )

    //If its a valid move 
    let yIndexWithinRange = false;
    let xIndexWithinRange = false;

    if (
      numberToMoveXIndex === zeroColumnIndex + 1 ||
      numberToMoveXIndex === zeroColumnIndex - 1) {
      xIndexWithinRange = true;
    }
    if (
      numberToMoveYIndex === zeroRowIndex + 1 ||
      numberToMoveYIndex === zeroRowIndex - 1) {
      yIndexWithinRange = true;
    }

    if ((xIndexWithinRange && !yIndexWithinRange) || (!xIndexWithinRange && yIndexWithinRange)) {
      //Set the seleced piece on the position of 0 (or empty cell)
      gameBoard[zeroRowIndex][zeroColumnIndex] = numberToMove;
      //Move 0 (or empty cell) to original position of moved number
      gameBoard[numberToMoveYIndex][numberToMoveXIndex] = 0;
      setCountMove(countMove + 1);
      setAnimate(true);

      //Check when completed 
      if (solution.toString() === gameBoard.toString()) {
        setGreen(true);
      };
    }
  }

  useEffect(() => {
    return () => {
    }
  }, [countMove])

  return (
    <StyledBoardWrapper>
      <StyledBoard>

        {gameBoard.map((row, rowIndex) =>
          row.map((number, columnIndex) =>
            number !== 0 ?
              <Cell
                key={number}
                onClick={e => movePiece(e, number, columnIndex, rowIndex)}
                green={green}
                animate={animate}
                x={number}
                id={number}
              /> :
              <div key={number} id={number} />
          )
        )}

      </StyledBoard>
      {green ? <div className="gratz" id="gratz1"><p>Congratulation!<br></br> You cleared the puzzle on {countMove} moves. </p></div> : <div className="move-count">Moves: {countMove}</div>}
    </StyledBoardWrapper>
  )

}

export default PuzzleBoard;
