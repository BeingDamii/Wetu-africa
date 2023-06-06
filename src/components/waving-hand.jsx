import styled from "styled-components";
import { WavingHandIcon } from "../resources/icons";

const WavingHand = () => {
  return (
    <StyledWavingHand>
      <WavingHandIcon/>
    </StyledWavingHand>
  );
};

const StyledWavingHand = styled.div`
  width: 80px;
  height: 80px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00277a;
  border-radius: 50%;
  bottom: 50px;
  right: 70px;
`;

export default WavingHand;
