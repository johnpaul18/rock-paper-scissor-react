import { StyledMainPage } from "./MainPage.style";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import { useState } from "react";
import { ScoreContext } from "./../../contexts/ScoreContext";
import Rules from "../../components/Rules/Rules";

const MainPage = () => {
  const [score, setScore] = useState(0);

  return (
    <StyledMainPage>
      <ScoreContext.Provider value={{ score, setScore }}>
        <Header />
        <Main />
      </ScoreContext.Provider>
      <Rules />
    </StyledMainPage>
  );
};

export default MainPage;
