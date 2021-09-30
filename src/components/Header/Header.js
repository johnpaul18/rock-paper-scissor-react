import { StyledHeader } from "./Header.style";
import Title from "./Title/Title";
import Score from "./Score/Score";
const Header = () => {
  return (
    <StyledHeader>
      <Title />
      <Score />
    </StyledHeader>
  );
};

export default Header;
