import styled from "styled-components";
import PropTypes from "prop-types";

const NumberSelector = ({ SelectedNumber, setSelectedNumber }) => {
  const arrNum = [1, 2, 3, 4, 5, 6];

  return (
    <NumberSelectorContainer>
      <div className="flexbox">
        {arrNum.map((value, index) => (
          <Box
            key={index}
            onClick={() => setSelectedNumber(value)}
            isSelectedNumber={value == SelectedNumber}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

NumberSelector.propTypes = {
  SelectedNumber: PropTypes.number,
  setSelectedNumber: PropTypes.func.isRequired,
};

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  .flexbox {
    display: flex;
    gap: 10px;

    .Box {
      cursor: pointer;
    }
  }
  & p {
    font-size: 24px;
    font-weight: 500;
    padding: 10px;
  }
`;

const Box = styled.button`
  height: 72px;
  width: 72px;
  font-size: 24px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid;
  background-color: ${(props) => (props.isSelectedNumber ? "black" : "white")};
  color: ${(props) => (props.isSelectedNumber ? "white" : "black")};
`;

export default NumberSelector;
