import { StyledMain } from "./Main.style";
import Game from "./Game/Game";
import { useState } from "react";
import { PentagonContext } from "../../contexts/PentagonContext";

const Main = () => {
  const [pentagonState, setPentagonState] = useState(true);
  console.log(pentagonState);
  return (
    <StyledMain>
      <PentagonContext.Provider value={{ pentagonState, setPentagonState }}>
        <Game />
      </PentagonContext.Provider>
    </StyledMain>
  );
};

export default Main;
