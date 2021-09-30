import { StyledRules } from "./Rules.style";
import Modal from "../Modal/Modal";
import { useState } from "react";
import rules from "./../../icons/image-rules-bonus.svg";

const Rules = () => {
  const [showRules, setShowRules] = useState(false);

  const closeModal = () => {
    console.log(showRules);
    setShowRules(true);
  };

  return (
    <>
      <StyledRules onClick={closeModal}>Rules</StyledRules>
      <Modal
        img={rules}
        click={() => setShowRules(!showRules)}
        show={showRules}
      />
    </>
  );
};

export default Rules;
