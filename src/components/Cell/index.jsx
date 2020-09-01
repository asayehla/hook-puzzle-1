import React,{useState} from 'react';
import { StyledCell } from './style.jsx';

const Cell = props => {
   const [green, setGreen] = useState(false);
 
    /*
        if (props.position===props.x){
            setGreen(true);
        }  */

    return (
        <StyledCell
         onClick={props.onClick}
         green={green}
         position={props.position}
         value={props.x}
        >
            {props.x}
        </StyledCell>)
}

export default Cell;