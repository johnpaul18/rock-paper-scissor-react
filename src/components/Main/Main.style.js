import styled from "styled-components";
export const StyledMain = styled.div`
  display: flex;
  justify-content: center;
  width: 768px;
  max-width: 100%;
  position: relative;
  margin: 30px auto;

  overflow: visible;
  min-height: 430px;
  @media (max-width: 768px) {
    width: 476px;
  }

  @media (max-width: 576px) {
    width: 376px;
  }

  @media (max-height: 768px) {
    width: 530px;
  }
`;
