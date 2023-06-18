import { useState } from "react";
import styled from "styled-components";

const RollDice = ({currentDice, roleDice}) => {

  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img src={`/images/dice/dice_${currentDice}.png`} alt={`dice ${currentDice}`} />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};

const DiceContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 48px;

  .dice{
    cursor: pointer;
  }

  p{
    font-size: 24px;
    font-weight: 500;
    line-height: 36px;

  }
`;

export default RollDice;