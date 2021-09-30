import styled from "styled-components";

export const StyledRules = styled.button`
  position: absolute;
  bottom: 3%;
  right: 3%;
  background-color: transparent;
  outline: none;
  border: 2px solid rgba(255, 255, 255, 0.6);
  font-size: 22px;
  color: white;
  padding: 5px 35px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  width: 100px;

  @media (max-width: 576px) {
    left: 50%;
    transform: translate(-50%, -3%);
  }

  @media (max-height: 768px) {
    left: 50%;
    transform: translate(-50%, -3%);
  }
`;
