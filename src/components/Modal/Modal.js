import { StyledModal } from "./Modal.style";
import Backdrop from "../Backdrop/Backdrop";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ img, show, click }) => {
  return (
    <Backdrop show={show}>
      <StyledModal>
        <div className="head">
          <h3>RULES</h3>
          <button className="top" onClick={click}>
            <AiOutlineClose />
          </button>
        </div>
        <img src={img} alt="rules" />
        <button onClick={click} className="bot">
          <AiOutlineClose />
        </button>
      </StyledModal>
    </Backdrop>
  );
};

export default Modal;
