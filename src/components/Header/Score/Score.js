import { StyledScore } from "./Score.style";
import { useContext } from "react";
import { ScoreContext } from "../../../contexts/ScoreContext";

const Score = () => {
  const { score } = useContext(ScoreContext);

  return (
    <StyledScore>
      <div>
        <span className="score">
          <span>Score</span> <br />
          {score}
        </span>
      </div>
    </StyledScore>
  );
};

export default Score;
