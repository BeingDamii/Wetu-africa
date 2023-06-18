import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const LocationCard = ({ data }) => {
  const navigate = useNavigate();
  function clickHandler() {
    navigate(data.url);
  }
  return (
    <StyledLocationCard className="location-card" onClick={clickHandler}>
      <img src={data.mainImg} alt="this is a card img" />
      <h1>{data.title}</h1>
      <p>{data.shortDescription}</p>
    </StyledLocationCard>
  );
};

// styles

const StyledLocationCard = styled.div`
  cursor: pointer;
  padding: 10px;
  @media only screen and (max-width: 767px) {
    padding: 0px;
  }
  img {
    width: 100%;
    @media only screen and (max-width: 767px) {
      height: 35vh;
      object-fit: cover;
    }
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
