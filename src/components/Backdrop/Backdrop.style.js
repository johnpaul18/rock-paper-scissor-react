import styled from "styled-components";

export const StyledBackdrop = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(1, 1, 1, 0.2);
`;
