import styled from "styled-components";

export const StyledWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: #bbb;
`;

export const StyledPuzzle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  div {
    .button {
      cursor: pointer;
      background: #747787;
      border-radius: 3px;
      color: whitesmoke;
      border: none;
      outline: none;
      font-size: 2rem;
      letter-spacing: 2px;
      padding: 10px 2rem;
      margin: 0.1rem;
      box-shadow: 3px 3px 4px 0px rgba(0, 0, 0, 0.75);
      &:hover {
        background-color: #a7a7a7;
        transform-style: preserve-3d;
        transition: transform 150ms cubic-bezier(0, 0, 0.58, 1),
      }
      
    }
  }
`;
