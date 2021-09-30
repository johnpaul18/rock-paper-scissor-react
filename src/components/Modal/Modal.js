import { StyledModal } from "./Modal.style";
import Backdrop from "../Backdrop/Backdrop";

const Modal = ({ img, show, click }) => {
  return (
    <Backdrop show={show} click={click}>
      <StyledModal onClick={1}>
        <img src={img} alt="rules" />
      </StyledModal>
    </Backdrop>
  );
};

export default Modal;
