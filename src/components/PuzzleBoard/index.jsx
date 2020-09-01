import React from 'react';
import { StyledBoard } from './style';
import Cell from '../Cell';
import buildMatris from '../../buildMatris';

const PuzzleBoard = props => {
  const gameNumbers = Object.values(props.array);
  const arrayToRender = gameNumbers[0];
  const gameBoard = buildMatris(arrayToRender);

  const movePiece = (e) => {
    let b = e.target.id;
    console.log(b);
  }

  return (
    <StyledBoard >
      {gameBoard.map((row, rowIndex) =>
        row.map((number, index) =>
          number !== 0 ?
            <Cell
              key={number}
              position={index+1}
              onClick={e => movePiece(e)}
              x={number}
              id={number}
            /> : <div key={number} id={number} />
        )
      )} 
      
    </StyledBoard>
  )

}

export default PuzzleBoard;
