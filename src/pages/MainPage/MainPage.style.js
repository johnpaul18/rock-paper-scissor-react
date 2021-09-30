import styled from "styled-components";

export const StyledMainPage = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@600;700&display=swap");
  font-family: "Barlow Semi Condensed", sans-serif;
  text-align: right;
  width: 100%;
  height: 100vh;
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

  padding: 30px;
  min-width: 375px;
`;
