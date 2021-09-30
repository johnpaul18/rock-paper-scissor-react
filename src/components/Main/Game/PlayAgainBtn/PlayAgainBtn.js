import { StyledPlayAgainBtn } from "./PlayAgainBtn.style";

const PlayAgainBtn = ({ msg, click }) => {
  return (
    <StyledPlayAgainBtn result={msg} onClick={click}>
      PLAY AGAIN
    </StyledPlayAgainBtn>
  );
};

export default PlayAgainBtn;
