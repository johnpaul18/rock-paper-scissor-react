import styled from "styled-components";

export const StyledScore = styled.div`
  font-family: "Barlow Semi Condensed", sans-serif;
  background-color: #fff;
  border-radius: 15px;
  text-align: center;
  width: 120px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  line-height: 37px;
  & span {
    color: hsl(229, 64%, 46%);
    font-weight: 600;
    font-size: 16px;
  }
  & .score {
    font-weight: 700;
    color: hsl(229, 25%, 31%);
    font-size: 50px;
    line-height: 20px;
  }

  @media (max-width: 768px) {
    line-height: 28px;
    & span {
      font-size: 16px;
    }
    & .score {
      font-size: 50px;
    }
  }
  @media (max-width: 576px) {
    line-height: 21px;
    & span {
      font-size: 12px;
    }
    & .score {
      font-size: 37px;
    }
  }
`;
