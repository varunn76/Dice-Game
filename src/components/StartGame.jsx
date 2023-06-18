import styled from "styled-components";
import { Button } from "../styled/Button";
const StartGame = ({toggle}) => {
  return (
    <Container>
        <div>
        <img src="/images/dices.png" alt="dices" />
        </div>
        <div className="content">
            <h1>Dice Game</h1>
            <Button
            onClick={toggle} 
            >Play Now</Button>
        </div>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  height: 100vh;
  max-width: 1180px;
  margin:0 auto ;
  align-items: center;

  .content {
    h1{
        font-size: 96px;
        white-space: nowrap;
    }
}
`;

export default StartGame;