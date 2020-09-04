import styled from "styled-components";

export const StyledBoard = styled.div`
  background: linear-gradient(
    150deg,
    rgba(255, 171, 0, 1) 37%,
    rgba(218, 99, 14, 1) 69%,
    rgba(130, 44, 18, 1) 100%
  );

  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 5px;
  box-shadow: 3px 3px 4px 0px rgba(0, 0, 0, 0.75);
  border: ${(props) => (props.animate ? "1px solid #333" : "2px solid #333")};
  border-radius: 3px;
  padding: 1rem;

  @media screen and (min-width: 392px) {
    width: 80vw;
    height: 80vw;
  }

  @media screen and (min-width: 800px) {
    width: 60vh;
    height: 60vh;
  }
`;

export const StyledBoardWrapper = styled.div`
  #gratz1 {
    animation-timing-function: ease-in-out;
  }
  @keyframes mymove {
  0%   {color: red;}
  50%  {color: blue;}
  100% {color: red;}
}

  .gratz {
    font-size: 1rem;
    font-weight: bold;
    position: relative;
    animation: mymove 3s infinite;
  }

  .move-count {
    display: flex;
    padding: 10px 0;
    font-size: 1.2rem;
  }
`;
