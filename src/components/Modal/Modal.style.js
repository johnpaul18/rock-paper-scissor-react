import styled from "styled-components";

export const StyledModal = styled.div`
  position: absolute;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 30px;
  z-index: 9999;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & .head {
    font-family: "Barlow Semi Condensed", sans-serif;
    font-weight: 700;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    box-sizing: border-box;
    height: 40px;
    margin: 10px 5px;
    font-size: 30px;
    color: hsl(214, 47%, 23%);
  }

  & button {
    cursor: pointer;
    background-color: transparent;
    outline: none;
    border: none;
    font-size: 30px;
    font-weight: bold;
    color: rgba(1, 1, 1, 0.5);
  }
  & .bot {
    display: none;
    margin-top: 30px;
  }

  @media (max-width: 576px) {
    width: 100%;
    height: 100%;
    & .top {
      display: none;
    }
    & .bot {
      display: block;
    }
    & .head {
      justify-content: center;
      margin: 50px 0;
    }
  }
`;
