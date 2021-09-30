import { StyledGame } from "./Game.style";
import { useState, useContext } from "react";
import { ScoreContext } from "../../../contexts/ScoreContext";
import { PentagonContext } from "../../../contexts/PentagonContext";
import Button from "./ChoiceBtn/Choice";
import PlayAgainBtn from "./PlayAgainBtn/PlayAgainBtn";
import ScissorIcon from "./../../../icons/icon-scissors.svg";
import PaperIcon from "./../../../icons/icon-paper.svg";
import RockIcon from "./../../../icons/icon-rock.svg";
import LizardIcon from "./../../../icons/icon-lizard.svg";
import SpockIcon from "./../../../icons/icon-spock.svg";

const Buttons = () => {
  const { score, setScore } = useContext(ScoreContext);
  const { setPentagonState } = useContext(PentagonContext);

  const buttonInitialState = {
    scissors: {
      visible: true,
      left: "50%",
      top: "7%",
      icon: ScissorIcon,
      bgColor: ["39, 89%, 49%", "39, 89%, 49%"],
    },
    paper: {
      visible: true,
      left: "100%",
      top: "50%",
      icon: PaperIcon,
      bgColor: ["230, 89%, 62%", "230, 89%, 65%"],
    },
    rock: {
      visible: true,
      left: "80%",
      top: "100%",
      icon: RockIcon,
      bgColor: ["349, 71%, 52%", "349, 70%, 56%"],
    },
    lizard: {
      visible: true,
      left: "20%",
      top: "100%",
      icon: LizardIcon,
      bgColor: ["261, 73%, 60%", "261, 72%, 63%"],
    },
    spock: {
      visible: true,
      left: "0%",
      top: "50%",
      icon: SpockIcon,
      bgColor: ["189, 59%, 53%", "189, 58%, 57%"],
    },
  };

  const [buttonState, setButtonState] = useState({ ...buttonInitialState });
  const [drawState, setDrawState] = useState({ visible: false });
  const [playAgain, setPlayAgain] = useState({ visible: false, result: "" });

  const getResult = (x, y) => {
    const keys = Object.keys(buttonState);

    let result;

    switch (x) {
      case keys[0]:
        result = [keys[1], keys[3]].indexOf(y) + 1;
        break;
      case keys[1]:
        result = [keys[2], keys[4]].indexOf(y) + 1;
        break;
      case keys[2]:
        result = [keys[0], keys[3]].indexOf(y) + 1;
        break;
      case keys[3]:
        result = [keys[1], keys[4]].indexOf(y) + 1;
        break;
      case keys[4]:
        result = [keys[0], keys[2]].indexOf(y) + 1;
        break;

      default:
        result = 0;
        break;
    }

    return result;
  };

  const pick = (playerChoice) => {
    const choices = ["scissors", "paper", "rock", "lizard", "spock"];
    const botChoice = choices[Math.floor(Math.random() * choices.length)];

    let playerPosition = {
      ...buttonState[playerChoice],
      visible: true,
      left: "20%",
      top: "50%",
      content: "YOU PICKED",
      scale: true,
    };

    let botPosition = {
      ...buttonState[botChoice],
      visible: true,
      left: "80%",
      top: "50%",
      scale: true,
      content: "THE HOUSE PICKED",
      reveal: true,
    };

    const newButtonsState = {
      scissors: { ...buttonState.scissors, visible: false },
      paper: { ...buttonState.paper, visible: false },
      rock: { ...buttonState.rock, visible: false },
      lizard: { ...buttonState.lizard, visible: false },
      spock: { ...buttonState.spock, visible: false },
      [playerChoice]: { ...playerPosition },
    };

    setPentagonState(false);
    setDrawState({ ...botPosition });
    setButtonState({ ...newButtonsState });

    setTimeout(function () {
      const result = getResult(playerChoice, botChoice);

      botPosition = {
        ...botPosition,
        reveal: false,
      };

      if (playerChoice !== botChoice)
        !result
          ? (botPosition = {
              ...botPosition,
              win: 1,
            })
          : (playerPosition = {
              ...playerPosition,
              win: 1,
            });
      else {
        botPosition = {
          ...botPosition,
          win: 1,
        };

        playerPosition = {
          ...playerPosition,
          win: 1,
        };
      }

      setDrawState({ ...botPosition });
      setButtonState({
        ...newButtonsState,
        [playerChoice]: { ...playerPosition },
      });

      setTimeout(function () {
        botPosition = {
          ...botPosition,
          left: "100%",
        };
        playerPosition = {
          ...playerPosition,
          left: "0%",
        };

        setDrawState({ ...botPosition });
        setButtonState({
          ...newButtonsState,
          [playerChoice]: playerPosition,
        });

        if (playerChoice !== botChoice) {
          const newScore = result ? score + 1 : score - 1;
          const resultMsg = result ? "YOU WIN" : "YOU LOSE";

          setPlayAgain({ visible: true, result: resultMsg });
          setScore(newScore);
        } else {
          setPlayAgain({ visible: true, result: "DRAW" });
        }
      }, 1000);
    }, 1000);
  };

  const playAgainHandler = () => {
    setButtonState({});
    setButtonState({ ...buttonInitialState });
    setDrawState({});
    setPlayAgain({});
    setPentagonState(true);
  };

  const buttons = Object.keys(buttonState).map((keys, i) => (
    <Button
      key={i}
      picked={() => pick(keys)}
      styleProps={{ ...buttonState[keys] }}
    />
  ));

  return (
    <StyledGame>
      {playAgain.visible ? (
        <PlayAgainBtn
          click={() => {
            playAgainHandler();
          }}
          msg={playAgain.result}
        />
      ) : (
        ""
      )}
      {buttons}
      {drawState.visible ? <Button styleProps={{ ...drawState }} /> : ""}
    </StyledGame>
  );
};

export default Buttons;
