import { StyledChoice } from "./Choice.style";
import { useContext } from "react";
import { PentagonContext } from "../../../../contexts/PentagonContext";

const Button = ({ styleProps, picked }) => {
  const { pentagonState } = useContext(PentagonContext);
  const disable = !pentagonState;

  return (
    <StyledChoice styleProps={styleProps} onClick={picked} disabled={disable}>
      {styleProps.reveal ? (
        ""
      ) : (
        <img src={styleProps.icon} alt="" height="50%" width="50%" />
      )}
    </StyledChoice>
  );
};

export default Button;
