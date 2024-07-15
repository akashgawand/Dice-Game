import PropTypes from "prop-types";
import styled from "styled-components";

const RollDice = ({ CurrentDice, rollDice }) => {


  return (
    <RollContainer>
      <div className="dice" onClick={rollDice}>
        <img src={`/images/dice_${CurrentDice}.png`} alt="Dice" />
      </div>
      <p>Click on Dice To Roll</p>
    </RollContainer>
  );
};

RollDice.propTypes = {
  CurrentDice: PropTypes.number.isRequired,
  rollDice: PropTypes.func.isRequired,
};

export default RollDice;

const RollContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & p {
    padding: 10px;
    font-size: 24px;
    font-weight: 500;
  }

  .dice img {
    transition: filter 0.3s ease-in-out;
  }

  .dice:hover img {
    filter: drop-shadow(0 0 20px black);
  }
`;
