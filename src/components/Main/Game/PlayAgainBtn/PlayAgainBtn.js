import { StyledPlayAgainBtn } from "./PlayAgainBtn.style";

const PlayAgainBtn = ({ msg, click }) => {
  return (
    <>
      <p>dasdsa</p>
      <StyledPlayAgainBtn result={msg} onClick={click}>
        PLAY AGAIN
      </StyledPlayAgainBtn>
    </>
  );
};

export default PlayAgainBtn;
