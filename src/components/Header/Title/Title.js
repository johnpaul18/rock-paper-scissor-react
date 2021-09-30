import { StyledTitle } from "./Title.style";
import logo from "./../../../icons/logo-bonus.svg";

const Title = () => {
  return (
    <StyledTitle>
      <img src={logo} alt="logo" height="100%" width="100%" />
    </StyledTitle>
  );
};

export default Title;
