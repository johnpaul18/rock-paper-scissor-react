import styled from "styled-components";

export const StyledMainPage = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@600;700&display=swap");
  font-family: "Barlow Semi Condensed", sans-serif;
  text-align: right;
  width: 100%;
  height: 100vh;
  min-height: 665px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background: hsl(214, 47%, 23%);
  background: radial-gradient(
    circle,
    hsl(214, 47%, 23%) 0%,
    hsl(237, 49%, 15%) 100%
  );

  justify-content: center;
  align-items: flex-end;

  padding: 30px;
  min-width: 375px;

  @media (max-width: 576px) {
    align-items: center;
  }
`;
