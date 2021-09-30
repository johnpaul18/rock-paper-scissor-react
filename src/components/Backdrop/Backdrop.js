import { StyledBackdrop } from "./Backdrop.style";

const Backdrop = ({ children, show }) => {
  return show ? <StyledBackdrop>{children}</StyledBackdrop> : null;
};

export default Backdrop;
