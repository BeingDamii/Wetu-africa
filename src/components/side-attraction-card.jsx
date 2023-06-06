import styled from "styled-components";

const SideAttractionCard = ({ data }) => {
  return (
    <StyledSideAttractionCard>
      <img src={data.img} alt="this is a card img" />
      <h1 id="title">{data.title}</h1>
      <p id="desc">{data.description}</p>
    </StyledSideAttractionCard>
  );
};

// styles

const StyledSideAttractionCard = styled.div`
  background-color: white;
  cursor: pointer;
  img {
    width: 100%;
  }
  #title {
    font-size: 18px;
    margin-top: 10px;
  }
  #desc {
    line-height: 148%;
    font-size: 14px;
    color: #606060;
    margin-top: 10px;
  }
`;

export default SideAttractionCard;
