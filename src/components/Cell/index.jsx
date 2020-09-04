import React from 'react';
import { StyledCell } from './style.jsx';

const Cell = props => {
   
    return (
        <StyledCell
         onClick={props.onClick}
         green={props.green}
         id={props.id} 
        >
            {props.x}
        </StyledCell>)
}

export default Cell;