import React, { useState } from 'react';

const CreatePuzzleBoard = props => {
  const gameNumbers = Object.values(props.array);
  const arrayToRender = gameNumbers[0];
  
  const [value, setValue] = useState();

  const [renderClass, setRenderClass] = useState(true);

  console.log(value);

  return (
    arrayToRender.map((x, index) => 

      <span
        className={renderClass ? "piece" : "blank"}
        onClick={() => setValue(x)}
        key={index}
      >
        {x}
      </span>
    
    )
    
 
  )
}


export default CreatePuzzleBoard;
