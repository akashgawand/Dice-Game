import styled from "styled-components";
import PropTypes from "prop-types";

const LandingPage = ({ toggle }) => {
  return (
    <Container>
      <div>
        <img src="/images/dices1.png" alt="Dice game" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Game</Button>
      </div>
    </Container>
  );
};

LandingPage.propTypes = {
  toggle: PropTypes.func.isRequired,
};

export default LandingPage;

const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  .content {
    & h1 {
      font-size: 96px;
      white-space: nowrap;
    }
  }
`;

const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 18px;
  gap: 10px;
  width: 220px;
  height: 44px;
  background: black;
  color: white;
  font-size: larger;
  border-radius: 5px;
  outline: none;
  border: none;
  cursor: pointer;
  border: 1px solid transparent;
  transition: 0.3s background ease-in;

  &:hover {
    color: black;
    background-color: white;
    border: 1px solid black;
    transition: 0.3s background ease-in;
  }
`;
