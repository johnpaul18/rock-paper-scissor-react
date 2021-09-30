import { StyledPlayAgainBtn } from "./PlayAgainBtn.style";

const PlayAgainBtn = ({ msg, click }) => {
  return (
    <StyledPlayAgainBtn result={msg} onClick={click}>
      <p>{msg}</p>
      PLAY AGAIN
    </StyledPlayAgainBtn>
  );
};

export default PlayAgainBtn;
