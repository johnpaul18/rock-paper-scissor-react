import styled from "styled-components";

export const StyledHeader = styled.header`
  font-weight: 700;
  width: 768px;
  height: 10vh;
  min-height: 100px;

  margin: 0px auto 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  color: #fff;
  box-sizing: border-box;
  border: 3px solid hsl(217, 16%, 45%);
  border-radius: 15px;

  @media (max-width: 768px) {
    width: 90%;
  }
`;
