import styled from "styled-components";

const LocationCard = ({ data }) => {
  return (
    <StyledLocationCard>
      <img src={data.mainImg} alt="this is a card img" />
      <h1>{data.title}</h1>
      <p>{data.shortDescription}</p>
    </StyledLocationCard>
  );
};

// styles

const StyledLocationCard = styled.div`
  background-color: white;
  cursor: pointer;
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
    margin-top: 10px;
  }
`;
export default LocationCard;
