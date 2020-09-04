import styled from "styled-components";

export const StyledCell = styled.div`
  font-size: 2rem;
   background-color: ${(props) =>
    props.green ? "rgba(0,0,0,0.1)" : "rgba(222, 218, 211, 0.9)"}; 
  border: ${(props) =>
    props.green ? "black 1.2px solid" : "rgba(0, 0, 0, 0.9) 1.2px solid"};
  color: ${(props) => (props.green ? "black" : "black")};
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;

`;
