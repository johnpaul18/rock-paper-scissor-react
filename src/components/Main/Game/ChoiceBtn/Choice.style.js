import styled from "styled-components";

const ripple = (x, y) => `
@keyframes ripple {
  0% {
    box-shadow: 0 0 0 0 hsla(${x}, 0.3),
      0 0 0 1em hsla(${y}, 0.3),
      0 0 0 3em hsla(${x}, 0.3),
      0 0 0 5em hsla(${y}, 0.3);
  }
  100% {
    box-shadow: 0 0 0 1em rgba(0, 0, 0, 0.1), 0 0 0 3em rgba(0, 0, 0, 0.1),
      0 0 0 5em rgba(0, 0, 0, 0.1), 0 0 0 8em rgba(0, 0, 0, 0.1);
  }
}`;

export const StyledChoice = styled.button`
  cursor: pointer;
  position: absolute;
  background: rgb(0, 0, 0);
  background: radial-gradient(
    circle,
    hsla(${(props) => props.styleProps.bgColor[0]}, 1),
    hsla(${(props) => props.styleProps.bgColor[1]}, 1)
  );
  ${(props) => (props.styleProps.reveal ? "background: none;" : "")}

  ${(props) =>
    props.styleProps.reveal
      ? ""
      : "box-shadow: -1px -12px 0px -4px rgba(0, 0, 0, 0.25) inset;"}
  left: ${(props) => props.styleProps.left};
  top: ${(props) => props.styleProps.top};

  transform: translate(
    -${(props) => props.styleProps.left},
    -${(props) => props.styleProps.top}
  );

  display: ${(props) => (props.styleProps.visible ? "block" : "none")};

  outline: none;
  border-radius: 50%;
  padding: 10px;
  width: ${(props) => (props.styleProps.scale ? "220px" : "150px")};
  height: ${(props) => (props.styleProps.scale ? "220px" : "150px")};
  border: none;
  z-index: 1;
  transition: 1s;
  box-sizing: border-box;

  &::after {
    position: absolute;
    left: 0;
    right: 0;
    top: -50%;
    content: "${(props) => props.styleProps.content}";
    white-space: nowrap;
    font-size: 21px;
    color: #fff;
    overflow: visible;
  }
  &::before {
    content: "";
    box-sizing: border-box;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    transform: scale(0.7);
    z-index: -1;
    border-radius: 50%;
    position: absolute;
    transition: 0.5s;
    ${(props) =>
      props.styleProps.reveal
        ? "animation: flip-in-ver-right 1s cubic-bezier(.25,.46,.45,.94) both;"
        : ""}

    ${(props) =>
      props.styleProps.reveal
        ? "background-color: rgba(0,0,0,0.2);"
        : "background-color: rgba(255,255,255,1);"};

    ${(props) =>
      props.styleProps.reveal
        ? ""
        : "box-shadow: -1px 12px 0px -4px rgba(0, 0, 0, 0.25) inset;"}
  }

  ${(props) =>
    props.styleProps.win
      ? `${`animation: ripple 1.7s linear infinite;`} ${ripple(
          props.styleProps.bgColor[0],
          props.styleProps.bgColor[1]
        )}`
      : ""}

  @keyframes flip-in-ver-right {
    0% {
      transform: rotateY(-80deg);
      opacity: 0;
    }
    100% {
      transform: rotateY(0);
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    width: ${(props) => (props.styleProps.scale ? "180px" : "120px")};
    height: ${(props) => (props.styleProps.scale ? "180px" : "120px")};
    &::after {
      font-size: 16px;
      top: 110%;
    }
  }
  @media (max-width: 576px) {
    width: ${(props) => (props.styleProps.scale ? "125px" : "80px")};
    height: ${(props) => (props.styleProps.scale ? "125px" : "80px")};
    &::after {
      font-size: 12px;
    }
  }

  @media (max-height: 768px) {
    width: ${(props) => (props.styleProps.scale ? "135px" : "85px")};
    height: ${(props) => (props.styleProps.scale ? "135px" : "85px")};
    &::after {
      font-size: 12px;
    }
  }
`;
