import styled from "styled-components";

export const StyledPlayAgainBtn = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 100;
  color: #fff;
  transform: translate(-50%, -50%);
  font-size: 37px;
  width: 900px;
  background-color: #fff;
  outline: none;
  border: none;
  border-radius: 5px;
  -webkit-animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  @-webkit-keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  width: auto;
  &::before {
    content: "${(props) => `${props.result}`}";
    font-family: "Barlow Semi Condensed", sans-serif;
    position: absolute;
    font-weight: 700;
    top: -100%;
    left: 0;
    right: 0;
    white-space: nowrap;
  }
  &::after {
    position: absolute;
    content: "PLAY AGAIN";
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 16px;
    white-space: nowrap;
    color: ${(props) =>
      props.result === "YOU LOSE" ? "red" : "hsl(214, 47%, 23%)"};
    z-index: 2;
  }

  @media (max-width: 776px) {
    top: 105%;
    font-size: 21px;
  }
`;
