import styled from "styled-components";

export const StyledWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: #bbb;
`;

export const StyledPuzzle = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
  flex-direction: column;

  div {
    
    .button {
      cursor: pointer;
      background: rgba(0, 0, 0, 0.9);
      border-radius: 3px;
      color: whitesmoke;
      border: none;
      outline: none;
      font-size: 1.5rem;
      padding: 1.2rem;
      margin: 1rem 3rem;
      &:hover {
        background-color: #a7a7a7;
      }
    }
  }
`;
