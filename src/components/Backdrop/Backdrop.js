import { StyledBackdrop } from "./Backdrop.style";

const Backdrop = ({ children, show, click }) => {
  return show ? (
    <StyledBackdrop onClick={click}>{children}</StyledBackdrop>
  ) : null;
};

export default Backdrop;
