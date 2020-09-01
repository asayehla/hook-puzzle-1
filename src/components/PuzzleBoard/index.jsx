import React, { useState } from 'react';
import { StyledBoard } from './style';
import Cell from '../Cell';

const PuzzleBoard = props => {
  const gameNumbers = Object.values(props.array);
  const [arrayToRender, setArrayToRender] = useState(gameNumbers[0]);
 
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0];
 
  const movePiece = (e) => {
    console.log(e.target);
    //setArrayToRender([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0]);
   
  }
  return (
  
    <StyledBoard >
      {arrayToRender.map((x, index) =>
        x !== 0 ?
          <Cell
            key={index}
            position={index+1}
            onClick={e => movePiece(e)}
            x={x}
            value={x}
          /> : <div key={index} />
      )}
      
    </StyledBoard>
  )

}

export default PuzzleBoard;
