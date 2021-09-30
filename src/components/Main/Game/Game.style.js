import styled from "styled-components";
import pentagon from "./../../../icons/bg-pentagon.svg";
import { useContext } from "react";
import { PentagonContext } from "../../../contexts/PentagonContext";

export const StyledGame = styled.div`
  position: relative;
  ${() => {
    const { pentagonState } = useContext(PentagonContext);
    return pentagonState ? `background-image: url(${pentagon});` : "";
  }}
  width: 100%;
  background-size: 77%;
  background-position: center 85%;
  background-repeat: no-repeat;
  height: 0;
  padding: 0; /* reset */
  padding-bottom: 90%;
  margin-top: 5px;
`;
