import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const LocationCard = ({ data }) => {
  const navigate = useNavigate();
  function clickHandler() {
    navigate(data.url);
  }
  return (
    <StyledLocationCard onClick={clickHandler}>
      <img src={data.mainImg} alt="this is a card img" />
      <h1>{data.title}</h1>
      <p>{data.shortDescription}</p>
    </StyledLocationCard>
  );
};

// styles

const StyledLocationCard = styled.div`
  /* background-color: white; */
  cursor: pointer;
  padding: 10px;
  img {
    width: 100%;
  }
  h1 {
    font-size: 18px;
  }
  p {
    line-height: 148%;
    font-size: 14px;
    color: #606060;
    color: #b4b4b4;
    margin-top: 10px;
  }
`;
export default LocationCard;
